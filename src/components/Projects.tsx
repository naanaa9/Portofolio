import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, GithubIcon } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "React Admin Dashboard",
      description: "A modern admin dashboard built with React featuring data management (CRUD), authentication-ready layout, responsive UI, and reusable components designed for internal tools and admin systems.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      tags: ["React", "Vite", "Tailwind CSS", "Admin Dashboard"],
      github: "https://github.com/naanaa9/react-admin-dashboard",
      demo: "https://spendly-pearl.vercel.app"
    },
    {
      title: "Internship Management System",
      description: "A web-based internship management system designed to manage intern data, mentors, and activity reports through a centralized admin dashboard. Built to support real-world internal management workflows.",
      image: "https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      tags: ["React", "Vite", "Tailwind CSS", "Admin System"],
      github: "https://github.com/naanaa9/internship-management-system",
      demo: "https://task-management-app-eta-two.vercel.app"
    },
    // {
    //   title: "RESTful API Microservices",
    //   description: "High-performance microservices architecture using Symfony and PostgreSQL. Implements OAuth2, rate limiting, and serves 5M+ requests daily.",
    //   image: "https://images.unsplash.com/photo-1510832758362-af875829efcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjAwNDI3MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    //   tags: ["Symfony", "PostgreSQL", "Docker", "OAuth2"],
    //   github: "https://github.com",
    //   demo: "https://example.com"
    // }
  ];

  return (
    <section id="projects" className="py-12 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4" />
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
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
                
                <div className="p-6 md:p-8 flex flex-col justify-center">
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
                        <GithubIcon className="w-4 h-4" />
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
