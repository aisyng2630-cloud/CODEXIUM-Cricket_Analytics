"use client";
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis } from "recharts";
import { scoreDist } from "@/lib/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const variance = scoreDist.map((v,i)=>({i:i+1,v:v*6}));
export function ConsistencyTab(){return <div className="grid gap-3 lg:grid-cols-3"><Card><CardHeader><CardTitle>Score Histogram</CardTitle></CardHeader><CardContent className="h-56"><ResponsiveContainer><BarChart data={scoreDist.map((v,i)=>({i:i+1,v}))}><XAxis dataKey='i'/><Bar dataKey='v' fill='hsl(var(--primary))'/></BarChart></ResponsiveContainer></CardContent></Card><Card><CardHeader><CardTitle>Variance</CardTitle></CardHeader><CardContent className="h-56"><ResponsiveContainer><LineChart data={variance}><XAxis dataKey='i'/><Line dataKey='v' stroke='hsl(var(--accent))'/></LineChart></ResponsiveContainer></CardContent></Card><Card><CardHeader><CardTitle>Streaks</CardTitle></CardHeader><CardContent className="text-sm"><p>30+ Scores: 6 consecutive</p><p>Ducks: 1 in last 30</p><p>50+ conversion: 44%</p></CardContent></Card></div>}
