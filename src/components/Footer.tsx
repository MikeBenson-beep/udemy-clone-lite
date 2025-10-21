import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const sections = [
    {
      title: "LearnHub Business",
      links: ["Enseña en LearnHub", "Obtén la app", "Acerca de nosotros", "Contáctanos"]
    },
    {
      title: "Carrera",
      links: ["Oportunidades", "Blog", "Centro de ayuda", "Afiliados"]
    },
    {
      title: "Términos",
      links: ["Política de privacidad", "Términos", "Configuración de cookies"]
    }
  ];

  return (
    <footer className="bg-foreground text-background py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {sections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h4 className="font-semibold">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a 
                      href="#" 
                      className="text-sm text-background/70 hover:text-background transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="space-y-4">
            <Button 
              variant="outline" 
              className="w-full bg-transparent border-background/20 text-background hover:bg-background/10"
            >
              <Globe className="h-4 w-4 mr-2" />
              Español
            </Button>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-background/20 gap-4">
          <div className="text-2xl font-bold">LearnHub</div>
          <div className="text-sm text-background/70">
            © 2024 LearnHub, Inc.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
