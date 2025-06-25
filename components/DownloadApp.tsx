"use client";
import clsx from "clsx";
import Image from "next/image";
import { Button } from "./ui/button";

const DownloadApp = ({
  btnClassName,
  className,
}: {
  btnClassName?: string;
  className?: string;
}) => {
  return (
    <div className={clsx("flex flex-col gap-8", className)}>
      <Button
        size="lg"
        className={clsx(
          "px-10 py-3 rounded-lg font-bold text-lg",
          btnClassName
        )}
      >
        حمل التطبيق الآن
      </Button>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <a
          href="/"
          className="transition-transform hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/downloadApple.svg"
            alt="Download on App Store"
            width={173}
            height={52}
            className="h-[52px] w-auto"
          />
        </a>
        <a
          href="/"
          className="transition-transform hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/downloadAndroid.svg"
            alt="Get it on Google Play"
            width={170}
            height={50}
            className="h-[50px] w-auto"
          />
        </a>
      </div>
    </div>
  );
};

export default DownloadApp;
