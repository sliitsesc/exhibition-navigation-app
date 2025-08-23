import React from "react";

export default function StallDetailPage({
  params,
}: {
  params: Promise<{ zoneId: string; stallId: string }>;
}) {
  const { zoneId, stallId } = React.use(params);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Stall: {stallId}</h1>
      <p>Details for stall in zone {zoneId} will be shown here.</p>
    </div>
  );
}
