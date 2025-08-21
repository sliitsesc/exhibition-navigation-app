import React from "react";

function Page() {
  // Define a type for the zone keys
  type ZoneKey = "A" | "B" | "C" | "D" | "E" | "F";

  // Array of zone descriptions (A-F)
  const zoneDescriptions: Record<ZoneKey, string> = {
    A: "Zone A: GAme and development.",
    B: "Zone B: Operational areas with controlled access for authorized personnel.",
    C: "Zone C: General work areas with standard security protocols.",
    D: "Zone D: Public access areas with basic security monitoring.",
    E: "Zone E: Support and utility areas with limited access requirements.",
    F: "Zone F: Storage and archive zones with specific access conditions.",
  };

  const zones: ZoneKey[] = ["A", "B", "C", "D", "E", "F"];

  const getZoneColor = (zone: ZoneKey) => {
    const colors = {
      A: "from-red-500 to-red-600",
      B: "from-orange-500 to-orange-600",
      C: "from-yellow-500 to-yellow-600",
      D: "from-green-500 to-green-600",
      E: "from-blue-500 to-blue-600",
      F: "from-purple-500 to-purple-600",
    };
    return colors[zone];
  };

  return (
    <div className="p-4 sm:p-6 max-w-6xl mx-auto bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">
          Exhibition Zones
        </h1>
        <p className="text-gray-600 text-center">
          Navigate through different zones A-F
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {zones.map((zone) => (
          <div
            key={zone}
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            <div
              className={`bg-gradient-to-r ${getZoneColor(
                zone
              )} p-6 text-white`}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Zone {zone}</h2>
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold">{zone}</span>
                </div>
              </div>
            </div>

            <div className="p-6">
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {zoneDescriptions[zone]}
              </p>

              <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                Explore Zone
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center text-gray-500">
        <p className="text-sm">
          © 2025 SESC SLIIT - Exhibition Navigation System
        </p>
      </div>
    </div>
  );
}

export default Page;
