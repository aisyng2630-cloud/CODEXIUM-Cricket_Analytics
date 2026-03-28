import { AiRecommendationStrip } from "@/components/workload/AiRecommendationStrip";
import { InjuryRiskMeter } from "@/components/workload/InjuryRiskMeter";
import { SchedulePanel } from "@/components/workload/SchedulePanel";
import { SquadTable } from "@/components/workload/SquadTable";
import { WorkloadCard } from "@/components/workload/WorkloadCard";

export default function WorkloadPage(){return <div className='space-y-4'><SquadTable /><WorkloadCard /><div className='grid gap-4 lg:grid-cols-2'><InjuryRiskMeter /><SchedulePanel /></div><AiRecommendationStrip /></div>}
