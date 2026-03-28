import { quickPrompts } from "@/lib/mockData";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function AiInsightBanner() {
  return <Card className="animate-fade-up"><CardContent className="pt-4"><Badge>AI Insight</Badge><p className="mt-2 text-sm">Iyer accelerates against leg-spin (SR 186), suggest holding left-arm pace for overs 17-19.</p><div className="mt-3 flex flex-wrap gap-2">{quickPrompts.map((q) => <button key={q} className="rounded-full border px-3 py-1 text-xs">{q}</button>)}</div></CardContent></Card>;
}
