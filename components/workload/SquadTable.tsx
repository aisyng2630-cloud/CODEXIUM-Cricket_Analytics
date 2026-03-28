import { workloadPlayers } from "@/lib/mockData";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
export function SquadTable(){return <Card><CardHeader><CardTitle>Squad Overview</CardTitle></CardHeader><CardContent><table className='w-full text-sm'><thead><tr><th className='text-left'>Player</th><th>Matches</th><th>Overs</th><th>Balls</th><th>Rest Days</th><th>Risk</th></tr></thead><tbody>{workloadPlayers.map((p,i)=><tr key={p.name}><td>{p.name}</td><td>{8-i}</td><td>{30+i*2}</td><td>{130-i*9}</td><td>{i+1}</td><td><Badge>{p.risk}</Badge></td></tr>)}</tbody></table></CardContent></Card>}
