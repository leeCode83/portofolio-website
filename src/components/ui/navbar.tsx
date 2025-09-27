import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Linkedin } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "projects", "experience", "about", "skills", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="font-mono text-lg font-semibold text-primary hover:text-accent transition-colors"
          >
            // Leandro's Portfolio
          </button>

          {/* Centered Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`font-medium text-sm px-4 py-2 rounded-lg transition-all duration-200 ${
                  activeSection === item.id 
                    ? "text-primary bg-primary/10 shadow-sm" 
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50 active:bg-accent/70 active:scale-95"
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex gap-3">
            <a href="https://github.com/leeCode83">
              <Button variant="outline" size="icon" className="hover:bg-primary/90 transition-all hover:scale-105 hover:text-white">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            
            <a href="https://www.linkedin.com/in/leandro-nardphine/">
              <Button variant="outline" size="icon" className="hover:bg-primary/90 transition-all hover:scale-105 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border">
            <div className="flex flex-col space-y-2 p-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className={`text-left px-4 py-3 rounded-lg font-medium transition-all ${
                    activeSection === item.id 
                      ? "text-primary bg-primary/10 shadow-sm" 
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50 active:bg-accent/70 active:scale-95"
                  }`}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;