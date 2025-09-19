import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import heroDeveloper from "@/assets/hero-developer.jpg";

const HeroSection = () => {
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Greeting */}
            <div className="space-y-2">
              <p className="text-muted-foreground font-mono text-sm md:text-base">
                Hello, I'm
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="text-foreground">John</span>{" "}
                <span className="text-primary text-glow">Doe</span>
              </h1>
            </div>

            {/* Role */}
            <h2 className="text-xl md:text-2xl lg:text-3xl font-mono text-muted-foreground">
              Backend & Smart Contract Developer
            </h2>

            {/* Bio */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl lg:max-w-none leading-relaxed">
              Building scalable backend systems and innovative blockchain solutions 
              with a focus on performance, security, and clean architecture.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-8">
              <Button 
                size="lg" 
                onClick={scrollToProjects}
                className="font-semibold px-8 py-3 text-base bg-primary hover:bg-primary/90 transition-all hover:scale-105"
              >
                View My Work
              </Button>
              
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right side - Hero image */}
          <div className="relative order-first lg:order-last">
            <div className="relative">
              <img 
                src={heroDeveloper} 
                alt="Professional developer at work" 
                className="rounded-2xl shadow-2xl w-full h-auto max-w-md mx-auto lg:max-w-full"
              />
              {/* Subtle overlay effect */}
              <div className="absolute inset-0 rounded-2xl bg-primary/10 mix-blend-multiply"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;