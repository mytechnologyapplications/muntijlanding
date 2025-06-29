import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://muntij.com"),
  title: {
    default: "مُنْتِج - تطبيق توصيل الطعام الأول في المملكة",
    template: "%s | مُنْتِج",
  },
  description:
    "اطلب وجبتك المفضلة من مُنْتِج - أسرع تطبيق توصيل طعام في المملكة العربية السعودية. وجبات طازجة وتوصيل سريع إلى باب منزلك.",
  keywords: [
    "توصيل طعام",
    "مطاعم",
    "وجبات",
    "السعودية",
    "تطبيق طعام",
    "منتج",
    "muntij",
  ],
  authors: [{ name: "مُنْتِج" }],
  creator: "مُنْتِج",
  publisher: "مُنْتِج",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://muntij.com",
    title: "مُنْتِج - تطبيق توصيل الطعام الأول في المملكة",
    description:
      "اطلب وجبتك المفضلة من مُنْتِج - أسرع تطبيق توصيل طعام في المملكة العربية السعودية",
    siteName: "مُنْتِج",
    images: [
      {
        url: "/muntig-logo.svg",
        width: 1200,
        height: 630,
        alt: "مُنْتِج - تطبيق توصيل الطعام",
      },
      {
        url: "/favicon/icon1.png",
        width: 1200,
        height: 630,
        alt: "مُنْتِج - تطبيق توصيل الطعام",
      },
      {
        url: "/favicon/icon0.svg",
        width: 1200,
        height: 630,
        alt: "مُنْتِج - تطبيق توصيل الطعام",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "مُنْتِج - تطبيق توصيل الطعام الأول في المملكة",
    description:
      "اطلب وجبتك المفضلة من مُنْتِج - أسرع تطبيق توصيل طعام في المملكة العربية السعودية",
    images: ["/muntig-logo.svg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/icon1.png"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          sizes="16x16"
          href="/favicon/icon0.svg"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#FF6B35" />
        <meta name="apple-mobile-web-app-title" content="Muntig" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
