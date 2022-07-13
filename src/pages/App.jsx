import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import SectionBenefits from "../components/SectionBenefits";
import SectionCTA from "../components/SectionCTA";
import DemoSection from "../components/SectionDemo";
import Integration from "../components/SectionIntegration";
import SectionList from "../components/SectionList";
import Together from "../components/SectionTogether";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Together />
      <SectionList />
      <SectionBenefits />
      <SectionCTA />
      <DemoSection />
      <Integration />
      <Footer />
    </>
  );
}

export default App;
