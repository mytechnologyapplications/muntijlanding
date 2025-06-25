"use client";
import { Button } from "../ui/button";

const AboutUs = () => {
  const features = [
    "تنوّع كبير في المنتجات",
    "خيارات محلية ومصنوعة يدويًا",
    "خصومات حصرية من خلال التطبيق",
    "توصيل مجاني على الطلبات الكبيرة",
    "مع مُنْتِج، هتوفر كتير !",
  ];
  return (
    <>
      <section className="p-container min-h-[250px] flex-center flex-col gap-5">
        <h2 className="text-6xl font-bold text-primary">من نحن</h2>
        <p className="text-2xl flex-center w-4/5 text-gray-600 text-balance">
          نؤمن في مُنْتِج بأن كل عملية شراء يجب أن تكون مجزية. لقد صممنا منصتنا
          لمنحك المزيد من القيمة مقابل إنفاقك، من خلال تقديم نقاط استرداد نقدي
          على كل معاملة. سواء كنت تتسوق من علامتك التجارية المفضلة أو ترسل
          المكافآت لأصدقائك، نجعل التوفير سهلاً وممتعًا. مع مُنْتِج، كلما تسوقت
          أكثر، زادت أرباحك! عند جمع النقاط، يمكنك استبدالها بخصومات، استخدامها
          في مشترياتك المستقبلية، أو حتى إرسالها كهدية للآخرين. بالإضافة إلى
          ذلك، يضمن نظام العضوية المتدرج حصول العملاء المخلصين على مزايا أكبر
          بمرور الوقت.
        </p>
      </section>
      <section className="p-container min-h-[250px]">
        <Button size={"lg"} className="mb-4 px-16 py-8 text-3xl font-bold">
          ليه تختار منتج؟
        </Button>

        <ul className="space-y-4 mb-4">
          {features.map((feature) => (
            <li key={feature} className="font-semibold text-black">
              {feature}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default AboutUs;
