"use client"

import React from "react";
import BottomNav from '@/components/BottomNav/BottomNav'

export default function ZoneDetailPage({
  params,
}: {
  params: Promise<{ zoneId: string }>;
}) {
  const { zoneId } = React.use(params);
  const [navIndex, setNavIndex] = React.useState<number>(1)
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Zone: {zoneId}</h1>
      <p>Stalls for this zone will be listed here.</p>

      <BottomNav activeIndex={navIndex} onChange={(i) => setNavIndex(i)} />
    </div>
  )
}
