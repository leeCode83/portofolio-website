import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Lisk Builder Challenge Hackathon",
    position: "Team Lead",
    location: "Jakarta, Indonesia",
    duration: "June 2025",
    description: "Designed the optimal web3 application architecture and managed the development workflow to ensure efficient project execution as Team Lead. Successfully led a team to achieve 2nd Place Winner and Social Media Challenge Winner out of 34 competing teams in the Lisk Builder Challenge Hackathon.",
    technologies: ["React", "Node.js", "FastAPI", "Solidity", "Gemini API"]
  },
  {
    title: "Festigo Web Application",
    position: "Backend Developer",
    location: "Jakarta, Indonesia",
    duration: "March 2025 - May 2025",
    description: "Developed the backend REST API using NestJS and designed the PostgreSQL database with PrismaORM for \"Festigo\" a college project aimed at event promotion. Implemented robust business logic and data handling processes that served as the backbone for the application's features.",
    technologies: ["Typescript", "Next.js", "Nest.js", "PostgreSQL", "Cloudinary", "Git"]
  },
  {
    title: "First Year Program Binus 2024",
    position: "Freshmen Leader & Freshmen Partner",
    location: "Jakarta, Indonesia",
    duration: "August 2024 - May 2025",
    description: "Co-managed a six-member team to successfully organize and execute an orientation program for new students. Mentored a group of ten freshmen for one year, providing guidance and actively fostering their integration into university life.",
    technologies: ["Teamwork", "Leadership", "Problem Solving", "Communication"]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and the roles that have shaped my expertise in web development.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <Card key={index} className="card-hover-effect border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl font-semibold">
                      {experience.title}
                    </CardTitle>
                    <div className="text-primary font-medium text-lg">
                      {experience.position}
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:items-end gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {experience.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {experience.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {experience.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="outline"
                      className="text-sm font-medium border-border/50 bg-background/50 hover:bg-primary/90 transition-all hover:scale-105 hover:text-white transition-all cursor-default"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;