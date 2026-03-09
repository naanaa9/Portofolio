import { GitlabIcon, GithubIcon, ArrowRight, LinkedinIcon, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border py-8 md:py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
              <a
              href="https://github.com/naanaa9"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full hover:bg-accent transition-colors touch-manipulation"
              aria-label="GitHub"
            >
              <GithubIcon className="w-6 h-6" />
            </a>

            <a
              href="https://gitlab.com/dianaksm789"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full hover:bg-accent transition-colors touch-manipulation"
              aria-label="GitLab"
            >
              <GitlabIcon className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/dianakusumaningsih9/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full hover:bg-accent transition-colors touch-manipulation"
            >
              <LinkedinIcon className="w-6 h-6" />
            </a>
            <a 
              href="mailto:dianaksm789@gmail.com"
              className="p-3 rounded-full hover:bg-accent transition-colors touch-manipulation"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          
          <div className="text-center text-muted-foreground">
            <p className="flex items-center gap-2 justify-center">
              © {currentYear} _ Diana Kusumaningsih
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
