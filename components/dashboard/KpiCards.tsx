import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { kpis } from "@/lib/mockData";

export function KpiCards() {
  return (
    <section className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
      {kpis.map((kpi, i) => (
        <Card key={kpi.label} className="animate-fade-up" style={{ animationDelay: `${i * 70}ms` }}>
          <CardHeader><CardTitle className="text-sm text-muted-foreground">{kpi.label}</CardTitle></CardHeader>
          <CardContent><p className="text-3xl font-bold">{kpi.value}</p><p className="text-xs text-muted-foreground">{kpi.subText}</p><Badge className="mt-2">{kpi.badge}</Badge></CardContent>
        </Card>
      ))}
    </section>
  );
}
