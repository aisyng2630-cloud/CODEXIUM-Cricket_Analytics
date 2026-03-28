import { NextResponse } from "next/server";

interface GeminiPart {
  text: string;
}

interface GeminiContent {
  role: "user" | "model";
  parts: GeminiPart[];
}

export async function POST(req: Request) {
  try {
    const { prompt, pageHint }: { prompt?: string; pageHint?: string } = await req.json();

    if (!prompt?.trim()) {
      return NextResponse.json({ error: "Prompt is required." }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Missing GEMINI_API_KEY on the server." },
        { status: 500 },
      );
    }

    const contextualPrompt = [
      "You are Crickonix AI, an expert cricket tactical analyst.",
      `Current dashboard context: ${pageHint ?? "General"}.`,
      "Respond concisely with actionable cricket insight.",
      `User question: ${prompt}`,
    ].join("\n");

    const payload = {
      contents: [
        {
          role: "user",
          parts: [{ text: contextualPrompt }],
        } satisfies GeminiContent,
      ],
      generationConfig: {
        temperature: 0.6,
        topK: 20,
        topP: 0.9,
        maxOutputTokens: 300,
      },
    };

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      },
    );

    if (!response.ok) {
      const detail = await response.text();
      return NextResponse.json(
        { error: `Gemini request failed: ${detail}` },
        { status: 502 },
      );
    }

    const data = await response.json();
    const text =
      data?.candidates?.[0]?.content?.parts?.map((part: GeminiPart) => part.text).join("\n") ??
      "No response from Gemini.";

    return NextResponse.json({ text });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unexpected server error.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
