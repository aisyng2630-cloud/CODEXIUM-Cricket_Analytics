"use client";

import { Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function Topbar() {
  return (
    <header className="sticky top-0 z-20 border-b bg-background/95 backdrop-blur">
      <div className="flex items-center gap-3 p-3">
        <div className="relative max-w-sm flex-1">
          <Search className="absolute left-2 top-2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search players, matches, insights" className="pl-8" />
        </div>
        <div className="rounded-md border bg-card px-2 py-1 text-xs">T20 | ODI | Test</div>
        <button className="rounded-md border p-2"><Bell className="h-4 w-4" /></button>
        <div className="h-8 w-8 rounded-full bg-primary" />
      </div>
    </header>
  );
}
