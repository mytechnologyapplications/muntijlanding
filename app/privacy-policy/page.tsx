import HeroSection from "@/components/HeroSection";

export default function PrivacyPolicyPage() {
  return (
    <>
      <HeroSection title="سياسه خصوصية مُنْتِج" />

      <section className="p-container grid gap-5">
        <div className="grid gap-6 text-center">
          <h2 className="text-6xl font-bold text-primary"> سياسة الخصوصية</h2>
          <p className="text-2xl text-gray-500">
            نحن في مُنْتِج نحرص على خصوصيتك، ونسعى لحماية جميع البيانات التي
            تقدمها لنا عند استخدامك تطبيقنا أو موقعنا الإلكتروني.
          </p>
        </div>{" "}
        <div className="space-y-6">
          {/* البيانات التي نجمعها */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              🔐 البيانات التي نجمعها:
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-gray-600">
                الاسم، البريد الإلكتروني، رقم الهاتف
              </li>
              <li className="text-gray-600">العنوان لتوصيل الطلبات</li>
              <li className="text-gray-600">معلومات الدفع (عند الشراء)</li>
              <li className="text-gray-600">سجل الطلبات والتفضيلات</li>
            </ul>
          </div>

          {/* كيف نستخدم بياناتك */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              📋 كيف نستخدم بياناتك:
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-gray-600">لتوصيل طلباتك بدقة وسرعة</li>
              <li className="text-gray-600">لتحسين تجربتك وتقديم عروض مخصصة</li>
              <li className="text-gray-600">
                للتواصل معك بخصوص الطلبات أو العروض الجديدة
              </li>
            </ul>
          </div>

          {/* الحماية */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              🔒 الحماية:
            </h3>
            <p className="text-gray-600">
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
