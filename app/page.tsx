// app/page.tsx
import AccountantVoices from "./components/AccountantVoices";
import CoinMarquee from "./components/CoinMarquee";
import CtaSection from "./components/CtaSection";
import FAQSection from "./components/FAQSection";
import HeroSection from "./components/HeroSection";
import LatestNews from "./components/LatestNews";
import TestimonialsSection from "./components/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CoinMarquee />
      <TestimonialsSection />
      <FAQSection />
      <AccountantVoices />
      <LatestNews />
      <CtaSection />
    </>
  );
}
