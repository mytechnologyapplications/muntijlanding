import { FooterLinkProps } from "@/types/footer";
import DownloadApp from "./DownloadApp";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";
import { Button } from "./ui/button";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

function FooterLinks({ title, links }: Readonly<FooterLinkProps>) {
  return (
    <div className="flex flex-col items-start gap-4 md:mt-12">
      <h4 className="font-bold relative before:content-[''] before:absolute before:-bottom-1 before:right-0 before:w-4/5 before:h-[2px] before:bg-white">
        {title}
      </h4>
      {links.map(({ link, icon, title }) => (
        <Button
          asChild
          size={"sm"}
          key={link}
          variant={"link"}
          className="before:bg-white text-white"
        >
          <Link href={link} className="flex items-center gap-2">
            {icon && <span className="size-5">{icon}</span>}
            <span dir={icon ? "ltr" : "rtl"}>{title}</span>
          </Link>
        </Button>
      ))}
    </div>
  );
}

export default function Footer() {
  const footerSections: FooterLinkProps[] = [
    {
      title: "تعرف علينا",
      links: [
        { link: "about", title: "عن منتج" },
        { link: "contact", title: "تواصل معنا" },
        { link: "privacy-policy", title: "سياسة الخصوصية" },
        { link: "terms", title: "الشروط والأحكام" },
      ],
    },
    {
      title: "تواصل معنا",
      links: [
        {
          link: "+91 85648 85496",
          icon: <Phone className="file-white" />,
          title: "+91 85648 85496",
        },
        {
          link: "Muntij@gmail.com",
          icon: <Mail className="file-white" />,
          title: "Muntij@gmail.com",
        },
      ],
    },
  ];

  return (
    <footer className="bg-primary text-white p-container">
      <div className="grid md:grid-cols-4 gap-8">
        <div className="flex flex-col items-start gap-4">
          <Logo darkMode width={100} height={100} />
          <p>مُنْتِج هو منصة إلكترونية للتسوق والتوصيل، حيث يمكنك:</p>
          <ul>
            <li className="list-disc list-inside mb-2">
              اكتشاف عروض مميزة على الطعام، الأزياء، العطور، الشموع، والهدايا
            </li>
            <li className="list-disc list-inside mb-2">
              تصفح منتجات مصنوعة يدويًا ومميزة
            </li>
            <li className="list-disc list-inside mb-2">
              الاستمتاع بـ توصيل سريع وآمن إلى باب منزلك
            </li>
            <li className="list-disc list-inside mb-2">
              الاستفادة من خصومات وعروض أسبوعية
            </li>
          </ul>
          <SocialLinks />
        </div>

        {footerSections.map(({ title, links }) => (
          <FooterLinks key={title} title={title} links={links} />
        ))}

        <DownloadApp
          className="md:mt-12"
          btnClassName="justify-start p-0 shadow-none"
        />
      </div>

      {/* Copyright */}
      <div className="border-t border-white py-6 mt-3 text-center text-sm text-white">
        جميع الحقوق محفوظة © {new Date().getFullYear()} منتج - تطوير بواسطة{" "}
        <a
          href="https://www.nitg-eg.com/"
          target="_blank"
          className="underline"
        >
          NIT
        </a>
      </div>
    </footer>
  );
}
