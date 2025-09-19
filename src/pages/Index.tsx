import Navbar from "@/components/ui/navbar";
import HeroSection from "@/components/sections/hero-section";
import ProjectsSection from "@/components/sections/projects-section";
import AboutSection from "@/components/sections/about-section";
import SkillsSection from "@/components/sections/skills-section";
import ContactSection from "@/components/sections/contact-section";
import Footer from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
