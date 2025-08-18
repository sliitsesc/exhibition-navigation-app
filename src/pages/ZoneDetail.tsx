import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AppBar from "@/components/AppBar";
import BottomNavigation from "@/components/BottomNavigation";
import StallCard from "@/components/StallCard";
import StallSkeleton from "@/components/StallSkeleton";
import { getStallsByZone } from "@/data/mockData";

const ZoneDetail = () => {
  const { zoneId } = useParams<{ zoneId: string }>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("explore");
  
  const stalls = getStallsByZone(zoneId || "");

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [zoneId]);

  const handleBack = () => {
    navigate("/");
  };

  const handleStallClick = (stallId: string) => {
    // Handle stall detail navigation here
    console.log("Clicked stall:", stallId);
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <AppBar 
        title={`ZONE ${zoneId?.toUpperCase()}`}
        showBack
        onBack={handleBack}
        showSearch
      />
      
      <main className="px-4 py-6">
        <div className="space-y-4 max-w-md mx-auto">
          {isLoading ? (
            // Show skeleton loading state
            Array.from({ length: 5 }).map((_, index) => (
              <StallSkeleton key={index} />
            ))
          ) : (
            // Show actual stalls
            stalls.map((stall) => (
              <StallCard
                key={stall.id}
                stall={stall}
                onClick={() => handleStallClick(stall.id)}
              />
            ))
          )}
          
          {!isLoading && stalls.length === 0 && (
            <div className="text-center py-12">
              <div className="text-muted-foreground mb-2">No stalls found</div>
              <div className="text-sm text-muted-foreground">
                This zone doesn't have any stalls yet.
              </div>
            </div>
          )}
        </div>
      </main>

      <BottomNavigation 
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
    </div>
  );
};

export default ZoneDetail;