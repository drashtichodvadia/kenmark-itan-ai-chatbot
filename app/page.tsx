"use client";
import { useEffect } from "react";
import Chatbot from "./components/chatbot";

export default function Home() {
  useEffect(() => {
    fetch("/api/init");
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-semibold text-white mb-2">
        Kenmark ITan Solutions AI Chatbot
      </h1>

      <p className="text-gray-400 text-center max-w-xl mb-10">
        Ask questions related to Kenmark ITan Solutions, its services,
        company information, and website content.
      </p>

      <Chatbot />

      <p className="mt-6 text-xs text-gray-500">
        AI-powered assistant • Academic demo project
      </p>
    </main>
  );
}
