import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Blocks, 
  Trophy, 
  BookOpen, 
  Zap 
} from "lucide-react";

const AboutSection = () => {
  const aboutCards = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Backend Developer",
      description: "Already learn backend development from 6 month ago. I learn about RESTful API, Cache, Rate Limiter, and many frameworks like Nest.js, Spring Boot, and Laravel",
      highlight: ["RESTful API", "Cache", "Rate Limiter", "Nest.js", "Spring Boot"]
    },
    {
      icon: <Blocks className="h-8 w-8" />,
      title: "Smart Contract Development",
      description: "Learn about blockchain and smart contract from community and internet. Interest working in Web3 space and do web3 hackathons.",
      highlight: ["Web3 Hackathons", "Smart Contracts", "Blockchain"]
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Continuous Learning",
      description: "When I'm not coding, I learning new tools or framework from documentation and explore the latest developments in Web3 and distributed systems.",
      highlight: ["Documentation", "Web3", "Distributed Systems"]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Current Focus",
      description: "Currently focus in how to integrate blockchain network or tools in backend system.",
      highlight: ["Blockchain Integration", "Backend Systems"]
    }
  ];

  return (
    <section id="about" className="section-padding bg-muted/20">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Passionate about building innovative solutions that bridge traditional web development with cutting-edge blockchain technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutCards.map((card, index) => (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm card-hover-effect h-full">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        {card.icon}
                      </div>
                      <h3 className="font-semibold text-lg">{card.title}</h3>
                    </div>
                    
                    <p className="text-foreground leading-relaxed">
                      {card.description}
                    </p>
                    
                    <div className="pt-2 border-t border-border/30">
                      <div className="flex flex-wrap gap-2">
                        {card.highlight.map((item, itemIndex) => (
                          <Badge
                            key={itemIndex}
                            variant="outline"
                            className="text-sm font-medium border-border/50 bg-background/50 hover:bg-primary/90 transition-all hover:scale-105 hover:text-white transition-all cursor-default"
                          >
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;