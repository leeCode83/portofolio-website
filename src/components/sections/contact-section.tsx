import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  MapPin, 
  Calendar,
  Copy,
  Check
} from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("john.doe@example.com");
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/johndoe",
      icon: <Github className="h-5 w-5" />,
      description: "Check out my repositories"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/johndoe",
      icon: <Linkedin className="h-5 w-5" />,
      description: "Let's connect professionally"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-muted/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just chatting about technology
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Email Section */}
          <div className="mb-12">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm max-w-2xl mx-auto">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-muted-foreground">Drop me a line anytime</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm bg-muted/50 px-3 py-2 rounded border">
                    john.doe@example.com
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={copyEmail}
                  >
                    {emailCopied ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Social Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {socialLinks.map((social, index) => (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm card-hover-effect">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      {social.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold">{social.name}</h4>
                      <p className="text-muted-foreground text-sm">{social.description}</p>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="hover:bg-primary/10 hover:text-primary hover:border-primary transition-all"
                      onClick={() => window.open(social.url, "_blank")}
                    >
                      Visit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {/* Collaboration CTA Card */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Ready to collaborate?</h4>
                    <p className="text-muted-foreground text-sm">
                      Let's discuss your project ideas
                    </p>
                  </div>
                  <Button 
                    className="bg-primary hover:bg-primary/90 transition-all hover:scale-105"
                    onClick={() => window.location.href = "mailto:john.doe@example.com"}
                  >
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;