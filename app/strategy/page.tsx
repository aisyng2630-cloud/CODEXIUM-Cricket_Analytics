import { AiTacticalSummary } from "@/components/strategy/AiTacticalSummary";
import { BattingOrderCard } from "@/components/strategy/BattingOrderCard";
import { BowlingTimeline } from "@/components/strategy/BowlingTimeline";
import { InputPanel } from "@/components/strategy/InputPanel";
import { MatchupAlerts } from "@/components/strategy/MatchupAlerts";
import { RiskAlerts } from "@/components/strategy/RiskAlerts";
import { StrategyHistory } from "@/components/strategy/StrategyHistory";

export default function StrategyPage(){return <div className='space-y-4'><div className='grid gap-4 lg:grid-cols-2'><InputPanel /><div className='space-y-3'><BattingOrderCard /><BowlingTimeline /><MatchupAlerts /><RiskAlerts /><AiTacticalSummary /></div></div><StrategyHistory /></div>}
