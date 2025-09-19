import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "DeFi Lending Protocol",
      description: "A decentralized lending platform built on Ethereum with automated liquidation mechanisms and yield farming capabilities.",
      technologies: ["Solidity", "React", "Node.js", "Web3.js", "PostgreSQL"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "NFT Marketplace API",
      description: "High-performance REST API for NFT trading with real-time price tracking, advanced filtering, and secure transaction processing.",
      technologies: ["Go", "MongoDB", "Redis", "Docker", "AWS"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Cross-Chain Bridge",
      description: "Secure bridge protocol enabling asset transfers between Ethereum and Polygon networks with minimal fees and fast confirmations.",
      technologies: ["Solidity", "TypeScript", "Hardhat", "Chainlink", "IPFS"],
      githubUrl: "#",
      liveUrl: null,
    },
    {
      title: "Microservices Backend",
      description: "Scalable microservices architecture for fintech applications with event-driven communication and comprehensive monitoring.",
      technologies: ["Python", "FastAPI", "Kubernetes", "RabbitMQ", "Prometheus"],
      githubUrl: "#",
      liveUrl: "#",
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work in blockchain development, backend systems, and smart contract solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover-effect border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary"
                      className="text-xs font-medium bg-secondary/50 hover:bg-secondary/70 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex items-center gap-2 hover:bg-muted/50 transition-colors"
                >
                  <Github className="h-4 w-4" />
                  Code
                </Button>
                
                {project.liveUrl && (
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex items-center gap-2 hover:bg-primary/10 hover:text-primary hover:border-primary transition-all"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;