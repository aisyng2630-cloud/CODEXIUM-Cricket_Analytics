import { strategyHistory } from "@/lib/mockData";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
export function StrategyHistory(){return <Card><CardHeader><CardTitle>Last 5 Strategies</CardTitle></CardHeader><CardContent className='space-y-2'>{strategyHistory.map((s)=><Collapsible key={s}><CollapsibleTrigger className='w-full rounded border p-2 text-left text-sm'>{s}</CollapsibleTrigger><CollapsibleContent className='p-2 text-xs text-muted-foreground'>Generated plan archived for review.</CollapsibleContent></Collapsible>)}</CardContent></Card>}
