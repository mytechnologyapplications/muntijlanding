import Image from "next/image";
import DownloadApp from "./DownloadApp";

export default function HeroSection({
  title,
  showDownload,
}: Readonly<{ title: string; showDownload?: boolean }>) {
  return (
    <section className="min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] relative text-white flex items-center justify-center px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24 lg:mb-44">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/hero.svg"
          alt="خلفية مُنْتِج - تطبيق توصيل الطعام"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Central content */}
      <div className="flex items-center justify-center z-10 text-background flex-col gap-3 sm:gap-4 lg:gap-6 text-center max-w-4xl mx-auto">
        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">🍽️</div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
          {title}
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center max-w-2xl">
          وجبتك المفضلة لطعام الوجبات والمزيد
        </p>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center">
          الآن أصبح بإمكانك الطلب من خلال التطبيق
        </p>

        {showDownload && (
          <div className="mt-4 sm:mt-6 lg:mt-8">
            <DownloadApp btnClassName="text-primary bg-background hover:bg-background hover:text-primary-hover px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base" />
          </div>
        )}
      </div>
    </section>
  );
}
