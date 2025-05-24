
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    if (!email.includes("@")) {
      toast({
        title: "Error", 
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    console.log("Email submitted:", email);

    // Simulate API call - you'll need to connect this to a backend
    try {
      // For now, we'll just show a success message
      // Later, you can connect this to Supabase or another backend service
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Success!",
        description: "You've been added to our waitlist. We'll be in touch soon!",
      });
      
      setEmail("");
    } catch (error) {
      console.error("Error submitting email:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-center text-lg py-6 rounded-full border-2 border-gray-200 focus:border-purple-400 transition-colors"
            disabled={isLoading}
          />
        </div>
        <Button 
          type="submit" 
          className="w-full py-6 text-lg bg-purple-600 hover:bg-purple-700 rounded-full transition-all duration-200 transform hover:scale-105"
          disabled={isLoading}
        >
          {isLoading ? "Joining..." : "Join the Waitlist"}
        </Button>
      </form>
      <p className="text-sm text-gray-500 text-center mt-4">
        Be the first to experience mindful yoga with AI guidance
      </p>
    </div>
  );
};

export default WaitlistForm;
