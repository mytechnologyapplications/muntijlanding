import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";

export const metadata: Metadata = {
  title: "سياسة الخصوصية",
  description:
    "تعرف على سياسة الخصوصية في مُنْتِج وكيف نحمي بياناتك الشخصية ونحافظ على خصوصيتك عند استخدام تطبيقنا.",
  openGraph: {
    title: "سياسة الخصوصية - مُنْتِج",
    description: "تعرف على سياسة الخصوصية في مُنْتِج وكيف نحمي بياناتك الشخصية",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <HeroSection title="سياسه خصوصية مُنْتِج" />

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-4xl">
        <div className="grid gap-4 sm:gap-6 text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
            سياسة الخصوصية
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            نحن في مُنْتِج نحرص على خصوصيتك، ونسعى لحماية جميع البيانات التي
            تقدمها لنا عند استخدامك تطبيقنا أو موقعنا الإلكتروني.
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
          {/* البيانات التي نجمعها */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold flex items-center gap-2 sm:gap-3">
              🔐 البيانات التي نجمعها:
            </h3>
            <ul className="list-disc pr-5 sm:pr-6 space-y-2 sm:space-y-3">
              <li className="text-gray-600 text-sm sm:text-base lg:text-lg">
                الاسم، البريد الإلكتروني، رقم الهاتف
              </li>
              <li className="text-gray-600 text-sm sm:text-base lg:text-lg">
                العنوان لتوصيل الطلبات
              </li>
              <li className="text-gray-600 text-sm sm:text-base lg:text-lg">
                معلومات الدفع (عند الشراء)
              </li>
              <li className="text-gray-600 text-sm sm:text-base lg:text-lg">
                سجل الطلبات والتفضيلات
              </li>
            </ul>
          </div>

          {/* كيف نستخدم بياناتك */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold flex items-center gap-2 sm:gap-3">
              📋 كيف نستخدم بياناتك:
            </h3>
            <ul className="list-disc pr-5 sm:pr-6 space-y-2 sm:space-y-3">
              <li className="text-gray-600 text-sm sm:text-base lg:text-lg">
                لتوصيل طلباتك بدقة وسرعة
              </li>
              <li className="text-gray-600 text-sm sm:text-base lg:text-lg">
                لتحسين تجربتك وتقديم عروض مخصصة
              </li>
              <li className="text-gray-600 text-sm sm:text-base lg:text-lg">
                للتواصل معك بخصوص الطلبات أو العروض الجديدة
              </li>
            </ul>
          </div>

          {/* الحماية */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold flex items-center gap-2 sm:gap-3">
              🔒 الحماية:
            </h3>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              نستخدم أحدث تقنيات التشفير لحماية بياناتك، ولا نقوم بمشاركة
              بياناتك مع أي طرف ثالث دون إذنك، إلا إذا كان ذلك مطلوبًا بموجب
              القانون.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
