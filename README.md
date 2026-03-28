# CODEXIUM-Cricket_Analytics
This is to help monitor player stats and help them train efficiently.
# 🏏 Crickonix: Intelligent Cricket Analytics & Strategy Engine

## 🚀 Overview

Crickonix is a **web-based cricket analytics platform** that transforms raw match data into **actionable insights, strategy recommendations, and performance analysis** using AI.

---

## 🎯 Problem

Most teams rely on intuition due to lack of advanced tools. Existing solutions offer basic stats but lack **contextual insights, matchup analysis, and workload tracking**.

---

## 💡 Solution

A unified system combining:

* 📊 Performance analytics
* ⚔️ Matchup insights
* 🧠 Strategy recommendations
* 🏃 Workload monitoring
* 🎥 AI-based player comparison

---

## ✨ Key Features

* **Performance Dashboard** – Visual stats & player insights
* **Matchup Analysis** – Performance vs different bowling types
* **Strategy Engine** – AI-based team decisions
* **Natural Language Insights** – Auto-generated summaries
* **Workload Tracking** – Fatigue & injury alerts
* **Player Comparison** – Video-based skill analysis

---

## 🛠️ Tech Stack

* **Frontend:** Next.js, TypeScript, Tailwind, shadcn/ui
* **Backend:** Next.js APIs, FastAPI
* **AI/ML:** Scikit-learn, Pandas, NumPy
* **CV:** MediaPipe, OpenCV

---

## 📌 Status

🚧 In Development

---

⭐ *Bringing data-driven intelligence to cricket.*

 

## 🔐 AI Chatbot (Gemini) Setup

1. Copy env template:
   ```bash
   cp .env.example .env.local
   ```
2. Set your Gemini key in `.env.local`:
   ```bash
   GEMINI_API_KEY=your_actual_key
   ```
3. Run the app:
   ```bash
   npm install
   npm run dev
   ```

The floating AI chat uses `app/api/chat/route.ts` as a secure server-side proxy to Gemini.
