import { Star, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import courseAI1 from "@/assets/course-ai-1.jpg";
import courseAI2 from "@/assets/course-ai-2.jpg";
import courseAI3 from "@/assets/course-ai-3.jpg";
import courseAI4 from "@/assets/course-ai-4.jpg";

const courses = [
  {
    id: 1,
    image: courseAI1,
    title: "Curso Completo de Ingeniería de Agentes de IA (2025)",
    instructor: "Ed Donner, Ligency, Juan Gabriel Gomila Salas",
    rating: 4.7,
    reviews: 215,
    price: "9,99 €",
    originalPrice: "41,99 €",
    bestseller: true
  },
  {
    id: 2,
    image: courseAI2,
    title: "Curso de IA web: Nuevo Modelo de Google para JavaScript",
    instructor: "Victor Robles",
    rating: 4.7,
    reviews: 51,
    price: "9,99 €",
    originalPrice: "41,99 €",
    bestseller: true
  },
  {
    id: 3,
    image: courseAI3,
    title: "[ES] Certificado de Explorador en Ingeniería de IA",
    instructor: "School of AI",
    rating: 4.6,
    reviews: 46,
    price: "9,99 €",
    originalPrice: "40,99 €",
    bestseller: false
  },
  {
    id: 4,
    image: courseAI4,
    title: "[ES] Curso de Certificación Profesional en Ingeniería de IA",
    instructor: "School of AI",
    rating: 4.7,
    reviews: 23,
    price: "9,99 €",
    originalPrice: "40,99 €",
    bestseller: false
  }
];

const SkillsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="mb-8 max-w-full overflow-visible">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3 w-full">
            Aprende habilidades esenciales para el trabajo y la vida
          </h2>
          <p className="text-lg text-muted-foreground">
            Desde habilidades esenciales hasta temas técnicos, Udemy respalda tu desarrollo profesional.
          </p>
        </div>

        <Tabs defaultValue="ia" className="w-full">
          <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent mb-8">
            <TabsTrigger 
              value="ia"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#1c1d1f] data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-3 text-base font-bold text-muted-foreground data-[state=active]:text-foreground"
            >
              Inteligencia artificial (IA)
            </TabsTrigger>
            <TabsTrigger 
              value="python"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#1c1d1f] data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-3 text-base font-bold text-muted-foreground data-[state=active]:text-foreground"
            >
              Python
            </TabsTrigger>
            <TabsTrigger 
              value="excel"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#1c1d1f] data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-3 text-base font-bold text-muted-foreground data-[state=active]:text-foreground"
            >
              Microsoft Excel
            </TabsTrigger>
            <TabsTrigger 
              value="n8n"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#1c1d1f] data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-3 text-base font-bold text-muted-foreground data-[state=active]:text-foreground"
            >
              n8n
            </TabsTrigger>
            <TabsTrigger 
              value="ingles"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#1c1d1f] data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-3 text-base font-bold text-muted-foreground data-[state=active]:text-foreground"
            >
              Idioma inglés
            </TabsTrigger>
            <TabsTrigger 
              value="marketing"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#1c1d1f] data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-3 text-base font-bold text-muted-foreground data-[state=active]:text-foreground"
            >
              Marketing digital
            </TabsTrigger>
          </TabsList>

          <TabsContent value="ia" className="mt-0">
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {courses.map((course) => (
                  <Card key={course.id} className="border-0 shadow-none hover:shadow-lg transition-shadow cursor-pointer group">
                    <div className="overflow-hidden">
                      <img 
                        src={course.image}
                        alt={course.title}
                        className="w-full h-[200px] object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-2">
                      <h3 className="font-bold text-[15px] text-foreground mb-1 line-clamp-2 leading-tight">
                        {course.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mb-2">
                        {course.instructor}
                      </p>
                      <div className="flex items-center gap-1 mb-2">
                        <span className="font-bold text-sm text-foreground">
                          {course.rating}
                        </span>
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">
                          ({course.reviews} valoraciones)
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-base text-foreground">
                          {course.price}
                        </span>
                        <span className="text-sm text-muted-foreground line-through">
                          {course.originalPrice}
                        </span>
                      </div>
                      {course.bestseller && (
                        <div className="mt-2">
                          <span className="inline-block bg-yellow-100 text-yellow-900 text-xs font-bold px-2 py-0.5">
                            Lo más vendido
                          </span>
                        </div>
                      )}
                    </div>
                  </Card>
                ))}
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="absolute -right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-foreground hover:bg-foreground/90 text-white shadow-lg"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>

            <div className="mt-8">
              <a 
                href="#" 
                className="inline-flex items-center text-primary font-bold text-base hover:text-primary/80 transition-colors"
              >
                Mostrar todos los cursos de Inteligencia artificial (IA)
                <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </TabsContent>

          <TabsContent value="python">
            <p className="text-muted-foreground">Cursos de Python próximamente...</p>
          </TabsContent>
          
          <TabsContent value="excel">
            <p className="text-muted-foreground">Cursos de Microsoft Excel próximamente...</p>
          </TabsContent>
          
          <TabsContent value="n8n">
            <p className="text-muted-foreground">Cursos de n8n próximamente...</p>
          </TabsContent>
          
          <TabsContent value="ingles">
            <p className="text-muted-foreground">Cursos de inglés próximamente...</p>
          </TabsContent>
          
          <TabsContent value="marketing">
            <p className="text-muted-foreground">Cursos de marketing digital próximamente...</p>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default SkillsSection;
