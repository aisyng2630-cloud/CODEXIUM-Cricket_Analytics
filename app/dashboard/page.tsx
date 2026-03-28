import { AiInsightBanner } from "@/components/dashboard/AiInsightBanner";
import { KpiCards } from "@/components/dashboard/KpiCards";
import { PlayerStats } from "@/components/dashboard/PlayerStats";
import { RunRateChart } from "@/components/dashboard/RunRateChart";
import { StrategyEngine } from "@/components/dashboard/StrategyEngine";
import { WorkloadMonitor } from "@/components/dashboard/WorkloadMonitor";

export default function DashboardPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm"><span className="h-2 w-2 animate-pulseDot rounded-full bg-red-500" /> Live Match Active</div>
      <KpiCards />
      <AiInsightBanner />
      <section className="grid gap-4 xl:grid-cols-2"><RunRateChart /><PlayerStats /></section>
      <section className="grid gap-4 xl:grid-cols-2"><StrategyEngine /><WorkloadMonitor /></section>
    </div>
  );
}
