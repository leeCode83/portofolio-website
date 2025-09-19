import { Badge } from "@/components/ui/badge";
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
      title: "Blockchain & Smart Contracts",
      icon: <Blocks className="h-6 w-6" />,
      skills: ["Solidity", "Rust", "Web3.js", "Ethers.js", "Hardhat", "Truffle", "OpenZeppelin", "Chainlink"]
    },
    {
      title: "Backend Development",
      icon: <Server className="h-6 w-6" />,
      skills: ["Node.js", "Python", "Go", "Java", "Express.js", "FastAPI", "Django", "Gin"]
    },
    {
      title: "Databases & Storage",
      icon: <Database className="h-6 w-6" />,
      skills: ["PostgreSQL", "MongoDB", "Redis", "IPFS", "MySQL", "Elasticsearch", "InfluxDB"]
    },
    {
      title: "Programming Languages",
      icon: <Code2 className="h-6 w-6" />,
      skills: ["TypeScript", "JavaScript", "Python", "Go", "Solidity", "Rust", "Java", "SQL"]
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud className="h-6 w-6" />,
      skills: ["Docker", "Kubernetes", "AWS", "GCP", "Terraform", "Jenkins", "GitHub Actions", "Prometheus"]
    },
    {
      title: "Security & Testing",
      icon: <Shield className="h-6 w-6" />,
      skills: ["Smart Contract Auditing", "Penetration Testing", "Jest", "Mocha", "Pytest", "Security Best Practices"]
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
            <div key={index} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="outline"
                    className="text-sm font-medium border-border/50 bg-background/50 hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional certifications or achievements */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-6 text-primary">Certifications & Achievements</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="text-sm py-2 px-4 bg-secondary/30">
              AWS Certified Solutions Architect
            </Badge>
            <Badge variant="secondary" className="text-sm py-2 px-4 bg-secondary/30">
              Certified Ethereum Developer
            </Badge>
            <Badge variant="secondary" className="text-sm py-2 px-4 bg-secondary/30">
              Smart Contract Security Specialist
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;