# Kenmark ITan Solutions – AI Chatbot

## 📌 Project Overview
This project is a full-stack AI-powered chatbot developed as part of a technical assignment for **Kenmark ITan Solutions**.

The chatbot acts as a virtual assistant capable of answering user queries related to:
- Company information
- Services offered
- Website content
- Contact details

The system is designed to be **accurate, safe, and non-hallucinatory** by strictly answering only from a predefined knowledge base.

---

## 🛠 Tech Stack
- **Frontend:** Next.js (App Router), React, Tailwind CSS
- **Backend:** Next.js API Routes
- **AI Engine:** Groq API (LLaMA 3.1 – 8B Instant)
- **Language:** TypeScript
- **Architecture:** Knowledge-based RAG (Retrieval Augmented Generation)

---

## ✨ Key Features
- Clean and minimal chat interface
- AI-generated responses grounded in company knowledge
- No hallucinations – unknown questions are politely refused
- Auto-initialized knowledge base
- Session-based chat history
- Responsive and professional UI

---

## 📚 Knowledge Sources
The chatbot uses a structured knowledge base derived from:
- Company website information (kenmarkitan.com)
- Manually curated Q&A entries

A **sample Excel knowledge file** is included to demonstrate extensibility.

📄 File: `knowledge_sample.xlsx`

---

## 🧠 How the Chatbot Works
1. On application load, the knowledge base is initialized automatically
2. User queries are matched against stored knowledge
3. The AI model generates responses using only the provided context
4. If information is unavailable, the chatbot responds politely instead of guessing

This approach prevents hallucinations and ensures reliable answers.

---

## ▶️ Running the Project Locally

### 1. Install dependencies
```bash
npm install

## 🚀 Live Demo

🔗 https://kenmark-itan-ai-chatbot.vercel.app

