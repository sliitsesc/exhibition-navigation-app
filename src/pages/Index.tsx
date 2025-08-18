import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "@/components/LoadingScreen";
import AppBar from "@/components/AppBar";
import BottomNavigation from "@/components/BottomNavigation";
import ZoneCard from "@/components/ZoneCard";
import { zones } from "@/data/mockData";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("explore");
  const navigate = useNavigate();

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleZoneClick = (zoneId: string) => {
    navigate(`/zone/${zoneId}`);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      <AppBar 
        title="ALL ZONES" 
        showSearch 
        showMenu 
      />
      
      <main className="px-4 py-6">
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          {zones.map((zone) => (
            <ZoneCard
              key={zone.id}
              zone={zone}
              onClick={() => handleZoneClick(zone.id)}
            />
          ))}
        </div>
      </main>

      <BottomNavigation 
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
    </div>
  );
};

export default Index;
