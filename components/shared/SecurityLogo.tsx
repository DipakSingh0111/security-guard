import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  isDark?: boolean;
}

export default function SecurityLogo({ className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Shield Security - Home"
      className={`relative inline-flex items-center transition-opacity hover:opacity-95 ${className}`}
    >
      <div className="relative h-12 w-52 sm:h-14 sm:w-64 md:h-16 md:w-72 lg:h-[4.25rem] lg:w-80">
        <Image
          src="/logo-image.png"
          alt="Shield Security - Premier Guard Force"
          fill
          priority
          quality={100}
          unoptimized
          sizes="(max-width: 640px) 240px, 400px"
          className="object-contain object-left"
        />
      </div>
    </Link>
  );
}
