"use client";
import { Bar, BarChart, ResponsiveContainer, XAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const d=Array.from({length:20},(_,i)=>({o:i+1,v:(i%4)+1}));
export function BowlingTimeline(){return <Card><CardHeader><CardTitle>Bowling Rotation Timeline</CardTitle></CardHeader><CardContent className='h-48'><ResponsiveContainer><BarChart data={d}><XAxis dataKey='o'/><Bar dataKey='v' fill='hsl(var(--primary))'/></BarChart></ResponsiveContainer></CardContent></Card>}
