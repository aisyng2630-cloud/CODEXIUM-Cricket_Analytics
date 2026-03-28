import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
export function RiskAlerts(){return <Card><CardHeader><CardTitle>Risk Alerts</CardTitle></CardHeader><CardContent className='space-x-2'><Badge className='bg-red-500/20'>High dew risk</Badge><Badge className='bg-yellow-500/20'>Bumrah fatigue</Badge></CardContent></Card>}
