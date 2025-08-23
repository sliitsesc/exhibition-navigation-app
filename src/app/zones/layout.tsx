"use client";

import React from "react";
import Header from "@/components/Header/Header";
import BottomNav from "@/components/BottomNav/BottomNav";
import { usePathname, useParams } from "next/navigation";

// Central layout for all /zones routes. Injects Header + BottomNav so pages stay lean.
export default function ZonesLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const params = useParams() as { zoneId?: string; stallId?: string };

  // Derive header title
  let title = "ALL ZONES";
  if (params?.zoneId && !params?.stallId) title = `ZONE ${String(params.zoneId).toUpperCase()}`;
  else if (params?.zoneId && params?.stallId) title = `STALL ${String(params.stallId).toUpperCase()}`;

  const showBack = pathname !== "/zones";

  // Active tab: highlight Explore on all /zones routes; fallback to Scan elsewhere
  const activeIndex = pathname?.startsWith("/zones") ? 1 : 0;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header title={title} showBack={showBack} />
      <div className="flex-1 flex flex-col pb-24">{children}</div>
      <BottomNav activeIndex={activeIndex} />
    </div>
  );
}
