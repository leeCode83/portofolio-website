import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    location: "San Francisco, CA",
    duration: "2022 - Present",
    description: "Lead development of enterprise web applications using React, Node.js, and cloud technologies. Mentored junior developers and implemented best practices for code quality and performance.",
    technologies: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL", "Docker"]
  },
  {
    title: "Full Stack Developer",
    company: "Digital Innovations Ltd.",
    location: "New York, NY",
    duration: "2020 - 2022",
    description: "Developed and maintained multiple client projects, focusing on responsive web applications and API integrations. Collaborated with design teams to implement pixel-perfect UI components.",
    technologies: ["JavaScript", "React", "Express.js", "MongoDB", "CSS3", "Git"]
  },
  {
    title: "Frontend Developer",
    company: "Creative Agency Co.",
    location: "Austin, TX",
    duration: "2019 - 2020",
    description: "Built interactive user interfaces for marketing websites and e-commerce platforms. Optimized performance and ensured cross-browser compatibility.",
    technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "SASS"]
  },
  {
    title: "Junior Web Developer",
    company: "StartUp Labs",
    location: "Remote",
    duration: "2018 - 2019",
    description: "Assisted in developing web applications and learned modern development practices. Contributed to both frontend and backend development tasks.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "WordPress"]
  }
];

const ExperienceSection = () => {
  return (
    <section className="py-20 px-4">
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
                      {experience.company}
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
                      className="text-sm font-medium border-border/50 bg-background/50 hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all cursor-default"
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