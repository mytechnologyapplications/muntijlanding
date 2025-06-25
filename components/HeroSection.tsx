import Image from "next/image";
import DownloadApp from "./DownloadApp";

export default function HeroSection({
  title,
  showDownload,
}: Readonly<{ title: string; showDownload?: boolean }>) {
  return (
    <section
      className="min-h-[600px] relative text-white flex-center p-container mb-44"
      // style={{
      //   background:
      //     "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0) 0%, rgba(9, 18, 25, 0.2) 73.44%)",
      // }}
    >
      <div className="absolute inset-0 size-full">
        <Image src="/hero.svg" alt="hero" fill className="!w-auto !h-auto" />
      </div>

      {/* Background food images */}
      {/* <div className="relative bg-accent flex items-center justify-center">
        <div className="absolute inset-0 size-full">
          <Image src="/pancake.svg" alt="Pancake" fill className="object-cover" />
        </div>
        <div className="absolute -left-30 md:left-10 top-0">
          <Image
            src="/pizza.svg"
            alt="Pizza"
            width={350}
            height={350}
            className="object-contain"
          />
        </div>
        <div className="absolute -right-30 md:right-10 top-0">
          <Image
            src="/pizza.svg"
            alt="Pizza"
            width={350}
            height={350}
            className="object-contain -scale-x-100"
          />
        </div>
        <div className="absolute -left-30 md:left-10 -bottom-12">
          <Image
            src="/burrito.svg"
            alt="burrito"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
        <div className="absolute -right-30 md:right-10 -bottom-14">
          <Image
            src="/tacos.svg"
            alt="Tacos"
            width={450}
            height={450}
            className="object-contain"
          />
        </div>
      </div> */}

      {/* Central content */}
      <div className="flex-center z-10 text-background flex-col gap-3">
        <div className="text-6xl  md:text-7xl">🍽️</div>
        <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
        <p className="text-xl">وجبتك المفضلة لتطعام الوجبات والمزيد</p>
        <p className="text-lg">الآن ترجيعك من خلال التطبيق</p>

        {showDownload && (
          <DownloadApp btnClassName="text-primary bg-background hover:bg-background hover:text-primary-hover" />
        )}
      </div>
    </section>
  );
}
