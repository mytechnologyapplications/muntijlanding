import AppDownloadSection from "../components/home/AppDownloadSection";
import FeaturesSection from "../components/home/FeaturesSection";
import GallerySection from "../components/home/GallerySection";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection title="مرحباً بك في منتج" showDownload />
      <FeaturesSection />
      <AppDownloadSection />
      <GallerySection />
    </>
  );
}
