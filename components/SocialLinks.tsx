import {
  InstagramIcon,
  FacebookIcon,
  YouTubeIcon,
  LinkedInIcon,
  XIcon,
} from "./Icons";
import clsx from "clsx";

const socialLinks = [
  {
    icon: InstagramIcon,
    href: "https://www.instagram.com/",
    label: "Instagram",
  },
  // {
  //   icon: SnapchatIcon,
  //   href: "https://www.snapchat.com/",
  //   label: "Snapchat",
  // },
  {
    icon: FacebookIcon,
    href: "https://www.facebook.com/",
    label: "Facebook",
  },
  // {
  //   icon: TikTokIcon,
  //   href: "https://www.tiktok.com/",
  //   label: "TikTok",
  // },
  {
    icon: XIcon,
    href: "https://x.com/",
    label: "X",
  },
  {
    icon: YouTubeIcon,
    href: "https://www.youtube.com/",
    label: "YouTube",
  },
  {
    icon: LinkedInIcon,
    href: "https://www.linkedin.com/",
    label: "LinkedIn",
  },
  // {
  //   icon: WhatsAppIcon,
  //   href: "https://www.whatsapp.com/",
  //   label: "WhatsApp",
  // },
  // {
  //   icon: GoogleIcon,
  //   href: "https://www.google.com/",
  //   label: "Google",
  // },
];

const SocialLinks = ({ darkMode = false }: { darkMode?: boolean }) => {
  return (
    <div className="flex gap-4">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          className={clsx(
            "hover:opacity-80 transition-opacity p-2 rounded-full drop-shadow-lg",
            darkMode && "bg-[#161C28] text-white",
            !darkMode && "fill-white"
          )}
          aria-label={link.label}
        >
          <link.icon
            className={clsx(darkMode && "size-5", !darkMode && "size-8")}
          />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
