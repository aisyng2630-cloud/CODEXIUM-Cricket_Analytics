"use client";
import { Area, AreaChart, ResponsiveContainer, XAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
const d = Array.from({length:8},(_,i)=>({m:i+1,w:40+i*5}));
export function FitnessTab(){return <div className="grid gap-3 lg:grid-cols-3"><Card><CardHeader><CardTitle>Workload (8 Matches)</CardTitle></CardHeader><CardContent className="h-56"><ResponsiveContainer><AreaChart data={d}><XAxis dataKey='m'/><Area dataKey='w' stroke='hsl(var(--primary))' fill='hsl(var(--primary)/0.2)'/></AreaChart></ResponsiveContainer></CardContent></Card><Card><CardHeader><CardTitle>Injury Risk</CardTitle></CardHeader><CardContent><Progress value={37} /><p className="mt-2 text-sm">Low-Medium Risk</p></CardContent></Card><Card><CardHeader><CardTitle>Rest Recommendation</CardTitle></CardHeader><CardContent className="text-sm">Play next 2, monitor workload before back-to-back fixture.</CardContent></Card></div>}
