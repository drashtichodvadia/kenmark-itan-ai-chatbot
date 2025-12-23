// app/api/chat/route.ts
import { NextResponse } from "next/server";
import Groq from "groq-sdk";
import {
  getAllKnowledge,
  hasKnowledge,
  setKnowledge,
  type KnowledgeItem,
} from "@/lib/knowledgeStore";
import { scrapeKenmarkWebsite } from "@/lib/websiteScraper";

const client = new Groq({
  apiKey: process.env.GROQ_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json(
        { reply: "Please ask a valid question." },
        { status: 400 }
      );
    }

    // 🔥 AUTO-INITIALIZE IF EMPTY
    if (!hasKnowledge()) {
      const data = await scrapeKenmarkWebsite();
      setKnowledge(data);
    }

    const knowledge = getAllKnowledge();

    const context = knowledge
      .map(
        (k: KnowledgeItem) =>
          `Q: ${k.question}\nA: ${k.answer}`
      )
      .join("\n\n");

    const completion = await client.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "system",
          content: `You are an AI assistant for Kenmark ITan Solutions.
Answer ONLY using the information below.
If the answer is not present, say:
"I don't have that information yet."

Knowledge:
${context}`,
        },
        { role: "user", content: message },
      ],
      temperature: 0.2,
      max_tokens: 400,
    });

    return NextResponse.json({
      reply:
        completion.choices[0]?.message?.content ||
        "I don't have that information yet.",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { reply: "Internal server error." },
      { status: 500 }
    );
  }
}
