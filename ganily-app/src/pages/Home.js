import AboutProductsSection from "../components/Home/AboutProductsSection";
import AllergenFreeSection from "../components/Home/AllergenFreeSection";
import HeroSection from "../components/Home/HeroSection";
import HomeBackground from "../components/Home/HomeBackground";

const HomePage = () => {
  return (
    <main>
      <HomeBackground />
      <HeroSection />
      <AboutProductsSection />
      <AllergenFreeSection />
    </main>
  );
};

export default HomePage;
