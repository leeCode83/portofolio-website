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
      liveUrl: null,
    },
    {
      title: "Festigo Web App",
      description: "Festigo is a web application designed to help users discover various festivals and events, connecting them with organizers and a community of attendees.",
      technologies: ["Node.js", "PostgreSQL", "Next.js, Cloudinary"],
      githubUrl: "https://github.com/leeCode83/festigo-web-app",
      liveUrl: null,
    },
    {
      title: "Ultralink URL Shortener",
      description: "Ultralink is a robust URL shortening service built with NestJS that allows users to transform long URLs into concise, manageable links, featuring user authentication and personalized URL management.",
      technologies: ["Nest.js (TypeSCript)", "PostgreSQL", "Prisma ORM", "Passport-JWT"],
      githubUrl: "https://github.com/leeCode83/ultralink-url-shortener",
      liveUrl: null,
    },
    {
      title: "Skpetical Startup Analyzer",
      description: "Skeptical Startup Analyzer, is a web application that takes a user's startup idea, including a description and a target audience, and then uses AI to generate a \"skeptical\" analysis. This analysis provides a critical perspective on the idea, highlighting potential challenges, market realities, and other factors that could hinder its success.",
      technologies: ["Next.js (TypeScript)", "Gemini API"],
      githubUrl: "https://github.com/leeCode83/skeptical-startup-analyzer",
      liveUrl: null,
    },
    {
      title: "OrderFlow",
      description: "OrderFlow is a backend application designed to manage an ordering system, including functionalities for handling products, processing orders, and user authentication.",
      technologies: ["Nest.js (TypeSCript)", "PostgreSQL", "Prisma ORM", "Passport-JWT"],
      githubUrl: "https://github.com/leeCode83/OrderFlow",
      liveUrl: null,
    },
    {
      title: "Video Platform Smart Contract",
      description: "Decentralized video platform built on Web3 technologies. It allows users to upload, view, and interact with videos in a peer-to-peer fashion, leveraging blockchain for features like ownership, payments, and censorship resistance.",
      technologies: ["Solidity"],
      githubUrl: "https://github.com/leeCode83/Video-Platform-Web3",
      liveUrl: null,
    }
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
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 hover:bg-muted/50 transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                </a>
                

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