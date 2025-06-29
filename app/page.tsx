import { Metadata } from "next";
import AppDownloadSection from "../components/home/AppDownloadSection";
import FeaturesSection from "../components/home/FeaturesSection";
import GallerySection from "../components/home/GallerySection";
import HeroSection from "../components/HeroSection";

export const metadata: Metadata = {
  title: "الرئيسية",
  description:
    "اكتشف أفضل المطاعم واطلب وجبتك المفضلة من مُنْتِج. توصيل سريع وآمن لجميع أنحاء المملكة العربية السعودية.",
  openGraph: {
    title: "مُنْتِج - اطلب وجبتك المفضلة الآن",
    description: "اكتشف أفضل المطاعم واطلب وجبتك المفضلة من مُنْتِج",
    images: ["/og-home.jpg"],
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "مُنْتِج",
    description: "تطبيق توصيل الطعام الأول في المملكة العربية السعودية",
    url: "https://muntij.com",
    logo: "https://muntij.com/logo.png",
    sameAs: [
      "https://www.instagram.com/muntij",
      "https://www.facebook.com/muntij",
      "https://x.com/muntij",
    ],
    serviceType: "Food Delivery Service",
    areaServed: {
      "@type": "Country",
      name: "Saudi Arabia",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection title="مرحباً بك في منتج" showDownload />
      <FeaturesSection />
      <AppDownloadSection />
      <GallerySection />
    </>
  );
}
