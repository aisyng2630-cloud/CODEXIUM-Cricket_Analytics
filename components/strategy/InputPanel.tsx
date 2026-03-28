import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
const fields=["Pitch Type","Weather","Venue","Opposition","Format","Target Phase"];
export function InputPanel(){return <Card><CardHeader><CardTitle>Input Panel</CardTitle></CardHeader><CardContent className='space-y-2'>{fields.map(f=><Select key={f}><SelectTrigger><SelectValue placeholder={f}/></SelectTrigger><SelectContent className='rounded border bg-card'><SelectItem value='1'>Option 1</SelectItem></SelectContent></Select>)}<div className='space-y-1 text-sm'>Availability: <label className='ml-2'><input type='checkbox' defaultChecked/> Bumrah</label> <label className='ml-2'><input type='checkbox'/> Rest Jadeja</label></div><Button className='w-full'>Generate Strategy</Button></CardContent></Card>}
