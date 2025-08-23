"use client"

import React from "react";
import BottomNav from '@/components/BottomNav/BottomNav'

export default function StallDetailPage({
  params,
}: {
  params: Promise<{ zoneId: string; stallId: string }>;
}) {
  const { zoneId, stallId } = React.use(params);
  const [navIndex, setNavIndex] = React.useState<number>(1)
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Stall: {stallId}</h1>
      <p>Details for stall in zone {zoneId} will be shown here.</p>

      <BottomNav activeIndex={navIndex} onChange={(i) => setNavIndex(i)} />
    </div>
  );
}
