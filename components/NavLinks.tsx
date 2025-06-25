"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const links = [
    { href: "/", label: "الرئيسية" },
    { href: "/about", label: "عن منتج" },
    { href: "/contact", label: "تواصل معنا" },
  ];
  const pathname = usePathname();
  return (
    <nav className="flex items-center gap-8 text-gray-700">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={clsx(
            "hover:text-primary hover:before:scale-x-100 transition-colors relative text-lg font-semibold",
            "before:content-[''] before:absolute before:-bottom-1 before:right-0 before:w-full before:h-[2px]",
            "before:bg-primary before:scale-x-0 before:transition-transform before:duration-300 before:origin-center",
            pathname === link.href && "text-primary before:scale-x-100"
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;
