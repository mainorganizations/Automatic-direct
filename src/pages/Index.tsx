import { useState, useEffect } from "react";
import { Shield, Lock, CheckCircle2 } from "lucide-react";
import SecuritySpinner from "@/components/SecuritySpinner";
import CountdownTimer from "@/components/CountdownTimer";
import ProgressBar from "@/components/ProgressBar";

const TOTAL_SECONDS = 1 * 60; // 1 minute
const REDIRECT_URL = "/success";

const Index = () => {
  const [timeLeft, setTimeLeft] = useState(TOTAL_SECONDS);
  const [isComplete, setIsComplete] = useState(false);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const progress = ((TOTAL_SECONDS - timeLeft) / TOTAL_SECONDS) * 100;

  useEffect(() => {
    if (timeLeft <= 0) {
      setIsComplete(true);
      // Redirect after a brief delay to show completion state
      const redirectTimeout = setTimeout(() => {
        window.location.href = REDIRECT_URL;
      }, 1500);
      return () => clearTimeout(redirectTimeout);
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      {/* Background pattern */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-lg w-full">
        {/* Logo / Brand */}
        <div className="flex items-center gap-2 mb-12 animate-fade-in-up">
          <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
            <Shield className="w-5 h-5 text-primary" />
          </div>
          <span className="text-lg font-semibold text-foreground tracking-tight">
            Egress Security
          </span>
        </div>

        {/* Main Card */}
        <div className="security-card glow-ring w-full p-8 md:p-10 flex flex-col items-center animate-fade-in-up-delay-1">
          {/* Spinner */}
          <div className="mb-8">
            {isComplete ? (
              <div className="w-32 h-32 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center animate-pulse-glow">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </div>
              </div>
            ) : (
              <SecuritySpinner />
            )}
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-semibold text-foreground text-center mb-3">
            {isComplete ? (
              <span className="text-gradient">Verification Complete</span>
            ) : (
              "Please Wait"
            )}
          </h1>

          {/* Description */}
          <p className="text-muted-foreground text-center mb-8 max-w-sm">
            {isComplete
              ? "Redirecting you to your secure destination..."
              : "We are verifying your session and preparing a secure connection. You will be redirected automatically."}
          </p>

          {/* Progress Bar */}
          <ProgressBar progress={isComplete ? 100 : progress} />
        </div>

        {/* Security badges */}
        <div className="flex items-center gap-6 mt-8 animate-fade-in-up-delay-2">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Lock className="w-4 h-4" />
            <span className="text-xs uppercase tracking-wider">256-bit Encryption</span>
          </div>
          <div className="w-px h-4 bg-border" />
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="w-4 h-4" />
            <span className="text-xs uppercase tracking-wider">Secure Transfer</span>
          </div>
        </div>

        {/* Footer text */}
        <p className="text-xs text-muted-foreground/60 text-center mt-8 max-w-sm animate-fade-in-up-delay-3">
          Do not close this window. Your session is being securely validated to ensure data integrity and prevent unauthorized access.
        </p>
      </div>
    </main>
  );
};

export default Index;
