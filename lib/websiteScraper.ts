// lib/websiteScraper.ts
import type { KnowledgeItem } from "./knowledgeStore";

export async function scrapeKenmarkWebsite(): Promise<KnowledgeItem[]> {
  return [
    {
      question: "What services does Kenmark ITan Solutions provide?",
      answer:
        "Kenmark ITan Solutions provides IT consulting, cloud solutions, cybersecurity services, AI-driven solutions, and enterprise IT support.",
    },
    {
      question: "What IT consulting services are offered by Kenmark ITan Solutions?",
      answer:
        "Kenmark ITan Solutions offers IT consulting services focused on digital transformation, technology strategy, and enterprise IT optimization.",
    },
    {
      question: "What enterprise IT support services does Kenmark ITan Solutions provide?",
      answer:
        "Kenmark ITan Solutions provides enterprise IT support including infrastructure management, system maintenance, and ongoing technical support.",
    },
    {
      question: "Does Kenmark ITan Solutions offer cloud solutions?",
      answer:
        "Yes, Kenmark ITan Solutions offers cloud-based solutions to help businesses scale and manage their IT infrastructure.",
    },
    {
      question: "Does Kenmark ITan Solutions provide cybersecurity services?",
      answer:
        "Yes, Kenmark ITan Solutions provides cybersecurity services to protect enterprise systems and data.",
    },
    {
      question: "Does Kenmark ITan Solutions work with AI-driven solutions?",
      answer:
        "Yes, Kenmark ITan Solutions provides AI-driven solutions as part of their technology offerings.",
    },
    {
      question: "How can I contact Kenmark ITan Solutions?",
      answer:
        "You can contact Kenmark ITan Solutions through the contact page on their official website kenmarkitan.com.",
    },
    {
      question: "Is there a website for Kenmark ITan Solutions?",
      answer:
        "Yes, the official website of Kenmark ITan Solutions is kenmarkitan.com.",
    },
  ];
}
