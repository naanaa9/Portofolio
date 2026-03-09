// Logo Component dengan berbagai style options
// Ganti 'variant' prop untuk style yang berbeda

type LogoVariant = "gradient" | "minimal" | "bordered" | "circle" | "modern";

interface LogoProps {
  variant?: LogoVariant;
  onClick?: () => void;
}

export function Logo({ variant = "gradient", onClick }: LogoProps) {
  const variants = {
    // Style 1: Gradient dengan glow effect (default)
    gradient: (
      <button
        onClick={onClick}
        className="group flex items-center gap-2 hover:scale-105 transition-transform"
        aria-label="Home"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/60 rounded-lg blur-sm opacity-50 group-hover:opacity-75 transition-opacity" />
          <div className="relative bg-gradient-to-br from-primary to-primary/80 text-primary-foreground font-bold text-lg md:text-xl px-3 py-1.5 rounded-lg shadow-sm">
            DK
          </div>
        </div>
      </button>
    ),

    // Style 2: Minimal & Clean
    minimal: (
      <button
        onClick={onClick}
        className="group flex items-center gap-2"
        aria-label="Home"
      >
        <div className="font-bold text-2xl md:text-3xl tracking-tight">
          <span className="text-primary">D</span>
          <span className="text-foreground group-hover:text-primary transition-colors">K</span>
        </div>
      </button>
    ),

    // Style 3: Bordered Box
    bordered: (
      <button
        onClick={onClick}
        className="group flex items-center gap-2 hover:scale-105 transition-transform"
        aria-label="Home"
      >
        <div className="border-2 border-primary px-3 py-1 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-all">
          <span className="font-bold text-lg md:text-xl">DK</span>
        </div>
      </button>
    ),

    // Style 4: Circle Badge
    circle: (
      <button
        onClick={onClick}
        className="group flex items-center gap-2 hover:scale-110 transition-transform"
        aria-label="Home"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-primary rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity" />
          <div className="relative bg-gradient-to-br from-primary to-primary/70 text-primary-foreground font-bold text-base md:text-lg w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg">
            DK
          </div>
        </div>
      </button>
    ),

    // Style 5: Modern Split
    modern: (
      <button
        onClick={onClick}
        className="group flex items-center gap-2"
        aria-label="Home"
      >
        <div className="flex items-center gap-0.5">
          <div className="bg-primary text-primary-foreground font-bold text-lg md:text-xl px-2 py-1 rounded-l-lg group-hover:px-3 transition-all">
            D
          </div>
          <div className="bg-primary/20 text-primary font-bold text-lg md:text-xl px-2 py-1 rounded-r-lg group-hover:bg-primary group-hover:text-primary-foreground group-hover:px-3 transition-all">
            K
          </div>
        </div>
      </button>
    ),
  };

  return variants[variant];
}
