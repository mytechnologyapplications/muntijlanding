import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";

export const metadata: Metadata = {
  title: "الشروط والأحكام",
  description:
    "اطلع على شروط وأحكام استخدام تطبيق مُنْتِج لتوصيل الطعام، بما في ذلك سياسات الدفع والتوصيل والإلغاء.",
  openGraph: {
    title: "الشروط والأحكام - مُنْتِج",
    description: "اطلع على شروط وأحكام استخدام تطبيق مُنْتِج لتوصيل الطعام",
  },
};

export default function TermsPage() {
  return (
    <>
      <HeroSection title="شروط وأحكام مُنْتِج" />

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-4xl">
        <div className="grid gap-4 sm:gap-6 text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
            الشروط والأحكام
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            يرجى قراءة هذه الشروط بعناية قبل استخدام تطبيق أو موقع مُنْتِج.
          </p>
        </div>
        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
          {/* استخدام الخدمة */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold flex items-center gap-2 sm:gap-3">
              🧾 1. استخدام الخدمة:
            </h3>
            <ul className="list-disc pr-5 sm:pr-6 space-y-2 sm:space-y-3">
              <li className="text-gray-600 text-sm sm:text-base lg:text-lg">
                يحق لك استخدام خدمات &quot;مُنْتِج&quot; لطلب المنتجات والعروض
                المتوفرة عبر التطبيق أو الموقع.
              </li>
              <li className="text-gray-600 text-sm sm:text-base lg:text-lg">
                يجب أن تكون المعلومات التي تقدمها دقيقة ومحدثة.
              </li>
            </ul>
          </div>

          {/* الدفع */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold flex items-center gap-2 sm:gap-3">
              💳 2. الدفع:
            </h3>
            <ul className="list-disc pr-5 sm:pr-6 space-y-2 sm:space-y-3">
              <li className="text-gray-600 text-sm sm:text-base lg:text-lg">
                يتم الدفع إلكترونيًا من خلال وسائل الدفع المعتمدة.
              </li>
              <li className="text-gray-600 text-sm sm:text-base lg:text-lg">
                جميع الأسعار تشمل ضريبة القيمة المضافة إن وُجدت.
              </li>
            </ul>
          </div>

          {/* التوصيل */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold flex items-center gap-2 sm:gap-3">
              📦 3. التوصيل:
            </h3>
            <ul className="list-disc pr-5 sm:pr-6 space-y-2 sm:space-y-3">
              <li className="text-gray-600 text-sm sm:text-base lg:text-lg">
                نلتزم بتوصيل الطلبات خلال المدة المحددة قدر الإمكان.
              </li>
              <li className="text-gray-600 text-sm sm:text-base lg:text-lg">
                في حال وجود تأخير أو مشكلة بالتوصيل، سيتم التواصل معك مباشرة.
              </li>
            </ul>
          </div>

          {/* سياسة الإلغاء والاسترجاع */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold flex items-center gap-2 sm:gap-3">
              ❌ 4. سياسة الإلغاء والاسترجاع:
            </h3>
            <ul className="list-disc pr-5 sm:pr-6 space-y-2 sm:space-y-3">
              <li className="text-gray-600 text-sm sm:text-base lg:text-lg">
                يمكن إلغاء الطلب قبل إعداده.
              </li>
              <li className="text-gray-600 text-sm sm:text-base lg:text-lg">
                لا يمكن استرجاع الطلبات الغذائية بعد التحضير، إلا في حال وجود
                خطأ أو ضرر بالطلب.
              </li>
            </ul>
          </div>

          {/* المسؤولية */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold flex items-center gap-2 sm:gap-3">
              ⚖️ 5. المسؤولية:
            </h3>
            <ul className="list-disc pr-5 sm:pr-6 space-y-2 sm:space-y-3">
              <li className="text-gray-600 text-sm sm:text-base lg:text-lg">
                نحن غير مسؤولين عن أي سوء استخدام للحساب من قبل المستخدم.
              </li>
              <li className="text-gray-600 text-sm sm:text-base lg:text-lg">
                نحتفظ بالحق في تعديل أو تحديث هذه الشروط في أي وقت.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
