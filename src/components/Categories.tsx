import { Users, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import categoryAI from "@/assets/category-ai.jpg";
import categoryIT from "@/assets/category-it.jpg";
import categoryData from "@/assets/category-data.jpg";

const categories = [
  {
    title: "IA generativa",
    students: "1M+",
    image: categoryAI
  },
  {
    title: "Certificaciones de informática",
    students: "14.4M+",
    image: categoryIT
  },
  {
    title: "Ciencias de la información",
    students: "8M+",
    image: categoryData
  }
];

const Categories = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-secondary overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(280px,_400px)_1fr] gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div className="space-y-3 sm:space-y-4 max-w-full lg:max-w-[400px] text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
              Aprende habilidades esenciales para el trabajo y la vida
            </h2>
            <p className="text-sm sm:text-base lg:text-base text-muted-foreground leading-relaxed">
              Udemy te ayuda a desarrollar rápidamente habilidades demandadas para impulsar tu carrera profesional en el cambiante mercado laboral.
            </p>
          </div>

          {/* Right - Categories Carousel */}
          <div className="relative -mx-4 sm:-mx-6 lg:mx-0">
            <div className="flex gap-3 sm:gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 px-4 sm:px-6 lg:px-0">
              {categories.map((category, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[340px] snap-start group cursor-pointer"
                >
                  <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                    {/* Image */}
                    <div className="relative h-[180px] sm:h-[220px] lg:h-[240px] overflow-hidden">
                      <img 
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="bg-white p-3 sm:p-4">
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-2">
                        <Users className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span className="font-bold">{category.students}</span>
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {category.title}
                        </h3>
                        <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-foreground group-hover:translate-x-1 transition-transform flex-shrink-0" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons - Hidden on mobile */}
            <div className="hidden lg:block absolute -left-6 top-1/2 -translate-y-1/2">
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 lg:h-12 lg:w-12 rounded-full bg-foreground border-foreground hover:bg-foreground/90 shadow-lg"
              >
                <ChevronLeft className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
              </Button>
            </div>
            <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2">
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 lg:h-12 lg:w-12 rounded-full bg-foreground border-foreground hover:bg-foreground/90 shadow-lg"
              >
                <ChevronRight className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
              </Button>
            </div>
          </div>
        </div>

        {/* Carousel indicators */}
        <div className="flex justify-center gap-2 mt-6 sm:mt-8 lg:hidden">
          <div className="w-8 h-2 rounded-full bg-primary"></div>
          <div className="w-2 h-2 rounded-full bg-muted"></div>
          <div className="w-2 h-2 rounded-full bg-muted"></div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
