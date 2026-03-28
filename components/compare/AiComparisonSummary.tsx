import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
export function AiComparisonSummary(){return <Card><CardHeader><CardTitle>AI Comparison Summary</CardTitle></CardHeader><CardContent><Skeleton className='mb-2 h-4 w-20'/><p className='text-sm'>Player A is stronger for chase stabilization and pressure overs, while Player B offers better dual-skill flexibility on slow surfaces and longer formats.</p></CardContent></Card>}
