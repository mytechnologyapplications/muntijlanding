import HeroSection from "@/components/HeroSection";

export default function TermsPage() {
  return (
    <>
      <HeroSection title="شروط وأحكام مُنْتِج" />

      <section className="p-container grid gap-5">
        {" "}
        <div className="grid gap-6 text-center">
          <h2 className="text-6xl font-bold text-primary">الشروط والأحكام</h2>
          <p className="text-2xl text-gray-500">
            يرجى قراءة هذه الشروط بعناية قبل استخدام تطبيق أو موقع مُنْتِج.
          </p>
        </div>
        <div className="space-y-6">
          {/* استخدام الخدمة */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              🧾 1. استخدام الخدمة:
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-gray-600">
                يحق لك استخدام خدمات "مُنْتِج" لطلب المنتجات والعروض المتوفرة
                عبر التطبيق أو الموقع.
              </li>
              <li className="text-gray-600">
                يجب أن تكون المعلومات التي تقدمها دقيقة ومحدثة.
              </li>
            </ul>
          </div>

          {/* الدفع */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              💳 2. الدفع:
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-gray-600">
                يتم الدفع إلكترونيًا من خلال وسائل الدفع المعتمدة.
              </li>
              <li className="text-gray-600">
                جميع الأسعار تشمل ضريبة القيمة المضافة إن وُجدت.
              </li>
            </ul>
          </div>

          {/* التوصيل */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              📦 3. التوصيل:
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-gray-600">
                نلتزم بتوصيل الطلبات خلال المدة المحددة قدر الإمكان.
              </li>
              <li className="text-gray-600">
                في حال وجود تأخير أو مشكلة بالتوصيل، سيتم التواصل معك مباشرة.
              </li>
            </ul>
          </div>

          {/* سياسة الإلغاء والاسترجاع */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              ❌ 4. سياسة الإلغاء والاسترجاع:
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-gray-600">يمكن إلغاء الطلب قبل إعداده.</li>
              <li className="text-gray-600">
                لا يمكن استرجاع الطلبات الغذائية بعد التحضير، إلا في حال وجود
                خطأ أو ضرر بالطلب.
              </li>
            </ul>
          </div>

          {/* المسؤولية */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              ⚖️ 5. المسؤولية:
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-gray-600">
                نحن غير مسؤولين عن أي سوء استخدام للحساب من قبل المستخدم.
              </li>
              <li className="text-gray-600">
                نحتفظ بالحق في تعديل أو تحديث هذه الشروط في أي وقت.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
