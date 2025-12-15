import { Button } from "./ui/button";
import { ArrowRight, Linkedin, Mail } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10 -z-10" />
      
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl">
            Hi, I'm <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Diana Kusumaningsih</span>
          </h1>
          <h2 className="text-2xl md:text-4xl text-muted-foreground">
            Computer Science
          </h2>
        </div>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          I’m passionate about turning data into insights and creating user-friendly
          web interfaces that blend functionality with clean design.
        </p>
        
        <div className="flex gap-4 justify-center items-center flex-wrap">
          <Button 
            size="lg" 
            onClick={() => scrollToSection('projects')}
            className="gap-2"
          >
            View My Work <ArrowRight className="w-4 h-4" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
          </Button>
        </div>
        
        <div className="flex gap-4 justify-center pt-4">
          <a 
            href="https://www.linkedin.com/in/dianakusumaningsih9/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full hover:bg-accent transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="mailto:dianaksm789@gmail.com"
            className="p-3 rounded-full hover:bg-accent transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
