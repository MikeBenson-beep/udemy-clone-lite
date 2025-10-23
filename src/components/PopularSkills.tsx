import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const PopularSkills = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="max-w-[1440px] mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 pb-6 border-b border-border">
          Popular Skills
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Column - Featured Skill */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              ChatGPT is a top skill
            </h3>
            <a 
              href="#" 
              className="inline-flex items-center text-primary font-bold text-base hover:text-primary/80 transition-colors mb-2"
            >
              See ChatGPT courses
              <ChevronRight className="ml-1 h-4 w-4" />
            </a>
            <p className="text-sm text-muted-foreground">5.134.263 learners</p>

            <Button
              variant="outline"
              className="mt-8 w-full border-foreground text-foreground font-bold hover:bg-secondary"
            >
              Show all trending skills
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Development Column */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-foreground mb-6">Desarrollo</h3>
            <div className="space-y-4">
              <div>
                <a 
                  href="#" 
                  className="inline-flex items-center text-primary font-bold text-base hover:text-primary/80 transition-colors"
                >
                  Python
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
                <p className="text-sm text-muted-foreground mt-1">49.475.412 learners</p>
              </div>
              
              <div>
                <a 
                  href="#" 
                  className="inline-flex items-center text-primary font-bold text-base hover:text-primary/80 transition-colors"
                >
                  Desarrollo web
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
                <p className="text-sm text-muted-foreground mt-1">14.327.836 learners</p>
              </div>
              
              <div>
                <a 
                  href="#" 
                  className="inline-flex items-center text-primary font-bold text-base hover:text-primary/80 transition-colors"
                >
                  Ciencias de la información
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
                <p className="text-sm text-muted-foreground mt-1">8.161.088 learners</p>
              </div>
            </div>
          </div>

          {/* Design Column */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-foreground mb-6">Diseño</h3>
            <div className="space-y-4">
              <div>
                <a 
                  href="#" 
                  className="inline-flex items-center text-primary font-bold text-base hover:text-primary/80 transition-colors"
                >
                  Blender
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
                <p className="text-sm text-muted-foreground mt-1">3.054.205 learners</p>
              </div>
              
              <div>
                <a 
                  href="#" 
                  className="inline-flex items-center text-primary font-bold text-base hover:text-primary/80 transition-colors"
                >
                  Diseño gráfico
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
                <p className="text-sm text-muted-foreground mt-1">4.633.141 learners</p>
              </div>
              
              <div>
                <a 
                  href="#" 
                  className="inline-flex items-center text-primary font-bold text-base hover:text-primary/80 transition-colors"
                >
                  Diseño de experiencia de usuario (UX)
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
                <p className="text-sm text-muted-foreground mt-1">2.124.473 learners</p>
              </div>
            </div>
          </div>

          {/* Business Column */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-foreground mb-6">Negocios</h3>
            <div className="space-y-4">
              <div>
                <a 
                  href="#" 
                  className="inline-flex items-center text-primary font-bold text-base hover:text-primary/80 transition-colors"
                >
                  PMI Project Management Professional (PMP)
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
                <p className="text-sm text-muted-foreground mt-1">2.763.566 learners</p>
              </div>
              
              <div>
                <a 
                  href="#" 
                  className="inline-flex items-center text-primary font-bold text-base hover:text-primary/80 transition-colors"
                >
                  Microsoft Power BI
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
                <p className="text-sm text-muted-foreground mt-1">4.993.536 learners</p>
              </div>
              
              <div>
                <a 
                  href="#" 
                  className="inline-flex items-center text-primary font-bold text-base hover:text-primary/80 transition-colors"
                >
                  PMI Certified Associate in Project Management (CAPM)
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
                <p className="text-sm text-muted-foreground mt-1">463.992 learners</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularSkills;
