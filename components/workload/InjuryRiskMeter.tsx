import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
export function InjuryRiskMeter(){return <Card><CardHeader><CardTitle>Injury Risk Meter</CardTitle></CardHeader><CardContent className='space-y-2 text-sm'><div>Bumrah <Progress value={82} /></div><div>Hardik <Progress value={61} /></div><div>Kuldeep <Progress value={46} /></div></CardContent></Card>}
