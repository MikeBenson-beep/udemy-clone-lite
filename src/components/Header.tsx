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
            <svg width="91" height="34" viewBox="0 0 91 34" fill="none" className="text-foreground">
              <path d="M14.05 8.112L7.024 4.056 0 8.112V4.056L7.024 0l7.026 4.056v4.056z" fill="#A435F0"/>
              <path d="M0 11.518h3.68v8.941c0 2.31 1.725 3.436 3.345 3.436 1.634 0 3.346-1.156 3.346-3.467v-8.91h3.68v9.154c0 2.128-.669 3.77-2.007 4.896-1.339 1.125-3.011 1.673-5.05 1.673-2.037 0-3.71-.547-5.017-1.673C.669 24.443 0 22.862 0 20.733v-9.215zM45.97 22.102c-1.507 2.314-3.62 3.345-6.325 3.345-3.087 0-5.715-1.307-7.876-3.924-2.161-2.617-3.242-5.74-3.242-9.368 0-3.628 1.08-6.75 3.242-9.368C33.93.17 36.558-1.136 39.645-1.136c2.705 0 4.818 1.046 6.325 3.345V.195h3.68V25.41h-3.68v-3.307zM32.207 12.155c0 2.548.725 4.694 2.176 6.436 1.451 1.743 3.24 2.614 5.368 2.614 2.128 0 3.917-.87 5.368-2.614 1.451-1.742 2.177-3.888 2.177-6.436 0-2.548-.726-4.694-2.177-6.436-1.451-1.743-3.24-2.614-5.368-2.614-2.127 0-3.917.87-5.368 2.614-1.451 1.742-2.176 3.888-2.176 6.436zM60.631 11.518h3.68v13.892h-3.68v-2.87c-1.477 2.127-3.436 3.345-5.876 3.345-2.44 0-4.445-.79-6.014-2.37-1.567-1.58-2.351-3.645-2.351-6.197V11.52h3.68v5.797c0 1.712.457 3.072 1.37 4.082.915 1.009 2.145 1.514 3.69 1.514 1.545 0 2.806-.49 3.783-1.468.977-.978 1.466-2.431 1.466-4.36v-5.565h.252zM83.921 11.518v13.892h-3.68v-2.870c-1.476 2.127-3.435 3.345-5.875 3.345s-4.445-.79-6.014-2.37c-1.568-1.58-2.352-3.645-2.352-6.197V11.52h3.68v5.797c0 1.712.458 3.072 1.371 4.082.914 1.009 2.145 1.514 3.69 1.514 1.545 0 2.805-.49 3.782-1.468.977-.978 1.467-2.431 1.467-4.36v-5.565h3.93zM91 11.518h3.68v13.892H91v-2.87c-1.477 2.127-3.436 3.345-5.876 3.345-2.44 0-4.445-.79-6.014-2.37-1.567-1.58-2.351-3.645-2.351-6.197V11.52h3.68v5.797c0 1.712.457 3.072 1.37 4.082.915 1.009 2.145 1.514 3.69 1.514 1.545 0 2.806-.49 3.783-1.468.977-.978 1.466-2.431 1.466-4.36v-5.565H91z" fill="currentColor"/>
            </svg>
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
            <Button variant="ghost" className="hidden xl:inline-flex text-sm font-medium text-foreground hover:text-primary">
              Udemy Business
            </Button>
            <Button variant="ghost" className="hidden xl:inline-flex text-sm font-medium text-foreground hover:text-primary">
              Enseña en Udemy
            </Button>
            <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </nav>

          {/* Auth buttons */}
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              className="font-bold border-2 border-foreground text-foreground hover:bg-muted h-10 px-4"
            >
              Iniciar sesión
            </Button>
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-10 px-4"
            >
              Regístrate
            </Button>
            <Button variant="outline" size="icon" className="border-2 border-foreground">
              <Globe className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
