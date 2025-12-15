interface CountdownTimerProps {
  minutes: number;
  seconds: number;
}

const CountdownTimer = ({ minutes, seconds }: CountdownTimerProps) => {
  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="flex items-center gap-3">
      {/* Minutes */}
      <div className="flex flex-col items-center">
        <div className="bg-secondary rounded-lg px-4 py-3 min-w-[72px]">
          <span className="font-mono text-3xl font-semibold text-foreground">
            {formatNumber(minutes)}
          </span>
        </div>
        <span className="text-xs text-muted-foreground mt-1.5 uppercase tracking-wider">
          Minutes
        </span>
      </div>

      {/* Separator */}
      <div className="flex flex-col gap-1.5 pb-6">
        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Seconds */}
      <div className="flex flex-col items-center">
        <div className="bg-secondary rounded-lg px-4 py-3 min-w-[72px]">
          <span className="font-mono text-3xl font-semibold text-foreground">
            {formatNumber(seconds)}
          </span>
        </div>
        <span className="text-xs text-muted-foreground mt-1.5 uppercase tracking-wider">
          Seconds
        </span>
      </div>
    </div>
  );
};

export default CountdownTimer;
