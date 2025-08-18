import { Card } from "./ui/card";
import { cn } from "@/lib/utils";

interface ZoneCardProps {
  zone: {
    id: string;
    name: string;
    letter: string;
    color: string;
  };
  onClick?: () => void;
}

const ZoneCard = ({ zone, onClick }: ZoneCardProps) => {
  const getZoneStyles = (color: string) => {
    const styles = {
      a: "bg-zone-a text-zone-a-foreground border-zone-a/20",
      b: "bg-zone-b text-zone-b-foreground border-zone-b/20",
      c: "bg-zone-c text-zone-c-foreground border-zone-c/20",
      d: "bg-zone-d text-zone-d-foreground border-zone-d/20",
      e: "bg-zone-e text-zone-e-foreground border-zone-e/20",
      f: "bg-zone-f text-zone-f-foreground border-zone-f/20",
    };
    return styles[color as keyof typeof styles] || styles.a;
  };

  return (
    <Card
      className={cn(
        "relative overflow-hidden border-2 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg group",
        getZoneStyles(zone.color)
      )}
      onClick={onClick}
    >
      <div className="aspect-square flex flex-col items-center justify-center p-6">
        {/* Zone Letter */}
        <div className="text-6xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300">
          {zone.letter}
        </div>
        
        {/* Zone Name */}
        <div className="text-sm font-semibold text-center uppercase tracking-wider">
          {zone.name}
        </div>
      </div>
      
      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Card>
  );
};

export default ZoneCard;