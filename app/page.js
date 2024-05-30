import Image from "next/image";
import MainTopSection from "./components/MainTopSection";
import FeatureSection from "./components/FeatureSection";
import FeatureDetails from "./components/FeatureDetails";
import Plans from "./components/Plans";
import Testimonials from "./components/Testimonials";
import FooterSection from "./components/FooterSection";
import Header from "./components/Header";
import StepsSections from "./components/StepsSections";

export default function Home() {
  return (
    <>
      <Header />
      <MainTopSection />
      <FeatureSection />
      <FeatureDetails />
      <Plans />
      <Testimonials />
      {/* <StepsSections /> */}
      <FooterSection />
    </>
  );
}
