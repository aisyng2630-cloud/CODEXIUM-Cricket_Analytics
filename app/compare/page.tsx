import { AiComparisonSummary } from "@/components/compare/AiComparisonSummary";
import { MatchupHistory } from "@/components/compare/MatchupHistory";
import { PhaseComparison } from "@/components/compare/PhaseComparison";
import { PlayerSelector } from "@/components/compare/PlayerSelector";
import { RadarChart } from "@/components/compare/RadarChart";
import { SimilarityScore } from "@/components/compare/SimilarityScore";
import { StatComparison } from "@/components/compare/StatComparison";

export default function ComparePage(){return <div className='space-y-4'><PlayerSelector /><div className='grid gap-4 lg:grid-cols-2'><StatComparison /><RadarChart /></div><div className='grid gap-4 lg:grid-cols-2'><PhaseComparison /><MatchupHistory /></div><SimilarityScore /><AiComparisonSummary /></div>}
