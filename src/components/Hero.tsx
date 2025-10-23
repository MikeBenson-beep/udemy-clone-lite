import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-woman.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-primary/80 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-10 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
          {/* Content Box */}
          <div className="relative z-10">
            <div className="bg-white p-6 sm:p-8 lg:p-12 shadow-2xl max-w-[560px]">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
                Domina hoy las habilidades del mañana
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
                Potencia tus habilidades de IA, laborales y para la vida con un aprendizaje actualizado e impartido por expertos.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 sm:px-8 h-11 sm:h-12 w-full sm:w-auto"
                >
                  Empezar
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border border-foreground font-bold px-6 sm:px-8 h-11 sm:h-12 bg-white hover:bg-muted w-full sm:w-auto"
                >
                  Aprende sobre IA
                </Button>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden lg:block">
            <img 
              src={heroImage}
              alt="Professional learning with Udemy" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Decorative Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large organic shapes */}
        <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] lg:w-[800px] h-[400px] sm:h-[600px] lg:h-[800px] bg-primary/30 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-1/4 w-[300px] sm:w-[450px] lg:w-[600px] h-[300px] sm:h-[450px] lg:h-[600px] bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-[200px] sm:w-[300px] lg:w-[400px] h-[200px] sm:h-[300px] lg:h-[400px] bg-primary/20 rounded-full blur-2xl" />
      </div>
    </section>
  );
};

export default Hero;
