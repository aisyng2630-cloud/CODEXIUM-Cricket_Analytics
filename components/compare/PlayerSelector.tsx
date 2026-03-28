import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
export function PlayerSelector(){return <Card><CardHeader><CardTitle>Player Selector</CardTitle></CardHeader><CardContent className='grid gap-2 md:grid-cols-2'><Input placeholder='Player A'/><Input placeholder='Player B'/><Input className='md:col-span-2' placeholder='Optional video upload URL'/></CardContent></Card>}
