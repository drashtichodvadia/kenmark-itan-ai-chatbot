// app/api/init/route.ts
import { NextResponse } from "next/server";
import { scrapeKenmarkWebsite } from "@/lib/websiteScraper";
import { setKnowledge } from "@/lib/knowledgeStore";

export async function GET() {
  try {
    const data = await scrapeKenmarkWebsite();
    setKnowledge(data);

    return NextResponse.json({
      message: "Kenmark ITan website knowledge loaded successfully",
      count: data.length,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to initialize knowledge base" },
      { status: 500 }
    );
  }
}
