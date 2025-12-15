import { Shield } from "lucide-react";

const SecuritySpinner = () => {
  return (
    <div className="relative w-32 h-32">
      {/* Outer spinning ring */}
      <div className="absolute inset-0 rounded-full border-2 border-muted animate-spin-slow" />
      
      {/* Inner spinning ring (opposite direction) */}
      <div 
        className="absolute inset-3 rounded-full border-2 border-primary/30 animate-spin-slow"
        style={{ animationDirection: 'reverse', animationDuration: '4s' }}
      />
      
      {/* Glowing accent ring */}
      <div className="absolute inset-6 rounded-full border border-primary/50 animate-pulse-glow" />
      
      {/* Center icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center">
          <Shield className="w-7 h-7 text-primary" />
        </div>
      </div>
      
      {/* Rotating dots */}
      <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: '6s' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary" />
      </div>
      <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: '6s', animationDelay: '2s' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary/60" />
      </div>
    </div>
  );
};

export default SecuritySpinner;
