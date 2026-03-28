"use client";
import { Bar, BarChart, ResponsiveContainer, XAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const d=[{p:'PP',a:148,b:126},{p:'Mid',a:132,b:141},{p:'Death',a:189,b:167}];
export function PhaseComparison(){return <Card><CardHeader><CardTitle>Phase Performance</CardTitle></CardHeader><CardContent className='h-56'><ResponsiveContainer><BarChart data={d}><XAxis dataKey='p'/><Bar dataKey='a' fill='hsl(var(--primary))'/><Bar dataKey='b' fill='hsl(var(--accent))'/></BarChart></ResponsiveContainer></CardContent></Card>}
