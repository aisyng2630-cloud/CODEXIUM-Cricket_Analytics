import { RiskLevel } from "./types";

export const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: "LayoutDashboard" },
  { href: "/players/virat-kohli", label: "Players", icon: "Users" },
  { href: "/match/ind-v-aus-2026", label: "Match Analysis", icon: "Gauge" },
  { href: "/strategy", label: "Strategy Engine", icon: "Brain" },
  { href: "/compare", label: "Compare Players", icon: "GitCompare" },
  { href: "/workload", label: "Workload Monitor", icon: "Activity" },
  { href: "/settings", label: "Settings", icon: "Settings" },
];

export const kpis = [
  { label: "Current Run Rate", value: "9.42", subText: "+1.1 vs required", badge: "Hot" },
  { label: "Win Probability", value: "68%", subText: "Up 7% in last 5 overs", badge: "Favorable" },
  { label: "Top Performer", value: "S. Iyer", subText: "76* (42)", badge: "Impact" },
  { label: "Wickets Fallen", value: "4", subText: "16 overs completed", badge: "Stable" },
];

export const runRateData = Array.from({ length: 20 }, (_, i) => ({ over: i + 1, runRate: 7 + Math.sin(i / 2) * 2 + (i > 12 ? 1.2 : 0), required: 8.1 }));

export const players = [
  { name: "Shreyas Iyer", role: "Bat", score: "76* (42)", progress: 88 },
  { name: "Hardik Pandya", role: "AR", score: "31 (18)", progress: 56 },
  { name: "Jasprit Bumrah", role: "Bowl", score: "2/19", progress: 73 },
  { name: "Rishabh Pant", role: "WK", score: "28 (14)", progress: 44 },
];

export const workloadPlayers: { name: string; fatigue: number; risk: RiskLevel }[] = [
  { name: "Bumrah", fatigue: 82, risk: "High" },
  { name: "Hardik", fatigue: 61, risk: "Medium" },
  { name: "Kuldeep", fatigue: 46, risk: "Low" },
  { name: "Jaiswal", fatigue: 33, risk: "Low" },
];

export const quickPrompts = ["Who should bowl 17th over?", "Best finisher vs spin?", "Defensive field setup", "Rest risk this week"];

export const phaseData = [
  { phase: "Powerplay", runs: 59, wickets: 1, economy: 9.8 },
  { phase: "Middle", runs: 74, wickets: 2, economy: 7.4 },
  { phase: "Death", runs: 43, wickets: 1, economy: 10.8 },
];

export const momentum = Array.from({ length: 20 }, (_, i) => ({ over: i + 1, swing: Math.round(Math.sin(i / 2.3) * 14) }));
export const comparisonRadar = [
  { metric: "Batting", a: 89, b: 82 },
  { metric: "Bowling", a: 58, b: 76 },
  { metric: "Fielding", a: 81, b: 78 },
  { metric: "Consistency", a: 86, b: 79 },
  { metric: "Pressure", a: 90, b: 72 },
  { metric: "Form", a: 84, b: 75 },
];

export const strategyHistory = ["Eden Gardens T20 vs AUS", "Wankhede ODI vs ENG", "Chepauk Test vs NZ", "M Chinnaswamy T20 vs SA", "Kotla ODI vs SL"];

export const scoreDist = [12, 4, 7, 2, 5, 8, 6, 3, 1, 4];
