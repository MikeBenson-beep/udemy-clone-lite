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
    <section className="py-16 bg-[#f7f9fa]">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid lg:grid-cols-[400px_1fr] gap-12 items-center">
          {/* Left content */}
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1c1d1f]">
              Aprende habilidades esenciales para el trabajo y la vida
            </h2>
            <p className="text-base text-[#6a6f73]">
              Udemy te ayuda a desarrollar rápidamente habilidades demandadas para impulsar tu carrera profesional en el cambiante mercado laboral.
            </p>
          </div>

          {/* Right - Categories Carousel */}
          <div className="relative">
            <div className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
              {categories.map((category, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-[340px] snap-start group cursor-pointer"
                >
                  <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                    {/* Image */}
                    <div className="relative h-[240px] overflow-hidden">
                      <img 
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="bg-white p-4">
                      <div className="flex items-center gap-2 text-sm text-[#6a6f73] mb-2">
                        <Users className="h-4 w-4" />
                        <span className="font-bold">{category.students}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold text-[#1c1d1f] group-hover:text-primary transition-colors">
                          {category.title}
                        </h3>
                        <ArrowRight className="h-5 w-5 text-[#1c1d1f] group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="absolute -left-6 top-1/2 -translate-y-1/2">
              <Button
                variant="outline"
                size="icon"
                className="h-12 w-12 rounded-full bg-[#1c1d1f] border-[#1c1d1f] hover:bg-[#1c1d1f]/90 shadow-lg"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </Button>
            </div>
            <div className="absolute -right-6 top-1/2 -translate-y-1/2">
              <Button
                variant="outline"
                size="icon"
                className="h-12 w-12 rounded-full bg-[#1c1d1f] border-[#1c1d1f] hover:bg-[#1c1d1f]/90 shadow-lg"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </Button>
            </div>
          </div>
        </div>

        {/* Carousel indicators */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-8 h-2 rounded-full bg-[#00b4d8]"></div>
          <div className="w-2 h-2 rounded-full bg-[#d1d7dc]"></div>
          <div className="w-2 h-2 rounded-full bg-[#d1d7dc]"></div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
