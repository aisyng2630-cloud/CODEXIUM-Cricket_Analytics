"use client";
import { Line, LineChart, ReferenceDot, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { runRateData } from "@/lib/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
export function TimelineChart(){const d=runRateData.map(x=>({...x,t2:x.runRate-0.7}));return <Card><CardHeader><CardTitle>Over-by-Over Timeline</CardTitle></CardHeader><CardContent className="h-72"><ResponsiveContainer><LineChart data={d}><XAxis dataKey='over'/><YAxis/><Tooltip/><Line dataKey='runRate' stroke='hsl(var(--primary))'/><Line dataKey='t2' stroke='hsl(var(--accent))'/><ReferenceDot x={9} y={4} r={4} fill='red' /></LineChart></ResponsiveContainer></CardContent></Card>}
