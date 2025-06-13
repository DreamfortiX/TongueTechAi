import { Activity } from 'lucide-react';

export function LoadingAnimation() {
  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-6">
      {/* Pulsing Logo */}
      <div className="relative">
        <div className="absolute inset-0 animate-ping bg-teal-200 rounded-full opacity-75"></div>
        <div className="relative">
          <Activity className="w-12 h-12 text-teal-600" />
        </div>
      </div>

      {/* Loading Text */}
      <div className="text-center space-y-2">
        <div className="text-lg font-medium text-teal-600">
          Analyzing your image
        </div>
        <div className="text-sm text-gray-500">
          Using advanced AI to detect patterns
        </div>
      </div>

      {/* Progress Dots */}
      <div className="flex space-x-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2 h-2 bg-teal-600 rounded-full animate-bounce"
            style={{
              animationDelay: `${i * 0.2}s`,
              animationDuration: '1s'
            }}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-teal-500 animate-progress"></div>
      </div>
    </div>
  );
}