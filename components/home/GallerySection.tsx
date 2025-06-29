import Image from "next/image";
import { GalleryImage } from "@/types/gallery";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function GallerySection() {
  const galleryImages: GalleryImage[] = [
    { src: "/Boiled spaghetti pasta.png", alt: "Food Gallery 1" },
    { src: "/chips and popcorn.png", alt: "Food Gallery 2" },
    { src: "/Delicious red source noodl....png", alt: "Food Gallery 3" },
    { src: "/Sweet birthday cake sugar sheep.png", alt: "Food Gallery 4" },
    { src: "/chips and popcorn.png", alt: "Food Gallery 5" },
    { src: "/Boiled spaghetti pasta.png", alt: "Food Gallery 6" },
    { src: "/Delicious red source noodl....png", alt: "Food Gallery 7" },
    { src: "/Sweet birthday cake sugar sheep.png", alt: "Food Gallery 8" },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8 lg:space-y-10 mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary">
            لمحات من المعرض
          </h2>
          <p className="leading-relaxed text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl">
            لقطات من تجربة منتج - وجبات خارجية هذها جعلبة وتوصيل باحترافية
            <br className="hidden sm:block" />
            شاهد ما يطلبه عملاؤنا السعداء - وجبات شهية ندايا متابعة - واصل - تم
            توصيلها بكل حب
          </p>
        </div>

        <Carousel
          className="w-[90%] max-w-6xl mx-auto"
          opts={{
            align: "start",
            loop: true,
          }}
          dir="ltr"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {galleryImages.map((image, index) => (
              <CarouselItem
                key={`${image.src}-${index}`}
                className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 lg:basis-1/4"
              >
                <div className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src={image.src}
                    alt={`معرض الطعام - ${image.alt}`}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 md:-left-12 bg-white/80 hover:bg-white border-2" />
          <CarouselNext className="right-2 md:-right-12 bg-white/80 hover:bg-white border-2" />
        </Carousel>
      </div>
    </section>
  );
}
