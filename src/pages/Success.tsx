import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Success = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      {/* Background pattern */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-lg w-full">
        {/* Success Card */}
        <div className="security-card glow-ring w-full p-8 md:p-10 flex flex-col items-center animate-fade-in-up">
          {/* Success Icon */}
          <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mb-6 animate-pulse-glow">
            <CheckCircle2 className="w-12 h-12 text-primary" />
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-semibold text-center mb-3">
            <span className="text-gradient">Access Granted</span>
          </h1>

          {/* Description */}
          <p className="text-muted-foreground text-center mb-8 max-w-sm">
            Your session has been verified successfully. You now have secure access to the requested resources.
          </p>

          {/* CTA Button */}
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
          >
            Continue
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Success;
