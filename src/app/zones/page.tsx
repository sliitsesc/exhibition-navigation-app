"use client";
import React from "react";
import { useRouter } from "next/navigation";

type Zone = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
};
const zones: Zone[] = [
  {
    id: "A",
    title: "Zone A",
    description:
      "Gaming and Technology showcase area featuring interactive demos and virtual reality experiences.",
    imageUrl:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: "B",
    title: "Zone B",
    description:
      "Science and Innovation hub with cutting-edge research projects and experiments.",
    imageUrl:
      "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: "C",
    title: "Zone C",
    description:
      "Arts and Culture pavilion showcasing creative works and performances.",
    imageUrl:
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: "D",
    title: "Zone D",
    description:
      "Engineering marvels and robotics demonstrations from leading institutions.",
    imageUrl:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: "E",
    title: "Zone E",
    description:
      "Agricultural and food area focusing on sustainable plant growth.",
    imageUrl:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: "F",
    title: "Zone F",
    description:
      "Sustainability and Environment area focusing on eco-friendly innovations.",
    imageUrl:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: "G",
    title: "Zone G",
    description:
      "Health and Wellness zone with the latest in medical technology and fitness.",
    imageUrl:
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=&auto=format&fit=crop",
  },
];

export default function ZonesPage() {
  const router = useRouter();

  return (
    <div
      className="min-h-screen flex flex-col bg-white"
      style={{ fontFamily: "Montserrat, sans-serif" }}>
      {/* Zones Grid */}
      <main className="flex-1 overflow-y-auto px-3 pb-20 mt-4">
        {/* 👆 mt-4 adds the gap between header and grid */}
        <div className="grid grid-cols-2 gap-4">
          {zones.map((zone) => (
            <div
              key={zone.id}
              className="flex flex-col items-center overflow-hidden cursor-pointer rounded-[18px] border border-[#F9F9F9] bg-gradient-to-br from-[#DDE7F7] to-[#F2F3FF] shadow-[0_4px_12.5px_0px_rgba(0,0,0,0.04)] w-auto h-[210px] transition-transform hover:scale-105"
              onClick={() => router.push(`/zones/${zone.id}`)}>
              <div className="p-2 w-full">
                <img
                  src={zone.imageUrl}
                  alt={zone.title}
                  className="w-full h-[134px] object-cover rounded-[10px]"
                />
              </div>
              <div className="px-2 pb-3 w-full">
                <h3 className="text-gray-800 font-bold text-[18px] leading-[100%] tracking-[-0.5px] font-[Montserrat] m-0">
                  {zone.title}
                </h3>
                <p className="text-gray-500 text-[12px] leading-[100%] tracking-[-0.5px] font-[Montserrat] m-0 line-clamp-2">
                  {zone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

type NavItemProps = {
  icon: string;
  label: string;
  selected?: boolean;
};

function ZoneCard({ icon, label, selected }: NavItemProps) {
  return (
    <ZoneCard icon="zone-icon" label="Zone Label" />
  );
}
