import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Code2, Database, Server, BarChart2, Layout, Users } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Frontend Development",
      description:
        "Creating responsive and interactive web interfaces using HTML, CSS, JavaScript, and Bootstrap. Focused on delivering clean design and optimal user experience.",
    },
    {
      icon: Database,
      title: "Data Processing",
      description:
        "Entering, verifying, and managing academic or research data using Microsoft Excel and data management systems to ensure accuracy and efficiency.",
    },
    {
      icon: Server,
      title: "Programming & Logic",
      description:
        "Proficient in Python and C++ with strong analytical and problem-solving skills for building efficient solutions.",
    },
    {
      icon: BarChart2,
      title: "Data Analytics & Machine Learning",
      description:
        "Understanding data science, data mining, and machine learning concepts to transform data into actionable insights.",
    },
    {
      icon: Layout,
      title: "UI/UX Design",
      description:
        "Designing intuitive and visually appealing interfaces using Figma and Canva, prioritizing user experience and clarity.",
    },
    {
      icon: Users,
      title: "Team Collaboration & Communication",
      description:
        "Collaborating effectively within teams, demonstrating strong communication, adaptability, and responsibility in achieving shared goals.",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1080"
                alt="Minimalist workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="space-y-6">
          <p
            className="text-lg leading-relaxed"
            style={{ textAlign: "justify" }}
          >
            I am a Computer Science graduate from Mercu Buana University with a strong
            interest in data processing and user interface (front-end) development. I
            have foundational experience in web development using HTML, CSS,
            JavaScript, C++, and Python, and am familiar with Bootstrap for responsive
            design. Additionally, I possess knowledge of machine learning, data science,
            and data analytics, along with practical experience in managing academic
            data systems.
          </p>

          <p
            className="text-lg leading-relaxed"
            style={{ textAlign: "justify" }}
          >
            I am a team-oriented individual with excellent communication skills, fluent
            in English, and always eager to improve both my technical and soft skills.
            My goal is to contribute positively to professional environments through
            continuous learning and creative problem-solving.
          </p>
        </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-shadow"
            >
              <highlight.icon className="w-12 h-12 mb-4 text-primary" />
              <h3 className="mb-2">{highlight.title}</h3>
              <p className="text-muted-foreground">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
