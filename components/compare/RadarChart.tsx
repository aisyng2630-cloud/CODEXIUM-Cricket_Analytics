"use client";
import { PolarAngleAxis, Radar, RadarChart as RChart, ResponsiveContainer } from "recharts";
import { comparisonRadar } from "@/lib/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
export function RadarChart(){return <Card><CardHeader><CardTitle>Radar Chart</CardTitle></CardHeader><CardContent className='h-72'><ResponsiveContainer><RChart data={comparisonRadar}><PolarAngleAxis dataKey='metric'/><Radar dataKey='a' stroke='hsl(var(--primary))' fill='hsl(var(--primary)/0.3)'/><Radar dataKey='b' stroke='hsl(var(--accent))' fill='hsl(var(--accent)/0.3)'/></RChart></ResponsiveContainer></CardContent></Card>}
