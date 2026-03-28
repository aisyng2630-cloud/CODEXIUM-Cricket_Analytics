import { workloadPlayers } from "@/lib/mockData";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function WorkloadMonitor() {
  return <Card className="animate-fade-up"><CardHeader><CardTitle>Workload Monitor</CardTitle></CardHeader><CardContent className="space-y-3">{workloadPlayers.map((p) => <div key={p.name}><div className="mb-1 flex items-center justify-between text-sm"><span>{p.name}</span><Badge className={p.risk === "High" ? "bg-red-500/20" : p.risk === "Medium" ? "bg-yellow-400/20" : "bg-green-500/20"}>{p.risk}</Badge></div><Progress value={p.fatigue} /></div>)}</CardContent></Card>;
}
