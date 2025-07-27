import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-hero overflow-hidden pt-20">
      {/* Background animated elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-75"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Avatar */}
          <div className="relative inline-block">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-primary p-1 shadow-elegant">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center text-4xl font-bold text-primary">
                AC
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-card">
              <div className="w-3 h-3 bg-accent-foreground rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Main content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground">
              Arnav Chopra
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 font-light">
              Data Science Intern • ML Engineer • Problem Solver
            </p>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Passionate about exploring datasets and uncovering insights that drive decisions. 
              Specializing in ML, NLP, and predictive modeling.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-elegant px-8 py-3"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              className="px-8 py-3"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              <Download className="mr-2 h-5 w-5" />
              Resume
            </Button>
          </div>

          {/* Social links */}
          <div className="flex justify-center space-x-6 pt-8">
            <a 
              href="mailto:arnavchopra2607@gmail.com" 
              className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-110"
            >
              <Mail className="h-6 w-6 text-primary-foreground" />
            </a>
            <a 
              href="https://linkedin.com/in/arnavc26" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="h-6 w-6 text-primary-foreground" />
            </a>
            <a 
              href="https://github.com/ac-26" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-110"
            >
              <Github className="h-6 w-6 text-primary-foreground" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary-foreground/60" />
      </div>
    </section>
  );
};

export default Hero;