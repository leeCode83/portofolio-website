import { Card, CardContent } from "@/components/ui/card";
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
      title: "Backend & Smart Contract Developer",
      description: "Over 5 years of experience building scalable web applications and innovative blockchain solutions with expertise across multiple programming languages and frameworks.",
      highlight: "5+ Years Experience"
    },
    {
      icon: <Blocks className="h-8 w-8" />,
      title: "Blockchain Specialist",
      description: "My journey started with traditional web development, but I quickly became fascinated by blockchain technology. I now specialize in smart contracts and DeFi protocols.",
      highlight: "25+ Smart Contracts Deployed"
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Project Success",
      description: "Focused on creating secure, efficient, and maintainable code that powers modern decentralized applications and backend infrastructure.",
      highlight: "50+ Projects Completed"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Continuous Learning",
      description: "When I'm not coding, I contribute to open-source projects, write technical articles, and explore the latest developments in Web3 and distributed systems.",
      highlight: "Open Source Contributor"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Current Focus",
      description: "Currently specializing in DeFi protocols and the backend infrastructure that powers modern decentralized applications in the Web3 ecosystem.",
      highlight: "DeFi & Web3"
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
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {card.highlight}
                      </span>
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