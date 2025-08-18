import { ArrowLeft, Search, Menu } from "lucide-react";
import { Button } from "./ui/button";

interface AppBarProps {
  title: string;
  showBack?: boolean;
  onBack?: () => void;
  showSearch?: boolean;
  showMenu?: boolean;
}

const AppBar = ({ title, showBack = false, onBack, showSearch = false, showMenu = false }: AppBarProps) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-app-header/95 backdrop-blur supports-[backdrop-filter]:bg-app-header/60">
      <div className="flex h-14 items-center justify-between px-4">
        {/* Left side */}
        <div className="flex items-center space-x-3">
          {showBack && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onBack}
              className="h-9 w-9 p-0 hover:bg-secondary"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
          )}
          
          <h1 className="text-lg font-semibold text-app-header-foreground tracking-tight">
            {title}
          </h1>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-2">
          {showSearch && (
            <Button
              variant="ghost"
              size="sm"
              className="h-9 w-9 p-0 hover:bg-secondary"
            >
              <Search className="h-5 w-5" />
            </Button>
          )}
          
          {showMenu && (
            <Button
              variant="ghost"
              size="sm"
              className="h-9 w-9 p-0 hover:bg-secondary"
            >
              <Menu className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default AppBar;