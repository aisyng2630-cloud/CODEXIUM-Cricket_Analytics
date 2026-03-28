import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const e=["4.2: Rohit c long-off 24","7.6: 50 partnership","11.4: Review overturned","16.1: Hardik 4,6,4 burst"];
export function EventTimeline(){return <Card><CardHeader><CardTitle>Key Match Events</CardTitle></CardHeader><CardContent className="space-y-2 text-sm">{e.map((x)=><div key={x} className="border-l pl-3">{x}</div>)}</CardContent></Card>}
