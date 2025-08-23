"use client";
import React, { useEffect, useState } from "react";

type Stall = {
  id: string;
  title: string;
  subtitle: string;
  zone: string;
  stallNumber: string;
  imageUrl: string;
};

// Mock data for demonstration
const mockStalls: Stall[] = [
  {
    id: "77",
    title: "Faculty of Engineering",
    subtitle: "University of Sri Jayawardenapura",
    zone: "Zone A",
    stallNumber: "77",
    imageUrl: "/images/75logo.png",
  },
  {
    id: "08",
    title: "Faculty of Engineering and Sciences",
    subtitle: "University of Sri Jayawardenapura",
    zone: "Zone A",
    stallNumber: "08",
    imageUrl: "/images/75logo.png",
  },
  {
    id: "01",
    title: "Lorem ipsum dolor sit amet, consectetur ad...",
    subtitle: "Lorem ipsum dolor sit amet, consectetur...",
    zone: "Zone A",
    stallNumber: "01",
    imageUrl: "/images/75logo.png",
  },
  {
    id: "77b",
    title: "Chess Club Stall",
    subtitle: "Thurstan College",
    zone: "Zone A",
    stallNumber: "77",
    imageUrl: "/images/75logo.png",
  },
  {
    id: "comp",
    title: "Robotics Showcase and Competition",
    subtitle: "University of Sri Jayawardenapura",
    zone: "Zone A",
    stallNumber: "77",
    imageUrl: "/images/75logo.png",
  },
];

export default function ZoneDetailPage({ params }: { params: Promise<{ zoneId: string }> }) {
  const { zoneId } = React.use(params);
  const [loading, setLoading] = useState(true);
  const [stalls, setStalls] = useState<Stall[]>([]);

  useEffect(() => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setStalls(mockStalls);
      setLoading(false);
    }, 1500);
  }, [zoneId]);

  return (
    <div className="min-h-screen bg-white flex flex-col pb-24">
     

      {/* Stall Cards */}
      <div className="flex flex-col gap-4 px-4">
        {(loading ? mockStalls : stalls).map((stall, idx) => (
          <div
            key={stall.id + idx}
            className="flex bg-gradient-to-r from-[#E0E7FF] via-[#E0E7FF] to-[#F6F8FF] rounded-2xl p-3 shadow-sm gap-4 items-center"
          >
            {/* Image */}
            <div className="w-20 h-20 rounded-xl overflow-hidden bg-white flex-shrink-0">
              {loading ? (
                <div className="animate-pulse w-full h-full bg-[#ffffff]" />
              ) : (
                <img src={stall.imageUrl} alt={stall.title} className="w-full h-full object-cover" />
              )}
            </div>
            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-base truncate">
                {loading ? (
                  <div className="animate-pulse h-5 bg-white rounded-2xl w-full mb-1 z-0" />
                ) : (
                  stall.title
                )}
              </div>
              <div className="text-xs text-gray-500 truncate">
                {loading ? (
                  <div className="animate-pulse h-2 bg-white rounded w-1/2" />
                ) : (
                  stall.subtitle
                )}
              </div>
              <div className="flex gap-2 mt-2">
                {loading ? (
                  <>
                  <div className="animate-pulse h-5 w-16 bg-[#ffffff] rounded-lg" />
                  <div className="animate-pulse h-5 w-16 bg-[#ffffff] rounded-lg" />
                  </>
                ) : (
                  <>
                    <span className="px-2 py-0.5 rounded-2xl text-md font-bold bg-[#E6F7D9] text-[#000000]">{stall.zone}</span>
                    <span className="px-2 py-0.5 rounded-2xl text-md font-bold bg-[#ffffff] text-[#185D88]">Stall {stall.stallNumber}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
