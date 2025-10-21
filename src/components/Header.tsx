import { Search, ShoppingCart, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="border-b bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 mr-4">
            <div className="text-2xl font-bold text-primary">LearnHub</div>
          </a>

          {/* Navigation */}
          <button className="text-foreground hover:text-primary transition-colors font-medium">
            Explorar
          </button>

          {/* Search */}
          <div className="flex-1 max-w-2xl relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar cualquier cosa"
              className="w-full pl-10 bg-background border-border"
            />
          </div>

          {/* Right Navigation */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" className="hidden md:inline-flex">
              Planes y Precios
            </Button>
            <Button variant="ghost" className="hidden md:inline-flex">
              LearnHub Business
            </Button>
            <Button variant="ghost" className="hidden md:inline-flex">
              Enseña en LearnHub
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="outline">Iniciar sesión</Button>
            <Button className="bg-primary hover:bg-primary/90">Registrarse</Button>
            <Button variant="ghost" size="icon">
              <Globe className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
