import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Sparkles, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 mb-8">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">Powered by Advanced AI</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
          Your AI Assistant
          <br />
          Reimagined
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
          Experience next-generation AI conversations and image creation. 
          Credits-based system for flexible usage.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => navigate('/auth')}
            className="text-lg px-8"
          >
            <Zap className="mr-2" />
            Get Started Free
          </Button>
          <Button 
            variant="glass" 
            size="lg"
            onClick={() => navigate('/auth')}
            className="text-lg px-8"
          >
            Sign In
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto">
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10">
            <div className="text-3xl font-bold text-primary mb-2">Fast</div>
            <div className="text-sm text-muted-foreground">Instant Responses</div>
          </div>
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10">
            <div className="text-3xl font-bold text-primary mb-2">Smart</div>
            <div className="text-sm text-muted-foreground">Multi-Model AI</div>
          </div>
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10">
            <div className="text-3xl font-bold text-primary mb-2">Secure</div>
            <div className="text-sm text-muted-foreground">Your Data Protected</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
