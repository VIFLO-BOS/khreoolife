import Image from "next/image";

interface SiteImageProps {
  alt: string;
  className?: string;
  objectPosition?: string;
  priority?: boolean;
  sizes: string;
  src: string;
}

export function SiteImage({
  alt,
  className,
  objectPosition,
  priority = false,
  sizes,
  src,
}: SiteImageProps) {
  return (
    <Image
      fill
      alt={alt}
      className={className}
      priority={priority}
      sizes={sizes}
      src={src}
      style={objectPosition ? { objectPosition } : undefined}
    />
  );
}
