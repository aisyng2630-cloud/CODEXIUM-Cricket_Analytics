import { phaseData } from "@/lib/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
export function PhaseBreakdown(){return <div className="grid gap-3 lg:grid-cols-3">{phaseData.map(p=><Card key={p.phase}><CardHeader><CardTitle>{p.phase}</CardTitle></CardHeader><CardContent className="text-sm">Runs: {p.runs}<br/>Wickets: {p.wickets}<br/>Economy: {p.economy}</CardContent></Card>)}</div>}
