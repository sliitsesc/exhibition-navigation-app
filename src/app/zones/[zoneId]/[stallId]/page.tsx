"use client"

import React, { useEffect, useState } from "react";
import BottomNav from '@/components/BottomNav/BottomNav'
import Header from '@/components/Header/Header'

// Mock data with tags
const mockStalls = [
  {
    id: "77",
    title: "Chess Club Stall",
    subtitle: "University of Sri Jayawardenapura",
    zone: "Zone A",
    stallNumber: "77",
    imageUrl: "/images/75logo.png",
    location: "Main Hall, 2nd Floor",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    tags: ["Technology", "Engineering", "Design", "Art & Crafts", "Maths"],
  },
  {
    id: "08",
    title: "Faculty of Engineering and Sciences",
    subtitle: "University of Sri Jayawardenapura",
    zone: "Zone A",
    stallNumber: "08",
    imageUrl: "/images/75logo.png",
    description: "Explore the intersection of engineering and sciences through our multidisciplinary programs and research initiatives.",
    tags: ["University", "Sciences", "Engineering"],
    location: "Science Block, Ground Floor",
    contact: "sciences@sjp.ac.lk",
    openHours: "9:00 AM - 5:00 PM",
    highlights: [
      "Environmental Science Lab",
      "Biotechnology Demonstrations",
      "Materials Science Research"
    ]
  }
];

export default function StallDetailPage({
  params,
}: {
  params: Promise<{ zoneId: string; stallId: string }>;
}) {
  const { zoneId, stallId } = React.use(params);
  const [navIndex, setNavIndex] = React.useState<number>(1);
  const [loading, setLoading] = useState(true);
  const [stall, setStall] = useState<any>(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const found = mockStalls.find(s => s.id === stallId);
      setStall(found);
      setLoading(false);
    }, 800);
  }, [stallId]);

  return (
    <div className="min-h-screen flex flex-col bg-white pb-24">
      <Header title={loading ? "" : `Stall ${stall?.stallNumber}`} showBack />
      <div className="px-4 pt-6 w-full max-w-md mx-auto">
        {/* Card */}
<div className="bg-gradient-to-r from-[#E0E7FF] to-[#F6F8FF] rounded-3xl shadow-lg p-5">
          {/* Image */}
          <div className="w-full max-w-xs aspect-square rounded-2xl overflow-hidden mb-4 bg-white flex items-center justify-center mx-auto">
            {loading ? (
              <div className="w-full h-full rounded-2xl bg-[#E0E7FF] animate-pulse flex items-center justify-center">
               
              </div>
            ) : (
              <img src={stall.imageUrl} alt={stall.title} className="w-full h-full object-contain" />
            )}
          </div>
          {/* Title */}
          <div className="font-bold text-xl md:text-2xl text-[#000000] mb-1">
            {loading ? (
              <div className="h-7 w-2/3 mx-auto bg-[#E0E7FF] rounded-2xl animate-pulse" />
            ) : (
              stall.title
            )}
          </div>
          {/* Subtitle */}
          <div className="text-gray-600 text-base md:text-lg mb-3">
            {loading ? (
              <div className="h-5 w-1/2 mx-auto bg-[#F6F8FF] rounded-2xl animate-pulse" />
            ) : (
              stall.subtitle
            )}
          </div>
          {/* Zone & Stall Number */}
          <div className="flex gap-2 mb-3 justify-items-start">
            {loading ? (
              <>
                <div className="h-7 w-20 bg-[#E0E7FF] rounded-2xl animate-pulse" />
                <div className="h-7 w-20 bg-[#E0E7FF] rounded-2xl animate-pulse" />
              </>
            ) : (
              <>
                <span className="px-4 py-1 rounded-2xl text-sm font-semibold bg-[#E6F7D9] text-[#000000]">{stall.zone}</span>
                <span className="px-4 py-1 rounded-2xl text-sm font-semibold bg-[#ffffff] text-[#185D88]">Stall {stall.stallNumber}</span>
              </>
            )}
          </div>
          {/* Description */}
          <div className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
            {loading ? (
              <div>
                <div className="h-4 w-full bg-[#E0E7FF] rounded mb-2 animate-pulse" />
                <div className="h-4 w-5/6 bg-[#F6F8FF] rounded mb-2 animate-pulse" />
                <div className="h-4 w-4/6 bg-[#E0E7FF] rounded animate-pulse" />
              </div>
            ) : (
              stall.description
            )}
          </div>
          {/* Location */}
          <div className="flex items-center gap-2 mb-2">
            {loading ? (
              <div className="h-5 w-32 bg-[#E0E7FF] rounded-2xl animate-pulse" />
            ) : stall.location ? (
              <>
                <span className="text-[#185D88]">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                    <path d="M12 21s-6-5.686-6-10a6 6 0 1112 0c0 4.314-6 10-6 10zm0-8a2 2 0 100-4 2 2 0 000 4z" fill="#185D88"/>
                  </svg>
                </span>
                <span className="text-sm text-gray-700 font-medium">{stall.location}</span>
              </>
            ) : null}
          </div>
          {/* Tags */}
          <div>
            <div className="text-gray-600 text-sm font-medium mb-2">
              {loading ? (
                <div className="h-4 w-16 bg-[#F6F8FF] rounded animate-pulse" />
              ) : (
                "Tags:"
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {loading ? (
                <>
                  <div className="h-7 w-20 bg-[#E0E7FF] rounded-2xl animate-pulse" />
                  <div className="h-7 w-20 bg-[#F6F8FF] rounded-2xl animate-pulse" />
                  <div className="h-7 w-20 bg-[#E0E7FF] rounded-2xl animate-pulse" />
                </>
              ) : (
                stall.tags?.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-2xl text-xs font-semibold bg-[#ffffff] text-[#185D88]"
                  >
                    {tag}
                  </span>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      <BottomNav activeIndex={navIndex} onChange={setNavIndex} />
    </div>
  );
}
