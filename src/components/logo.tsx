import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
  href?: string;
}

export default function Logo({
  width = 40,
  height = 40,
  className = '',
  href = '/'
}: LogoProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center transition-opacity hover:opacity-80 ${className}`}
      aria-label="ZielHub"
    >
      <Image
        src="/chip.webp"
        alt="ZielHub"
        width={width}
        height={height}
        priority
        className="object-contain"
        style={{ maxWidth: `${width}px`, maxHeight: `${height}px` }}
      />
    </Link>
  );
}
