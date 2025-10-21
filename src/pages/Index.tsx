import PromoBanner from "@/components/PromoBanner";
import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import Categories from "@/components/Categories";
import FeaturedCourses from "@/components/FeaturedCourses";
import TrustIndicators from "@/components/TrustIndicators";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PromoBanner />
      <Header />
      <main>
        <HeroCarousel />
        <TrustIndicators />
        <Categories />
        <FeaturedCourses />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
