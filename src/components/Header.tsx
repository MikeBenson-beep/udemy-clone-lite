import { Search, ShoppingCart, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="border-b bg-background sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex items-center gap-6 h-[72px]">
          {/* Logo */}
          <a href="/" className="flex items-center">
            LOGO HERE
          </a>

          {/* Categories */}
          <button className="text-sm font-medium text-foreground hover:text-primary transition-colors hidden lg:block">
            Explorar
          </button>

          {/* Search */}
          <div className="flex-1 max-w-[750px] relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar cualquier cosa"
                className="w-full pl-12 pr-4 h-12 rounded-full bg-background border-foreground/20 hover:border-foreground/40 focus:border-foreground/40 transition-colors"
              />
            </div>
          </div>

          {/* Right Navigation */}
          <nav className="flex items-center gap-1">
            <Button variant="ghost" className="hidden lg:inline-flex text-sm font-medium text-foreground hover:text-primary">
              Planes y precios
            </Button>
          </nav>

          {/* Auth buttons */}
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              className="font-bold border border-foreground text-foreground hover:bg-muted h-10 px-4"
            >
              Iniciar sesión
            </Button>
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-10 px-4"
            >
              Regístrate
            </Button>
            <Button variant="outline" size="icon" className="border border-foreground">
              <Globe className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
