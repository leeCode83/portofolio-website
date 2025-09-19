const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-muted/20">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-primary">Me</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate Backend and Smart Contract Developer with over 5 years of experience 
                building scalable web applications and innovative blockchain solutions. My expertise spans 
                across multiple programming languages and frameworks, with a special focus on creating 
                secure, efficient, and maintainable code.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in tech started with traditional web development, but I quickly became fascinated 
                by the potential of blockchain technology. Today, I specialize in developing smart contracts, 
                DeFi protocols, and the backend infrastructure that powers modern decentralized applications.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me contributing to open-source projects, writing technical 
                articles, or exploring the latest developments in Web3 and distributed systems architecture.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-8 space-y-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">Quick Facts</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Experience</span>
                  <span className="font-semibold">5+ Years</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Projects Completed</span>
                  <span className="font-semibold">50+</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Smart Contracts Deployed</span>
                  <span className="font-semibold">25+</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Current Focus</span>
                  <span className="font-semibold">DeFi & Web3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;