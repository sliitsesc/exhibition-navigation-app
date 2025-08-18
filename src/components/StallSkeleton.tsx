import { Card } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

const StallSkeleton = () => {
  return (
    <Card className="overflow-hidden bg-card border-border/50">
      <div className="flex p-4 space-x-4">
        {/* Image skeleton */}
        <div className="flex-shrink-0">
          <Skeleton className="w-20 h-20 rounded-xl" />
        </div>

        {/* Content skeleton */}
        <div className="flex-1 space-y-2">
          {/* Title skeleton */}
          <Skeleton className="h-5 w-3/4" />
          
          {/* Organization skeleton */}
          <Skeleton className="h-4 w-1/2" />
          
          {/* Description skeleton */}
          <div className="space-y-1">
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-2/3" />
          </div>
          
          {/* Zone and stall number skeleton */}
          <div className="flex items-center justify-between pt-1">
            <Skeleton className="h-6 w-16 rounded-full" />
            <Skeleton className="h-4 w-12" />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default StallSkeleton;