"use client";
import { Area, AreaChart, ResponsiveContainer, XAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const d=Array.from({length:8},(_,i)=>({m:i+1,f:20+i*9}));
export function WorkloadCard(){return <Card><CardHeader><CardTitle>Individual Workload Card</CardTitle></CardHeader><CardContent className='grid gap-3 lg:grid-cols-3'><div className='h-40'><ResponsiveContainer><AreaChart data={d}><XAxis dataKey='m'/><Area dataKey='f' fill='hsl(var(--primary)/0.3)' stroke='hsl(var(--primary))'/></AreaChart></ResponsiveContainer></div><div className='text-sm'>Fatigue trend: Rising in last 3 matches.</div><div className='text-sm font-medium'>Recommended Action: Monitor</div></CardContent></Card>}
