"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Activity, Brain, Gauge, GitCompare, LayoutDashboard, Settings, Users } from "lucide-react";
import { navItems } from "@/lib/mockData";
import { cn } from "@/lib/utils";

const iconMap = { LayoutDashboard, Users, Gauge, Brain, GitCompare, Activity, Settings } as const;

export function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="group h-screen w-16 overflow-hidden border-r bg-card transition-all hover:w-60">
      <div className="p-3 text-sm font-semibold text-primary">Crickonix</div>
      <nav className="space-y-1 p-2">
        {navItems.map((item) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap];
          const active = pathname.startsWith(item.href.replace("[id]", ""));
          return (
            <Link key={item.href} href={item.href.includes("settings") ? "/dashboard" : item.href} className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground", active && "bg-secondary text-foreground") }>
              <Icon className="h-4 w-4 shrink-0" />
              <span className="opacity-0 transition-opacity group-hover:opacity-100">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
