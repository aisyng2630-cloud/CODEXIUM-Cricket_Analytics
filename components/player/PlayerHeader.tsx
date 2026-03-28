import { Card, CardContent } from "@/components/ui/card";

export function PlayerHeader() {
  return <Card className="animate-fade-up"><CardContent className="pt-4"><div className="flex items-center justify-between"><div><h1 className="text-2xl font-bold">Virat Kohli</h1><p className="text-sm text-muted-foreground">Top-order Batter · India 🇮🇳</p></div><div className="grid grid-cols-3 gap-3 text-sm"><div><p className="text-muted-foreground">Avg</p><p className="font-semibold">52.8</p></div><div><p className="text-muted-foreground">SR</p><p className="font-semibold">136.5</p></div><div><p className="text-muted-foreground">Wkts</p><p className="font-semibold">4</p></div></div></div></CardContent></Card>;
}
