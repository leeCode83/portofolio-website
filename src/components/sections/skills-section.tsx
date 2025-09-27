import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Code2, 
  Database, 
  Blocks, 
  Server, 
  Cloud, 
  Shield 
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="h-6 w-6" />,
      skills: ["TypeScript", "JavaScript", "Python", "Go", "Solidity", "Java", "SQL"]
    }, {
      title: "Backend Development",
      icon: <Server className="h-6 w-6" />,
      skills: ["Node.js", "Java", "Laravel"]
    }, 
    {
      title: "Databases & Storage",
      icon: <Database className="h-6 w-6" />,
      skills: ["PostgreSQL", "Redis", "0G Storage", "MySQL"]
    },
    {
      title: "Blockchain & Smart Contracts",
      icon: <Blocks className="h-6 w-6" />,
      skills: ["Solidity", "Rust", "Web3.js", "Ethers.js", "Wagmi", "OpenZeppelin"]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My Tech <span className="text-primary">Stack</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I use to build robust, scalable, and secure applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className=" border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="outline"
                      className="text-sm font-medium border-border/50 bg-background/50 hover:bg-primary/90 transition-all hover:scale-105 hover:text-white transition-all cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional certifications or achievements */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-6 text-primary">Certifications & Achievements</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="text-sm py-2 px-4 bg-secondary/30">
              IBM Granite for Software Development - IBM Skillsbuild
            </Badge>
            <Badge variant="secondary" className="text-sm py-2 px-4 bg-secondary/30">
              Certified Ethereum Developer - HackQuest
            </Badge>
            <Badge variant="secondary" className="text-sm py-2 px-4 bg-secondary/30">
              Java Programming Course - Great Learning
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;