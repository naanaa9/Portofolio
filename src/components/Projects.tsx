import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Laravel E-Commerce Platform",
      description: "A scalable multi-vendor marketplace built with Laravel featuring payment processing, order management, real-time notifications, and comprehensive admin dashboard.",
      image: "https://images.unsplash.com/photo-1677214467820-ab069619bbb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzYwMDcwODIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Laravel 10", "MySQL", "Redis", "Stripe API"],
      github: "https://github.com/naanaa9/mini_project",
      demo: "https://example.com"
    },
    {
      title: "Custom WordPress Plugin Suite",
      description: "A collection of enterprise WordPress plugins for advanced SEO management, custom post types, and API integrations. Handles over 100k daily requests.",
      image: "https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYwMDAxNDA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["WordPress", "PHP 8", "REST API", "WP CLI"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "RESTful API Microservices",
      description: "High-performance microservices architecture using Symfony and PostgreSQL. Implements OAuth2, rate limiting, and serves 5M+ requests daily.",
      image: "https://images.unsplash.com/photo-1510832758362-af875829efcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjAwNDI3MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Symfony", "PostgreSQL", "Docker", "OAuth2"],
      github: "https://github.com",
      demo: "https://example.com"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of recent PHP projects showcasing backend development and API design
          </p>
        </div>
        
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className={`relative aspect-video md:aspect-square overflow-hidden ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <ImageWithFallback 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-6">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="gap-2" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" className="gap-2" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
