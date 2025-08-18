import { QrCode, Compass, HelpCircle } from "lucide-react";
import { Button } from "./ui/button";

interface BottomNavigationProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

const BottomNavigation = ({ activeTab = "explore", onTabChange }: BottomNavigationProps) => {
  const tabs = [
    {
      id: "scan",
      label: "SCAN QR",
      icon: QrCode,
    },
    {
      id: "explore",
      label: "EXPLORE",
      icon: Compass,
    },
    {
      id: "help",
      label: "HELP",
      icon: HelpCircle,
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t bg-nav-background/95 backdrop-blur supports-[backdrop-filter]:bg-nav-background/60">
      <div className="flex items-center justify-around px-4 py-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <Button
              key={tab.id}
              variant="ghost"
              size="sm"
              onClick={() => onTabChange?.(tab.id)}
              className={`flex flex-col items-center space-y-1 h-auto py-2 px-3 hover:bg-secondary/50 transition-colors ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <Icon className={`h-6 w-6 ${isActive ? "text-primary" : ""}`} />
              <span className="text-xs font-medium">{tab.label}</span>
            </Button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;