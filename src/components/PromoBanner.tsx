import { X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-[hsl(var(--promo-bg))] border-b border-[hsl(var(--promo-text)/0.2)]">
      <div className="container mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-1 justify-center text-sm">
          <span className="font-semibold text-[hsl(var(--promo-text))]">
            Oferta especial
          </span>
          <span className="text-[hsl(var(--promo-text)/0.8)]">
            | Cursos desde $14.99. Haz clic para ver las ofertas. Termina en 5h 59m 58s.
          </span>
          <Button 
            size="sm" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-4"
          >
            Canjear ahora
          </Button>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-[hsl(var(--promo-text)/0.6)] hover:text-[hsl(var(--promo-text))] transition-colors"
          aria-label="Cerrar banner"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default PromoBanner;
