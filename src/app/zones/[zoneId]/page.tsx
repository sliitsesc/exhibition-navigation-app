import React from "react";

export default function ZoneDetailPage({
  params,
}: {
  params: Promise<{ zoneId: string }>;
}) {
  const { zoneId } = React.use(params);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Zone: {zoneId}</h1>
      <p>Stalls for this zone will be listed here.</p>
    </div>
  );
}
