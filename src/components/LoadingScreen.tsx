import { useState, useEffect } from "react";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Loading Exhibition...");

  useEffect(() => {
    const texts = [
      "Loading Exhibition...",
      "Preparing Zones...",
      "Setting up Experience...",
      "Almost Ready...",
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 15 + 5;

        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }

        // Update text based on progress
        const textIndex = Math.floor((newProgress / 100) * texts.length);
        setLoadingText(texts[Math.min(textIndex, texts.length - 1)]);

        return newProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-background flex flex-col items-center justify-center z-50">
      <div className="flex flex-col items-center space-y-8">
        {/* Logo/Icon */}
        <div className="relative">
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-zone-a via-zone-b to-zone-c flex items-center justify-center">
            <div className="w-16 h-16 rounded-2xl bg-background flex items-center justify-center">
              <div className="text-2xl font-bold text-primary">EX</div>
            </div>
          </div>
          <div className="absolute -inset-1 bg-gradient-to-br from-zone-a via-zone-b to-zone-c rounded-3xl opacity-30 animate-pulse"></div>
        </div>

        {/* App Title */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold text-foreground">Exhibition</h1>
          <p className="text-muted-foreground">Explore Interactive Zones</p>
        </div>

        {/* Loading Progress */}
        <div className="w-64 space-y-3">
          <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-zone-a via-zone-b to-zone-c transition-all duration-300 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-muted-foreground text-center animate-pulse">
            {loadingText}
          </p>
        </div>

        {/* Animated dots */}
        <div className="flex space-x-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-primary/30 animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
