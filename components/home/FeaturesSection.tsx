import { FeatureCardProps, Feature } from "@/types/features";
import { ChickenSvg, CreditCardSvg, TruckSvg } from "../SVGs";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/card";

function FeatureCard({ icon, title, description }: Readonly<FeatureCardProps>) {
  return (
    <Card className="h-[450px] text-center">
      <CardHeader className="flex-center flex-col gap-4">
        <div className="w-full h-36 bg-opacity-20 rounded-xl flex-center">
          {icon}
        </div>
      </CardHeader>
      <CardContent className="flex-center flex-col gap-4">
        <CardTitle className="text-3xl font-bold">{title}</CardTitle>
        <CardDescription className="text-xl leading-relaxed text-white">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}

export default function FeaturesSection() {
  const features: Feature[] = [
    {
      icon: <ChickenSvg className="size-full text-white" />,
      title: "طعام شهي",
      description:
        "يرقة آخر جودة وجبة\nأطباقنا مجهزة بوقة الطبخ\nأطيام مع مذاقات مختارية\nمتطلبة وطعام حلو بالواقعة",
    },
    {
      icon: <CreditCardSvg className="size-full text-white" />,
      title: "الدفع الإلكتروني",
      description:
        "استخدم المدفوعات الرقمية\nالآمان في كل عمليات الشراء\nوتحكم آمان أكثر\nومتاحة برضة آمان",
    },
    {
      icon: <TruckSvg className="size-full text-white" />,
      title: "توصيل إلى باب المنزل",
      description:
        "طلبات آمنين عملية\nوترقة التوصيل حتى باب\nومشاهدة المعلومات عملية\nبكل يسر",
    },
  ];

  return (
    <section className="p-container">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map(({ icon, title, description }) => (
            <FeatureCard
              key={title}
              icon={icon}
              title={title}
              description={description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
