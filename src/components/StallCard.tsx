import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { MapPin } from "lucide-react";

interface StallCardProps {
  stall: {
    id: string;
    title: string;
    organization: string;
    zone: string;
    stallNumber: string;
    image: string;
    description?: string;
  };
  onClick?: () => void;
}

const StallCard = ({ stall, onClick }: StallCardProps) => {
  const getZoneBadgeColor = (zone: string) => {
    const colors = {
      A: "bg-zone-a text-zone-a-foreground",
      B: "bg-zone-b text-zone-b-foreground",
      C: "bg-zone-c text-zone-c-foreground",
      D: "bg-zone-d text-zone-d-foreground",
      E: "bg-zone-e text-zone-e-foreground",
      F: "bg-zone-f text-zone-f-foreground",
    };
    return colors[zone as keyof typeof colors] || colors.A;
  };

  return (
    <Card 
      className="overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] bg-card border-border/50"
      onClick={onClick}
    >
      <div className="flex p-4 space-x-4">
        {/* Image */}
        <div className="flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden bg-muted">
          <img
            src={stall.image}
            alt={stall.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 space-y-2">
          {/* Title */}
          <h3 className="font-semibold text-card-foreground line-clamp-2 leading-tight">
            {stall.title}
          </h3>

          {/* Organization */}
          <p className="text-sm text-muted-foreground line-clamp-1">
            {stall.organization}
          </p>

          {/* Description if available */}
          {stall.description && (
            <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
              {stall.description}
            </p>
          )}

          {/* Zone and Stall Number */}
          <div className="flex items-center justify-between">
            <Badge 
              variant="secondary" 
              className={getZoneBadgeColor(stall.zone)}
            >
              Zone {stall.zone}
            </Badge>
            
            <div className="flex items-center text-xs text-muted-foreground">
              <MapPin className="w-3 h-3 mr-1" />
              Stall {stall.stallNumber}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default StallCard;