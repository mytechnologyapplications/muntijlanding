import AboutUs from "@/components/about-us/AboutUs";
import OurValues from "@/components/about-us/OurValues";
import HeroSection from "@/components/HeroSection";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection title="تعرّف على مُنْتِج" />
      {/* About Us Section */}
      <AboutUs />
      {/* Why Us Section */}
      {/* Our Values Section */}
      <OurValues />
    </>
  );
}
