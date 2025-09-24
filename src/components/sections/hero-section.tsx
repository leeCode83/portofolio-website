import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
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
              <span className="text-primary">
                {displayedName.slice(0, 7)}
              </span>
              {displayedName.length > 7 && (
                <span className="text-foreground text-glow">
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
          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto leading-relaxed">
            Building scalable backend systems and innovative blockchain solutions 
            with a focus on performance, security, and clean architecture.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="font-semibold px-8 py-3 text-base bg-primary hover:bg-primary/90 transition-all hover:scale-105 hover:text-white"
            >
              View My Work
            </Button>
            
            <div className="flex gap-4">
              <a href="https://github.com/leeCode83">
                <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              
              <a href="https://www.linkedin.com/in/leandro-nardphine/">
                <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;