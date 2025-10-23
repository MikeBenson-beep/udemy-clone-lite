import { Search, ShoppingCart, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b bg-background sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-2 sm:gap-4 lg:gap-6 h-16 sm:h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img 
              src="/didactiqo_logo.png" 
              alt="Didactiqo" 
              className="h-8 sm:h-10 w-auto"
            />
          </Link>

          {/* Categories */}
          <Link 
            to="/dashboard/courses" 
            className="text-sm font-medium text-foreground hover:text-primary transition-colors hidden lg:block whitespace-nowrap"
          >
            Explorar
          </Link>

          {/* Search - Hidden on mobile, shown on tablet+ */}
          <div className="hidden md:flex flex-1 max-w-[750px] relative">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar"
                className="w-full pl-10 sm:pl-12 pr-4 h-10 sm:h-12 rounded-full bg-background border-foreground/20 hover:border-foreground/40 focus:border-foreground/40 transition-colors text-sm"
              />
            </div>
          </div>

          {/* Right Navigation */}
          <nav className="hidden xl:flex items-center gap-1">
            <Button variant="ghost" className="text-sm font-medium text-foreground hover:text-primary whitespace-nowrap">
              Planes y precios
            </Button>
          </nav>

          {/* Auth buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2 ml-auto">
            <Button 
              variant="outline" 
              className="hidden sm:inline-flex font-bold border border-foreground text-foreground hover:bg-muted h-9 sm:h-10 px-3 sm:px-4 text-sm"
            >
              Iniciar sesión
            </Button>
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-9 sm:h-10 px-3 sm:px-4 text-sm"
            >
              Regístrate
            </Button>
            <Button variant="outline" size="icon" className="hidden sm:flex border border-foreground h-9 w-9 sm:h-10 sm:w-10">
              <Globe className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar cursos"
              className="w-full pl-10 pr-4 h-10 rounded-full bg-background border-foreground/20 text-sm"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
