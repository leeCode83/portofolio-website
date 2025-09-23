import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/leeCode83",
      icon: <Github className="h-4 w-4" />
    },
    {
      name: "LinkedIn", 
      url: "https://linkedin.com/in/leandro-nardphine",
      icon: <Linkedin className="h-4 w-4" />
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border/50 bg-background/80 backdrop-blur-sm">
      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo/Brand */}
          <button 
            onClick={scrollToTop}
            className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            // Back to top
          </button>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Leandro Nardphine. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <Button
                key={social.name}
                variant="ghost"
                size="icon"
                className="h-8 w-8 hover:text-primary transition-colors"
                onClick={() => window.open(social.url, "_blank")}
              >
                {social.icon}
              </Button>
            ))}
          </div>
        </div>

        {/* Additional Footer Content */}
        <div className="mt-6 pt-6 border-t border-border/30 text-center">
          <p className="text-xs text-muted-foreground">
            Built with React, TypeScript, and Shadcn UI • Hosted on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;