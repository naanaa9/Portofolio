import { Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            <a 
              href="https://www.linkedin.com/in/dianakusumaningsih9/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:dianaksm789@gmail.com"
              className="p-2 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          
          <div className="text-center text-muted-foreground">
            <p className="flex items-center gap-2 justify-center">
              © {currentYear} Diana Kusumaningsih. Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> and React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
