import Image from "next/image";
import Link from "next/link";

const Logo = ({
  width = 80,
  height = 80,
  darkMode = false,
}: {
  width?: number;
  height?: number;
  darkMode?: boolean;
}) => {
  return (
    <Link href="/" className="hover:scale-95 transition-transform duration-300">
      <Image
        src={darkMode ? "/muntig-logo-dark.svg" : "/muntig-logo.svg"}
        alt="Muntij Logo"
        width={width}
        height={height}
        className="object-contain"
      />
    </Link>
  );
};

export default Logo;
