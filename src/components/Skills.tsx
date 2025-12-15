export function Skills() {
  const skillCategories = [
    {
      title: "Database",
      skills: ["MySQL", "Oracle DB", "MariaDB"]
    },
    {
      title: "Frontend & Tools",
      skills: ["JavaScript", "Html", "React", "Bootstrap", "Vue.js", "Visual Studio Code"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-xl border border-border"
            >
              <h3 className="mb-6 text-center">{category.title}</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="px-4 py-2 bg-accent rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
