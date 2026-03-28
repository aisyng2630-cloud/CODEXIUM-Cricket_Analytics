"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { runRateData } from "@/lib/mockData";

export function RunRateChart() {
  return (
    <Card className="animate-fade-up"><CardHeader><CardTitle>Run Rate Trend</CardTitle><p className="text-xs text-muted-foreground">Powerplay / Middle / Death summary included</p></CardHeader><CardContent className="h-64"><ResponsiveContainer width="100%" height="100%"><LineChart data={runRateData}><XAxis dataKey="over" stroke="hsl(var(--muted-foreground))" /><YAxis stroke="hsl(var(--muted-foreground))" /><Tooltip /><Line dataKey="runRate" stroke="hsl(var(--primary))" strokeWidth={2} dot={false} /><Line dataKey="required" stroke="hsl(var(--accent))" strokeDasharray="4 4" dot={false} /></LineChart></ResponsiveContainer></CardContent></Card>
  );
}
