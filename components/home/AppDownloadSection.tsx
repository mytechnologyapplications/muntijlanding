import Image from "next/image";
import { Button } from "../ui/button";

export default function AppDownloadSection() {
  return (
    <section className="p-container">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-8 items-start">
          <h2 className="text-4xl md:text-6xl font-bold text-primary">
            حمل التطبيق
          </h2>
          <h3 className="text-3xl md:text-5xl text-primary">واطلب بكل سهولة</h3>
          <div className="flex flex-col gap-4 items-start">
            <p className="leading-relaxed text-2xl">
              حمّل تطبيق مُنْتِج واستمتع بالعروض الحصرية، والطلب السريع،
              والتوصيل المباشر.
            </p>
            <p className="leading-relaxed text-2xl">
              من أشهى الوجبات إلى أجمل الهدايا والعطور والمشغولات اليدوية – كل
              شيء يصلك إلى بابك!
            </p>
          </div>
          <Button size="lg" className="text-3xl px-18 py-8">
            حمل التطبيق الآن
          </Button>
        </div>
        <div className="flex justify-center">
          <Image
            src="/phone mockup.svg"
            alt="Mobile App Screenshots"
            width={450}
            height={450}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
