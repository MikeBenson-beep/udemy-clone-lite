const TrustIndicators = () => {
  const stats = [
    { number: "73M+", label: "Estudiantes" },
    { number: "210,000+", label: "Cursos" },
    { number: "75+", label: "Idiomas" },
    { number: "1B+", label: "Inscripciones" }
  ];

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-foreground">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
