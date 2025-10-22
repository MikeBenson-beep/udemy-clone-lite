import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-woman.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#00b4d8] via-[#00b4d8] to-[#3b19a8] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content Box */}
          <div className="relative z-10">
            <div className="bg-white p-8 lg:p-12 shadow-2xl max-w-[560px]">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                Domina hoy las habilidades del mañana
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Potencia tus habilidades de IA, laborales y para la vida con un aprendizaje actualizado e impartido por expertos.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 h-12"
                >
                  Empezar
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border border-foreground font-bold px-8 h-12 bg-white hover:bg-muted"
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
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#7c4dff]/30 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#00bcd4]/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[#e1bee7]/20 rounded-full blur-2xl" />
      </div>
    </section>
  );
};

export default Hero;
