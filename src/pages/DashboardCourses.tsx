import { useState } from "react";
import { Star, Filter, X } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

// Course data structure
interface Course {
  id: number;
  title: string;
  instructor: string;
  rating: number;
  reviews: string;
  price: string;
  originalPrice: string;
  bestseller: boolean;
  image: string;
  category: string;
  subcategory: string;
  level: string;
}

const courses: Course[] = [
  {
    id: 1,
    title: "Desarrollo Web Completo 2024: HTML, CSS, JavaScript y más",
    instructor: "Dr. Angela Yu",
    rating: 4.7,
    reviews: "387,294",
    price: "$84.99",
    originalPrice: "$109.99",
    bestseller: true,
    image: "/placeholder.svg",
    category: "Desarrollo",
    subcategory: "Desarrollo Web",
    level: "Todos los niveles"
  },
  {
    id: 2,
    title: "Machine Learning A-Z: Python y R en Data Science",
    instructor: "Kirill Eremenko",
    rating: 4.5,
    reviews: "178,234",
    price: "$74.99",
    originalPrice: "$99.99",
    bestseller: true,
    image: "/placeholder.svg",
    category: "Data Science",
    subcategory: "Machine Learning",
    level: "Intermedio"
  },
  {
    id: 3,
    title: "Curso Completo de React - De cero a experto",
    instructor: "Maximilian Schwarzmüller",
    rating: 4.6,
    reviews: "156,892",
    price: "$79.99",
    originalPrice: "$94.99",
    bestseller: false,
    image: "/placeholder.svg",
    category: "Desarrollo",
    subcategory: "JavaScript",
    level: "Principiante"
  },
  {
    id: 4,
    title: "Python para Data Science y Machine Learning Bootcamp",
    instructor: "Jose Portilla",
    rating: 4.6,
    reviews: "189,432",
    price: "$84.99",
    originalPrice: "$109.99",
    bestseller: true,
    image: "/placeholder.svg",
    category: "Data Science",
    subcategory: "Python",
    level: "Todos los niveles"
  },
  {
    id: 5,
    title: "AWS Certified Solutions Architect - Associate 2024",
    instructor: "Stephane Maarek",
    rating: 4.7,
    reviews: "245,678",
    price: "$89.99",
    originalPrice: "$119.99",
    bestseller: true,
    image: "/placeholder.svg",
    category: "TI y Software",
    subcategory: "Certificaciones",
    level: "Intermedio"
  },
  {
    id: 6,
    title: "Diseño UX/UI Completo - De principiante a experto",
    instructor: "Daniel Schifano",
    rating: 4.5,
    reviews: "98,234",
    price: "$69.99",
    originalPrice: "$89.99",
    bestseller: false,
    image: "/placeholder.svg",
    category: "Diseño",
    subcategory: "UX/UI Design",
    level: "Principiante"
  },
  {
    id: 7,
    title: "Node.js - El Curso Completo: Construye APIs RESTful",
    instructor: "Mosh Hamedani",
    rating: 4.6,
    reviews: "124,567",
    price: "$79.99",
    originalPrice: "$99.99",
    bestseller: true,
    image: "/placeholder.svg",
    category: "Desarrollo",
    subcategory: "JavaScript",
    level: "Intermedio"
  },
  {
    id: 8,
    title: "Deep Learning Especialización - Neural Networks",
    instructor: "Andrew Ng",
    rating: 4.8,
    reviews: "312,456",
    price: "$94.99",
    originalPrice: "$129.99",
    bestseller: true,
    image: "/placeholder.svg",
    category: "Data Science",
    subcategory: "Deep Learning",
    level: "Avanzado"
  },
  {
    id: 9,
    title: "Marketing Digital Completo: 23 Cursos en 1",
    instructor: "Phil Ebiner",
    rating: 4.5,
    reviews: "187,234",
    price: "$74.99",
    originalPrice: "$94.99",
    bestseller: false,
    image: "/placeholder.svg",
    category: "Marketing",
    subcategory: "Marketing Digital",
    level: "Todos los niveles"
  },
  {
    id: 10,
    title: "Docker y Kubernetes: La Guía Completa",
    instructor: "Stephen Grider",
    rating: 4.7,
    reviews: "156,789",
    price: "$84.99",
    originalPrice: "$109.99",
    bestseller: true,
    image: "/placeholder.svg",
    category: "TI y Software",
    subcategory: "DevOps",
    level: "Intermedio"
  },
  {
    id: 11,
    title: "Flutter & Dart - Guía Completa 2024",
    instructor: "Maximilian Schwarzmüller",
    rating: 4.6,
    reviews: "89,456",
    price: "$79.99",
    originalPrice: "$99.99",
    bestseller: false,
    image: "/placeholder.svg",
    category: "Desarrollo",
    subcategory: "Desarrollo Móvil",
    level: "Principiante"
  },
  {
    id: 12,
    title: "Excel Avanzado: Análisis de Datos y Dashboard",
    instructor: "Maven Analytics",
    rating: 4.7,
    reviews: "234,567",
    price: "$69.99",
    originalPrice: "$89.99",
    bestseller: true,
    image: "/placeholder.svg",
    category: "Negocios",
    subcategory: "Excel",
    level: "Avanzado"
  },
  {
    id: 13,
    title: "Figma UI/UX Design Essentials",
    instructor: "Daniel Walter Scott",
    rating: 4.6,
    reviews: "78,901",
    price: "$64.99",
    originalPrice: "$84.99",
    bestseller: false,
    image: "/placeholder.svg",
    category: "Diseño",
    subcategory: "Herramientas de Diseño",
    level: "Principiante"
  },
  {
    id: 14,
    title: "Blockchain y Criptomonedas: Curso Completo",
    instructor: "Ivan on Tech",
    rating: 4.5,
    reviews: "67,890",
    price: "$89.99",
    originalPrice: "$119.99",
    bestseller: false,
    image: "/placeholder.svg",
    category: "TI y Software",
    subcategory: "Blockchain",
    level: "Intermedio"
  },
  {
    id: 15,
    title: "SQL para Análisis de Datos: Desde Cero",
    instructor: "Jose Portilla",
    rating: 4.6,
    reviews: "145,678",
    price: "$74.99",
    originalPrice: "$94.99",
    bestseller: true,
    image: "/placeholder.svg",
    category: "Data Science",
    subcategory: "Bases de Datos",
    level: "Principiante"
  },
  {
    id: 16,
    title: "Google Ads (AdWords) Certificación 2024",
    instructor: "Isaac Rudansky",
    rating: 4.6,
    reviews: "98,765",
    price: "$79.99",
    originalPrice: "$99.99",
    bestseller: false,
    image: "/placeholder.svg",
    category: "Marketing",
    subcategory: "Publicidad Digital",
    level: "Todos los niveles"
  }
];

// Extract unique values for filters
const categories = Array.from(new Set(courses.map(c => c.category))).sort();
const allSubcategories = Array.from(new Set(courses.map(c => c.subcategory))).sort();
const levels = Array.from(new Set(courses.map(c => c.level))).sort();

const DashboardCourses = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>("relevance");
  const [showFilters, setShowFilters] = useState(true);

  // Filter courses based on selections
  const filteredCourses = courses.filter(course => {
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(course.category);
    const subcategoryMatch = selectedSubcategories.length === 0 || selectedSubcategories.includes(course.subcategory);
    const levelMatch = selectedLevels.length === 0 || selectedLevels.includes(course.level);
    return categoryMatch && subcategoryMatch && levelMatch;
  });

  // Sort courses
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.rating - a.rating;
      case "price-low":
        return parseFloat(a.price.replace("$", "")) - parseFloat(b.price.replace("$", ""));
      case "price-high":
        return parseFloat(b.price.replace("$", "")) - parseFloat(a.price.replace("$", ""));
      case "reviews":
        return parseInt(b.reviews.replace(",", "")) - parseInt(a.reviews.replace(",", ""));
      default:
        return 0;
    }
  });

  // Get subcategories for selected categories
  const availableSubcategories = selectedCategories.length > 0
    ? allSubcategories.filter(sub => 
        courses.some(c => selectedCategories.includes(c.category) && c.subcategory === sub)
      )
    : allSubcategories;

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleSubcategory = (subcategory: string) => {
    setSelectedSubcategories(prev =>
      prev.includes(subcategory)
        ? prev.filter(s => s !== subcategory)
        : [...prev, subcategory]
    );
  };

  const toggleLevel = (level: string) => {
    setSelectedLevels(prev =>
      prev.includes(level)
        ? prev.filter(l => l !== level)
        : [...prev, level]
    );
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedSubcategories([]);
    setSelectedLevels([]);
  };

  const hasActiveFilters = selectedCategories.length > 0 || selectedSubcategories.length > 0 || selectedLevels.length > 0;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="bg-background">
        {/* Header Section */}
        <div className="bg-[#f7f9fa] border-b">
          <div className="max-w-[1440px] mx-auto px-6 py-8">
            <h1 className="text-3xl font-bold text-[#1c1d1f] mb-2">
              Todos los cursos
            </h1>
            <p className="text-lg text-[#6a6f73]">
              {sortedCourses.length} {sortedCourses.length === 1 ? 'curso' : 'cursos'}
            </p>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 py-8">
          <div className="flex gap-8">
            {/* Filters Sidebar */}
            <aside className={`${showFilters ? 'w-80' : 'w-0'} flex-shrink-0 transition-all duration-300 overflow-hidden`}>
              <div className="sticky top-24 space-y-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold text-[#1c1d1f] flex items-center gap-2">
                    <Filter className="h-5 w-5" />
                    Filtros
                  </h2>
                  {hasActiveFilters && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearAllFilters}
                      className="text-primary hover:text-primary/80"
                    >
                      Limpiar todo
                    </Button>
                  )}
                </div>

                {/* Categories Filter */}
                <div className="border-b pb-6">
                  <h3 className="font-bold text-[#1c1d1f] mb-4">Categorías</h3>
                  <div className="space-y-3">
                    {categories.map(category => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox
                          id={`category-${category}`}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={() => toggleCategory(category)}
                        />
                        <Label
                          htmlFor={`category-${category}`}
                          className="text-sm text-[#1c1d1f] cursor-pointer hover:text-primary transition-colors"
                        >
                          {category}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subcategories Filter */}
                <div className="border-b pb-6">
                  <h3 className="font-bold text-[#1c1d1f] mb-4">Subcategorías</h3>
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {availableSubcategories.map(subcategory => (
                      <div key={subcategory} className="flex items-center space-x-2">
                        <Checkbox
                          id={`subcategory-${subcategory}`}
                          checked={selectedSubcategories.includes(subcategory)}
                          onCheckedChange={() => toggleSubcategory(subcategory)}
                        />
                        <Label
                          htmlFor={`subcategory-${subcategory}`}
                          className="text-sm text-[#1c1d1f] cursor-pointer hover:text-primary transition-colors"
                        >
                          {subcategory}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Level Filter */}
                <div className="border-b pb-6">
                  <h3 className="font-bold text-[#1c1d1f] mb-4">Nivel</h3>
                  <div className="space-y-3">
                    {levels.map(level => (
                      <div key={level} className="flex items-center space-x-2">
                        <Checkbox
                          id={`level-${level}`}
                          checked={selectedLevels.includes(level)}
                          onCheckedChange={() => toggleLevel(level)}
                        />
                        <Label
                          htmlFor={`level-${level}`}
                          className="text-sm text-[#1c1d1f] cursor-pointer hover:text-primary transition-colors"
                        >
                          {level}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Active Filters */}
                {hasActiveFilters && (
                  <div className="space-y-2">
                    <h3 className="font-bold text-[#1c1d1f] mb-3">Filtros activos</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedCategories.map(cat => (
                        <Badge
                          key={cat}
                          variant="secondary"
                          className="cursor-pointer hover:bg-secondary/80"
                          onClick={() => toggleCategory(cat)}
                        >
                          {cat}
                          <X className="ml-1 h-3 w-3" />
                        </Badge>
                      ))}
                      {selectedSubcategories.map(sub => (
                        <Badge
                          key={sub}
                          variant="secondary"
                          className="cursor-pointer hover:bg-secondary/80"
                          onClick={() => toggleSubcategory(sub)}
                        >
                          {sub}
                          <X className="ml-1 h-3 w-3" />
                        </Badge>
                      ))}
                      {selectedLevels.map(level => (
                        <Badge
                          key={level}
                          variant="secondary"
                          className="cursor-pointer hover:bg-secondary/80"
                          onClick={() => toggleLevel(level)}
                        >
                          {level}
                          <X className="ml-1 h-3 w-3" />
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Controls */}
              <div className="flex items-center justify-between mb-6">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  {showFilters ? 'Ocultar' : 'Mostrar'} filtros
                </Button>
                
                <div className="flex items-center gap-4 ml-auto">
                  <span className="text-sm text-[#6a6f73]">Ordenar por:</span>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relevance">Más relevantes</SelectItem>
                      <SelectItem value="rating">Mejor valorados</SelectItem>
                      <SelectItem value="reviews">Más reseñas</SelectItem>
                      <SelectItem value="price-low">Precio: menor a mayor</SelectItem>
                      <SelectItem value="price-high">Precio: mayor a menor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Courses Grid */}
              {sortedCourses.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-lg text-[#6a6f73] mb-4">
                    No se encontraron cursos con los filtros seleccionados
                  </p>
                  <Button onClick={clearAllFilters}>
                    Limpiar filtros
                  </Button>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {sortedCourses.map((course) => (
                    <Link key={course.id} to={`/lesson/${course.id}`}>
                      <Card className="group cursor-pointer border hover:shadow-lg transition-all duration-300">
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
                        <div className="flex flex-wrap gap-1 pt-2">
                          <Badge variant="outline" className="text-xs">
                            {course.level}
                          </Badge>
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
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DashboardCourses;

