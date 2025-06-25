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
    <section className="p-container">
      <div className="flex-center flex-col gap-8">
        <h2 className="text-4xl md:text-6xl font-bold text-primary">
          لمحات من المعرض
        </h2>
        <p className="leading-relaxed text-2xl text-center">
          لقطات من تجربة منتج - وجبات خارجية هذها جعلبة وتوصيل باحترافية
          <br />
          شاهد ما يطلبه عملاؤنا السعداء - وجبات شهية ندايا متابعة - واصل - تم
          توصيلها بكل حب
        </p>{" "}
        <Carousel
          className="w-full max-w-5xl mx-auto"
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
                className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="aspect-square rounded-xl overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={250}
                    height={250}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 md:-left-12" />
          <CarouselNext className="right-2 md:-right-12" />
        </Carousel>
      </div>
    </section>
  );
}
