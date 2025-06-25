"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const OurValues = () => {
  const values = [
    {
      title: "رسالتنا",
      icon: "/Letter_free_vector_icons_designed_by_Freepik-removebg-preview.svg",
      description:
        " تنوّع كبير في المنتجات خيارات محلية ومصنوعة يدويًا خصومات حصرية من خلال التطبيق !",
    },
    {
      title: "رؤيتنا",
      icon: "/Eye_Icon-removebg-preview.svg",
      description:
        " تنوّع كبير في المنتجات خيارات محلية ومصنوعة يدويًا خصومات حصرية من خلال التطبيق !",
    },
    {
      title: "هدفنا",
      icon: "/target-2558687_640-removebg-preview.svg",
      description:
        " تنوّع كبير في المنتجات خيارات محلية ومصنوعة يدويًا خصومات حصرية من خلال التطبيق !",
    },
  ];

  return (
    <section className="p-container min-h-[250px]">
      <div className="grid md:grid-cols-3 gap-8">
        {values.map((value) => (
          <Card
            key={value.title}
            style={{
              background: "linear-gradient(150.76deg, #BB3E3E 24.63%, #000000 158.87%)",
            }}
            className="p-8 rounded-lg text-center backdrop-blur-sm h-[450px]"
          >
            <CardHeader className="flex-center flex-col gap-4">
              <div className="relative h-32 w-32 mx-auto mb-6">
                <Image
                  src={value.icon}
                  alt={value.title}
                  fill
                  className="object-contain"
                />
              </div>
            </CardHeader>
            <CardContent className="flex-center flex-col gap-4">
              <CardTitle className="text-3xl font-bold">
                {value.title}
              </CardTitle>
              <CardDescription className="text-xl leading-relaxed text-white">
                {value.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center mt-12">
        <h2 className="text-2xl font-bold mb-6">
          انضم إلينا اليوم وابدأ في تحويل تسوقك إلى استثمار ذكي!
        </h2>
      </div>
    </section>
  );
};

export default OurValues;
