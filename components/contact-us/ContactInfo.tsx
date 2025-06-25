import { PhoneIcon, MailIcon, MapPinIcon } from "lucide-react";
import SocialLinks from "../SocialLinks";
import { WhatsAppIcon } from "../Icons";

const ContactInfo = () => {
  return (
    <div className="space-y-8 flex-1 mx-auto">
      <div>
        <h2 className="text-2xl font-bold text-[#02161E] mb-2">تواصل معنا</h2>
        <p className="text-gray-600">
          نحن هنا لمساعدتك! سواء كان لديك أسئلة حول تطبيقنا، أو تحتاج إلى دعم في
          اي مشكلة تواجهك، أو ترغب في معرفة المزيد عن السباقات القادمة، فإن
          فريقنا جاهز لمساعدتك.
        </p>
      </div>

      <p className="text-gray-600">
        راسلنا عبر البريد الإلكتروني أو اتصل بنا أو قم بتعبئة النموذج لمعرفة كيف
        يمكننا حل مشكلتك في المراسلة.
      </p>

      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <PhoneIcon className="text-primary size-5" />
          <a
            href="tel:+966543688054"
            target="_blank"
            dir="ltr"
            className="text-gray-600 hover:text-primary"
          >
            201091568240
          </a>{" "}
          -{" "}
          <a
            href="tel:+966543688054"
            target="_blank"
            dir="ltr"
            className="text-gray-600 hover:text-primary"
          >
            201149830855
          </a>
        </div>

        <div className="flex items-center gap-4">
          <MailIcon className="text-primary size-5" />
          <a
            href="mailto:mostasmerapp@gmail.com"
            target="_blank"
            className="text-gray-600 hover:text-primary"
          >
            Muntij@email.com{" "}
          </a>
        </div>

        <div className="flex items-center gap-4">
          <MapPinIcon className="text-primary size-5" />
          <p className="text-gray-600 capitalize">
            168شارع الملك فيصل , الجيزة , مصر
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <WhatsAppIcon className="text-primary size-5" />
        <a
          href="https://wa.me/201091568240"
          target="_blank"
          rel="noopener noreferrer"
          dir="ltr"
          className="text-gray-600 hover:text-primary"
        >
          201091568240
        </a>{" "}
        -{" "}
        <a
          href="https://wa.me/201149830855"
          target="_blank"
          rel="noopener noreferrer"
          dir="ltr"
          className="text-gray-600 hover:text-primary"
        >
          201149830855
        </a>
      </div>

      <SocialLinks darkMode  />
    </div>
  );
};

export default ContactInfo;
