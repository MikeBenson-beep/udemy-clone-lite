import { Star } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const courses = [
  {
    title: "Desarrollo Web Completo 2024: HTML, CSS, JavaScript y más",
    instructor: "Dr. Angela Yu",
    rating: 4.7,
    reviews: "387,294",
    price: "$84.99",
    originalPrice: "$109.99",
    bestseller: true,
    image: "/placeholder.svg"
  },
  {
    title: "Machine Learning A-Z: Python y R en Data Science",
    instructor: "Kirill Eremenko",
    rating: 4.5,
    reviews: "178,234",
    price: "$74.99",
    originalPrice: "$99.99",
    bestseller: true,
    image: "/placeholder.svg"
  },
  {
    title: "Curso Completo de React - De cero a experto",
    instructor: "Maximilian Schwarzmüller",
    rating: 4.6,
    reviews: "156,892",
    price: "$79.99",
    originalPrice: "$94.99",
    bestseller: false,
    image: "/placeholder.svg"
  },
  {
    title: "Python para Data Science y Machine Learning Bootcamp",
    instructor: "Jose Portilla",
    rating: 4.6,
    reviews: "189,432",
    price: "$84.99",
    originalPrice: "$109.99",
    bestseller: true,
    image: "/placeholder.svg"
  }
];

const FeaturedCourses = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-foreground mb-2">
          Una amplia selección de cursos
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Elige entre más de 210,000 cursos en video en línea con nuevas adiciones cada mes
        </p>

        {/* Category tabs */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          <button className="px-4 py-2 font-semibold text-foreground border-b-2 border-primary whitespace-nowrap">
            Python
          </button>
          <button className="px-4 py-2 font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
            Excel
          </button>
          <button className="px-4 py-2 font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
            Desarrollo Web
          </button>
          <button className="px-4 py-2 font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
            JavaScript
          </button>
          <button className="px-4 py-2 font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
            Data Science
          </button>
        </div>

        {/* Courses Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {courses.map((course, idx) => (
            <Card 
              key={idx} 
              className="group cursor-pointer border hover:shadow-lg transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video bg-muted">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-500/20" />
              </div>
              <CardContent className="p-4 space-y-2">
                <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-sm text-muted-foreground">{course.instructor}</p>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-foreground">{course.rating}</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < Math.floor(course.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">({course.reviews})</span>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex items-center gap-2">
                <span className="text-lg font-bold text-foreground">{course.price}</span>
                <span className="text-sm text-muted-foreground line-through">
                  {course.originalPrice}
                </span>
                {course.bestseller && (
                  <Badge className="ml-auto bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                    Bestseller
                  </Badge>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Explore more */}
        <div className="border rounded-lg p-8 text-center space-y-4">
          <h3 className="text-2xl font-bold text-foreground">
            Explora el potencial completo de Python
          </h3>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Con más de 2,000 cursos de Python para todos los niveles, desde principiantes hasta profesionales, aprende análisis de datos, automatización, desarrollo web y más.
          </p>
          <button className="px-6 py-3 border-2 border-foreground font-semibold text-foreground hover:bg-muted transition-colors rounded-md">
            Explorar Python
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
