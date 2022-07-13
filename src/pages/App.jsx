import Footer from "../components/Footer";
import Header from "../components/Header";
import SectionBenefits from "../components/SectionBenefits";
import SectionCTA from "../components/SectionCTA";
import DemoSection from "../components/SectionDemo";
import Integration from "../components/SectionIntegration";
import SectionList from "../components/SectionList";

function App() {
  return (
    <>
      <Header />
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
