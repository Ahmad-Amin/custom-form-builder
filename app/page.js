import Image from "next/image";
import MainTopSection from "./components/MainTopSection";
import FeatureSection from "./components/FeatureSection";
import FeatureDetails from "./components/FeatureDetails";

export default function Home() {
  return (
    <>
      <MainTopSection />
      <FeatureSection />
      <FeatureDetails />
    </>
  );
}
