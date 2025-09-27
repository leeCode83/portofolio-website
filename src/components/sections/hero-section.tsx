import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [displayedName, setDisplayedName] = useState("");
  const fullName = "Leandro Nardphine";
  
  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setDisplayedName(fullName.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center space-y-8">
          {/* Greeting */}
          <div className="space-y-2">
            <p className="text-muted-foreground font-mono text-sm md:text-base">
              Hello, I'm
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-foreground">
                {displayedName.slice(0, 7)}
              </span>
              {displayedName.length > 7 && (
                <span className="text-primary text-glow">
                  {displayedName.slice(7)}
                </span>
              )}
              <span className="animate-pulse">|</span>
            </h1>
          </div>

          {/* Role */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-mono text-muted-foreground">
            Backend & Smart Contract Developer
          </h2>

          {/* Bio */}
          <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto leading-relaxed">
            Building scalable backend systems and innovative blockchain solutions 
            with a focus on performance, security, and clean architecture.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center gap-4 pt-8 flex-wrap">
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="font-semibold px-8 py-3 text-white bg-primary hover:bg-primary/90 transition-all hover:scale-110 hover:text-white"
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              asChild
              className="font-semibold px-8 py-3 text-base hover:scale-110 transition-transform"
            >
              <a href="https://drive.google.com/file/d/1Uz5N1ReqQI5lYzO5K_nf-JjEm7PlVx8J/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                Read My CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;