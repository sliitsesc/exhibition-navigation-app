"use client"

import React from "react";
import BottomNav from '@/components/BottomNav/BottomNav'
import Header from '@/components/Header/Header'

export default function StallDetailPage({
  params,
}: {
  params: Promise<{ zoneId: string; stallId: string }>;
}) {
  const { zoneId, stallId } = React.use(params);
  const [navIndex, setNavIndex] = React.useState<number>(1)
  // derive a human-readable stall name from the route param
  const stallTitle = React.useMemo(() => {
    if (!stallId) return 'Stall'
    // normalize separators
    const clean = String(stallId).replace(/[-_]+/g, ' ').trim()
    // if the id is purely numeric, prefix with 'Stall '
    if (/^\d+$/.test(clean)) return `Stall ${clean}`
    // otherwise title-case words
    return clean
      .split(' ')
      .map((s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s))
      .join(' ')
  }, [stallId])

  return (
      <div className="min-h-screen flex flex-col bg-white">
       <Header title={`STALL ${stallId}`} showBack />
       <div className="px-4 pt-6 w-full max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-2">{stallTitle}</h1>
        <p>Details for stall in zone {zoneId} will be shown here.</p>
       </div>

  <BottomNav activeIndex={navIndex} onChange={(i) => setNavIndex(i)} />
    </div>
  );
}
