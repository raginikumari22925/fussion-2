import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import WhyUsSection from '../components/sections/WhyUsSection';
import ProcessSection from '../components/sections/ProcessSection';
import TechStackSection from '../components/sections/TechStackSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import FAQSection from '../components/sections/FAQSection';
import ContactSection from '../components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <ProcessSection />
      <TechStackSection />
      <PortfolioSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
