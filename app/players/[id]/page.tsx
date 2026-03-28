"use client";
import { PlayerHeader } from "@/components/player/PlayerHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OverviewTab } from "@/components/player/OverviewTab";
import { MatchupsTab } from "@/components/player/MatchupsTab";
import { ConsistencyTab } from "@/components/player/ConsistencyTab";
import { FitnessTab } from "@/components/player/FitnessTab";
import { AiPlayerInsight } from "@/components/player/AiPlayerInsight";

export default function PlayerPage() {
  return <div className="space-y-4"><PlayerHeader /><Tabs defaultValue="overview"><TabsList><TabsTrigger value="overview">Overview</TabsTrigger><TabsTrigger value="matchups">Matchups</TabsTrigger><TabsTrigger value="consistency">Consistency</TabsTrigger><TabsTrigger value="fitness">Fitness</TabsTrigger></TabsList><TabsContent value="overview"><OverviewTab /></TabsContent><TabsContent value="matchups"><MatchupsTab /></TabsContent><TabsContent value="consistency"><ConsistencyTab /></TabsContent><TabsContent value="fitness"><FitnessTab /></TabsContent></Tabs><AiPlayerInsight /></div>;
}
