import PromoBanner from "@/components/PromoBanner";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import SkillsSection from "@/components/SkillsSection";
import PopularSkills from "@/components/PopularSkills";
import BusinessPlans from "@/components/BusinessPlans";
import FeaturedCourses from "@/components/FeaturedCourses";
import TrustIndicators from "@/components/TrustIndicators";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PromoBanner />
      <Header />
      <main>
        <Hero />
        <TrustIndicators />
        <Categories />
        <SkillsSection />
        <PopularSkills />
        <BusinessPlans />
        <FeaturedCourses />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
