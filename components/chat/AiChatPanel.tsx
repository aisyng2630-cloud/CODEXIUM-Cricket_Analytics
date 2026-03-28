"use client";

import { MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function AiChatPanel({ pageHint }: { pageHint: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-4 right-4 z-30">
      {open && (
        <Card className="mb-3 w-80 animate-fade-up">
          <CardHeader>
            <CardTitle>AI Analyst</CardTitle>
            <p className="text-xs text-muted-foreground">Live context: {pageHint}</p>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="rounded-md bg-secondary p-2 text-sm">Hey! Ready with match-aware insights.</div>
            <div className="flex gap-2 text-xs text-primary"><button>Key threat?</button><button>Best bowling plan?</button></div>
            <div className="flex gap-2"><Input placeholder="Ask Crickonix AI..." /><button className="rounded-md bg-primary p-2"><Send className="h-4 w-4" /></button></div>
          </CardContent>
        </Card>
      )}
      <button onClick={() => setOpen((v) => !v)} className="rounded-full bg-primary p-3 text-primary-foreground shadow-lg">
        <MessageCircle className="h-5 w-5" />
      </button>
    </div>
  );
}
