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
    },
    {
      name: "Twitter",
      url: "https://twitter.com/johndoe",
      icon: <Twitter className="h-5 w-5" />,
      description: "Follow my tech journey"
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

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
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

              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Location</h3>
                      <p className="text-muted-foreground">Remote / San Francisco, CA</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Availability</h3>
                      <p className="text-muted-foreground">Open to new opportunities</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-6">Find Me Online</h3>
              
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm card-hover-effect">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-primary/10 rounded-lg text-primary">
                            {social.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold">{social.name}</h4>
                            <p className="text-muted-foreground text-sm">{social.description}</p>
                          </div>
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
              </div>

              <div className="pt-8">
                <div className="text-center p-6 bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg">
                  <h4 className="font-semibold mb-2 text-primary">Ready to collaborate?</h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    Whether you have a project in mind or just want to chat about tech, I'd love to hear from you.
                  </p>
                  <Button 
                    className="bg-primary hover:bg-primary/90 transition-all hover:scale-105"
                    onClick={() => window.location.href = "mailto:john.doe@example.com"}
                  >
                    Send Message
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;