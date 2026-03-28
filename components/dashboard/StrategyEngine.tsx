import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";

const options = ["Pitch", "Weather", "Opposition", "Phase"];

export function StrategyEngine() {
  return <Card className="animate-fade-up"><CardHeader><CardTitle>Strategy Engine</CardTitle></CardHeader><CardContent className="space-y-2">{options.map((o)=> <Select key={o}><SelectTrigger><SelectValue placeholder={o} /></SelectTrigger><SelectContent position="popper" className="rounded border bg-card"><SelectItem value="a">Balanced</SelectItem></SelectContent></Select>)}<Button className="w-full">Generate Strategy</Button><div className="rounded-md border p-2"><Skeleton className="mb-2 h-4 w-16" /><Skeleton className="h-12 w-full" /></div></CardContent></Card>;
}
