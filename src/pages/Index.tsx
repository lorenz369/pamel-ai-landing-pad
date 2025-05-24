
import WaitlistForm from "@/components/WaitlistForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header with Logo */}
      <header className="pt-12 pb-8 text-center">
        <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
          <img 
            src="/lovable-uploads/3b624b76-dec4-4cce-8476-2d1819f80ed3.png" 
            alt="pamel.ai logo" 
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="text-4xl font-light text-gray-800 tracking-wide">
          pamel.ai
        </h1>
        <p className="text-lg text-gray-600 mt-2 font-light">
          AI-Powered Yoga & Mindfulness
        </p>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center space-y-8 max-w-lg">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 leading-tight">
              Transform Your Practice
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Personalized yoga sessions powered by artificial intelligence. 
              Coming soon to guide your journey to inner peace.
            </p>
          </div>
          
          <WaitlistForm />
        </div>
      </main>

      {/* Footer */}
      <footer className="pb-8 text-center">
        <p className="text-sm text-gray-400">
          © 2024 pamel.ai - Mindful technology for mindful living
        </p>
      </footer>
    </div>
  );
};

export default Index;
