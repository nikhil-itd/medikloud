import Navbar from "@/components/navbar";
import Mission from "@/components/mission";
import Problem from "@/components/problem";
import Solution from "@/components/solution";
import HowItWorks from "@/components/how-it-works";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import ScrollAnimationProvider from "@/components/custom/scroll-animation-provider";
import KioskBox from "@/components/kiosk-box";
import Features from "@/components/features";
import StatsMarquee from "@/components/stats";

export default function Home() {
  return (
    <ScrollAnimationProvider >
      <Navbar />
      <KioskBox />
      {/* <Hero /> */}
      <StatsMarquee />
      <Mission />
      <Problem />
      <Solution />
      <Features />
      <HowItWorks />
      <Contact />
      <Footer />
    
    </ScrollAnimationProvider>
  );
}
