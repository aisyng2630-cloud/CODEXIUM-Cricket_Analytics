import { players } from "@/lib/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function PlayerStats() {
  return <Card className="animate-fade-up"><CardHeader><CardTitle>Player Stats</CardTitle></CardHeader><CardContent className="space-y-3">{players.map((p) => <div key={p.name} className="space-y-1"><div className="flex items-center justify-between text-sm"><div className="flex items-center gap-2"><div className="h-7 w-7 rounded-full bg-secondary" />{p.name} <span className="text-xs text-muted-foreground">{p.role}</span></div><span>{p.score}</span></div><Progress value={p.progress} /></div>)}</CardContent></Card>;
}
