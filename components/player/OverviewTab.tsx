"use client";
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const phase = [{p:'PP',r:132},{p:'Mid',r:241},{p:'Death',r:118}];
const trend = Array.from({length:10},(_,i)=>({i:i+1,sr:118+i*3+((i%2)*8)}));
export function OverviewTab(){return <div className="grid gap-3 lg:grid-cols-3"><Card><CardHeader><CardTitle>Wagon Wheel</CardTitle></CardHeader><CardContent><div className="h-56 rounded-full border border-dashed" /></CardContent></Card><Card><CardHeader><CardTitle>Runs by Phase</CardTitle></CardHeader><CardContent className="h-56"><ResponsiveContainer><BarChart data={phase}><XAxis dataKey='p'/><YAxis/><Bar dataKey='r' fill='hsl(var(--primary))'/></BarChart></ResponsiveContainer></CardContent></Card><Card><CardHeader><CardTitle>Last 10 Inns SR</CardTitle></CardHeader><CardContent className="h-56"><ResponsiveContainer><LineChart data={trend}><XAxis dataKey='i'/><YAxis/><Line dataKey='sr' stroke='hsl(var(--accent))'/></LineChart></ResponsiveContainer></CardContent></Card></div>}
