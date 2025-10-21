import { Users, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const categories = [
  {
    title: "Inteligencia Artificial Generativa",
    students: "1M+",
    color: "from-purple-100 to-purple-50"
  },
  {
    title: "Certificaciones IT",
    students: "14.4M+",
    color: "from-blue-100 to-blue-50"
  },
  {
    title: "Ciencia de Datos",
    students: "5M+",
    color: "from-pink-100 to-pink-50"
  }
];

const Categories = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Aprende habilidades esenciales para tu carrera y vida
            </h2>
            <p className="text-lg text-muted-foreground">
              LearnHub te ayuda a desarrollar habilidades demandadas rápidamente y avanzar en tu carrera en un mercado laboral cambiante.
            </p>
          </div>

          {/* Right - Categories Grid */}
          <div className="grid gap-4">
            {categories.map((category, idx) => (
              <Card
                key={idx}
                className={`group relative overflow-hidden p-6 border-2 hover:border-primary/50 transition-all duration-300 cursor-pointer bg-gradient-to-br ${category.color}`}
              >
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{category.students}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Carousel indicators */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-8 h-2 rounded-full bg-primary"></div>
          <div className="w-2 h-2 rounded-full bg-muted"></div>
          <div className="w-2 h-2 rounded-full bg-muted"></div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
