"use client";

import { Loader2, MessageCircle, Send } from "lucide-react";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type ChatMessage = {
  role: "assistant" | "user";
  text: string;
};

const promptsByPage: Record<string, string[]> = {
  dashboard: ["Who should bowl over 18?", "Expected finish score?", "Field setup for set batter"],
  strategy: ["Best bowling plan on dry pitch", "Batting order tweak", "High-risk matchups now"],
  compare: ["Who suits ODI chases?", "Who is better in death overs?", "Similarity rationale"],
  match: ["Turning point till now", "Win probability shift", "Next over plan"],
  players: ["Weak zone against pace?", "Role next match", "Fitness risk signal"],
  workload: ["Who should be rested?", "Overload risk this week", "Rotation suggestion"],
};

export function AiChatPanel() {
  const pathname = usePathname();
  const routeKey = pathname.split("/")[1] || "dashboard";
  const pageHint = routeKey.charAt(0).toUpperCase() + routeKey.slice(1);

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      text: "Hi! I am match-aware and ready with tactical suggestions based on your current page.",
    },
  ]);

  const quickPrompts = useMemo(() => promptsByPage[routeKey] ?? promptsByPage.dashboard, [routeKey]);

  const sendPrompt = async (promptText: string) => {
    const trimmed = promptText.trim();
    if (!trimmed || loading) return;

    setMessages((prev) => [...prev, { role: "user", text: trimmed }]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: trimmed, pageHint: routeKey }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Unable to get AI response.");
      }

      setMessages((prev) => [...prev, { role: "assistant", text: data.text }]);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Something went wrong.";
      setMessages((prev) => [...prev, { role: "assistant", text: `Error: ${message}` }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-30">
      {open && (
        <Card className="mb-3 w-[22rem] animate-fade-up">
          <CardHeader>
            <CardTitle>AI Analyst</CardTitle>
            <p className="text-xs text-muted-foreground">Live context: {pageHint}</p>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="max-h-64 space-y-2 overflow-auto pr-1">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`rounded-md p-2 text-sm ${
                    message.role === "assistant" ? "bg-secondary" : "bg-primary/15"
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 text-xs text-primary">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => sendPrompt(prompt)}
                  className="rounded-full border px-2 py-1 hover:bg-secondary"
                >
                  {prompt}
                </button>
              ))}
            </div>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                void sendPrompt(input);
              }}
              className="flex gap-2"
            >
              <Input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask Crickonix AI..."
              />
              <button
                type="submit"
                disabled={loading}
                className="rounded-md bg-primary p-2 text-primary-foreground disabled:opacity-60"
              >
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              </button>
            </form>
          </CardContent>
        </Card>
      )}
      <button onClick={() => setOpen((v) => !v)} className="rounded-full bg-primary p-3 text-primary-foreground shadow-lg">
        <MessageCircle className="h-5 w-5" />
      </button>
    </div>
  );
}
