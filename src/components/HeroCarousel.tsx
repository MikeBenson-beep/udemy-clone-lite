import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    title: "Suscríbete a lo mejor de LearnHub",
    description: "Con el Plan Personal, obtienes acceso a más de 26,000 de nuestros cursos mejor valorados en tecnología, negocios y más.",
    cta: "Pruébalo ahora",
    image: "/placeholder.svg"
  },
  {
    title: "Aprende habilidades esenciales",
    description: "Si eres nuevo en LearnHub, tenemos buenas noticias: por tiempo limitado, los cursos comienzan desde solo $14.99 para nuevos estudiantes.",
    cta: "Regístrate ahora",
    image: "/placeholder.svg"
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative bg-[hsl(var(--promo-bg)/0.3)] overflow-hidden">
      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid md:grid-cols-2 gap-8 items-center min-h-[400px]">
          {/* Content */}
          <div className="space-y-6 z-10">
            <div className="bg-background/95 backdrop-blur-sm p-8 rounded-lg shadow-lg max-w-xl">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                {slides[currentSlide].description}
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                {slides[currentSlide].cta}
              </Button>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="hidden md:block relative h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-lg" />
          </div>
        </div>

        {/* Navigation */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="bg-background/80 hover:bg-background"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20">
          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="bg-background/80 hover:bg-background"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentSlide ? "bg-primary w-8" : "bg-muted-foreground/50"
              }`}
              aria-label={`Ir a slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
