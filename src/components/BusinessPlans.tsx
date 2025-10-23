import { Users, CheckCircle2, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Plan Team",
    topColor: "bg-primary",
    icon: Users,
    subtitle: "Entre 2 y 50 personas: para tu equipo",
    buttonText: "Probar gratis",
    buttonVariant: "outline" as const,
    pricing: "28,00 € a month per user",
    pricingNote: "Facturación anual. Cancela cuando quieras.",
    features: [
      "Acceso a más de 13 000 cursos con valoraciones excelentes",
      "Preparación para la certificación",
      "Recomendaciones centradas en los objetivos",
      "Orientación basada en IA",
      "Análisis e informes de adopción"
    ]
  },
  {
    name: "Plan Enterprise",
    topColor: "bg-foreground",
    icon: Users,
    subtitle: "Más de 20 personas: para toda tu organización",
    buttonText: "Solicitar una demostración",
    buttonVariant: "outline" as const,
    pricing: "Ponte en contacto con el equipo de ventas para conocer los precios",
    pricingNote: "",
    features: [
      "Acceso a más de 30 000 cursos con valoraciones excelentes",
      "Preparación para la certificación",
      "Recomendaciones centradas en los objetivos",
      "Orientación basada en IA",
      "Análisis y datos avanzados",
      "Equipo dedicado de éxito del cliente",
      "Colección internacional de cursos en 15 idiomas",
      "Contenido personalizable",
      "Formación tecnológica práctica con nuestro complemento",
      "Servicios de implementación estratégica con nuestro complemento"
    ]
  },
  {
    name: "Dominio de la IA",
    topColor: "bg-foreground",
    icon: Sparkles,
    subtitle: "De los fundamentos de la IA a la transformación empresarial",
    buttonText: "Ponte en contacto con nosotros",
    buttonVariant: "outline" as const,
    pricing: "",
    pricingNote: "",
    features: []
  }
];

const BusinessPlans = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-secondary">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        <div className="mb-8 sm:mb-10 lg:mb-12 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-3">
            Grow your team's skills and your business
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Reach goals faster with one of our plans or programs. Try one free today or contact sales to learn more.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Card key={index} className="overflow-hidden border-border shadow-sm">
                <div className={`h-2 ${plan.topColor}`}></div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">
                    {plan.name}
                  </h3>
                  
                  <div className="flex items-start gap-2 mb-3 sm:mb-4">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {plan.subtitle}
                    </p>
                  </div>

                  <Button 
                    variant={plan.buttonVariant}
                    className="w-full mb-4 sm:mb-6 border border-foreground text-foreground font-bold hover:bg-secondary text-sm"
                  >
                    {plan.buttonText}
                  </Button>

                  {plan.pricing && (
                    <div className="mb-4 sm:mb-6">
                      <p className="font-bold text-sm sm:text-base text-foreground mb-1">
                        {plan.pricing}
                      </p>
                      {plan.pricingNote && (
                        <p className="text-xs text-muted-foreground">
                          {plan.pricingNote}
                        </p>
                      )}
                    </div>
                  )}

                  {plan.features.length > 0 && (
                    <ul className="space-y-2 sm:space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {plan.name === "Dominio de la IA" && (
                    <div className="space-y-4 sm:space-y-6">
                      <div>
                        <h4 className="font-bold text-sm sm:text-base text-foreground mb-2">
                          Colección de preparación para utilizar la IA
                        </h4>
                        <div className="flex items-start gap-2 mb-2">
                          <Users className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-muted-foreground">
                            Más de 100 personas
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-foreground">
                          Fomenta el dominio de la IA en toda la organización con 50 cursos seleccionados y la herramienta AI Assistant para acelerar el aprendizaje.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-bold text-sm sm:text-base text-foreground mb-2">
                          Colección de crecimiento gracias a la IA
                        </h4>
                        <div className="flex items-start gap-2 mb-2">
                          <Users className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-muted-foreground">
                            Más de 20 personas
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-foreground">
                          Escala los conocimientos técnicos y de IA con más de 800 cursos especializados y más de 30 vías de aprendizaje para puestos específicos en varios idiomas.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BusinessPlans;
