"use client";
import { Bar, BarChart, ReferenceLine, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { momentum } from "@/lib/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
export function MomentumGraph(){return <Card><CardHeader><CardTitle>Momentum Swing</CardTitle></CardHeader><CardContent className="h-64"><ResponsiveContainer><BarChart data={momentum}><XAxis dataKey='over'/><YAxis/><ReferenceLine y={0} stroke='white'/><Bar dataKey='swing' fill='hsl(var(--primary))'/></BarChart></ResponsiveContainer></CardContent></Card>}
