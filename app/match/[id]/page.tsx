import { AiMatchSummary } from "@/components/match/AiMatchSummary";
import { EventTimeline } from "@/components/match/EventTimeline";
import { MatchHeader } from "@/components/match/MatchHeader";
import { MatchSelector } from "@/components/match/MatchSelector";
import { MomentumGraph } from "@/components/match/MomentumGraph";
import { PhaseBreakdown } from "@/components/match/PhaseBreakdown";
import { Scorecard } from "@/components/match/Scorecard";
import { TimelineChart } from "@/components/match/TimelineChart";

export default function MatchPage(){return <div className="space-y-4"><MatchSelector /><MatchHeader /><TimelineChart /><PhaseBreakdown /><MomentumGraph /><EventTimeline /><Scorecard /><AiMatchSummary /></div>}
