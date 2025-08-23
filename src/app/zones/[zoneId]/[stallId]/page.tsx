"use client"

import React from "react";
// BottomNav now provided by parent layout

export default function StallDetailPage({
  params,
}: {
  params: Promise<{ zoneId: string; stallId: string }>;
}) {
  const { zoneId, stallId } = React.use(params);
  // BottomNav state handled globally in layout
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
  <div className="flex flex-col flex-1">
       <div className="px-4 pt-6 w-full max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-2">{stallTitle}</h1>
        <p>Details for stall in zone {zoneId} will be shown here.</p>
       </div>

  </div>
  );
}
