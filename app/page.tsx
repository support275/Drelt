import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Statement from "./components/Statement";
import ToolkitOverview from "./components/ToolkitOverview";
import KeyObjectives from "./components/KeyObjectives";
import ClassificationSection from "./components/ClassificationSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Statement />
      <ToolkitOverview />
      <KeyObjectives />
      <ClassificationSection />
      <Footer />
    </>
  );
}
