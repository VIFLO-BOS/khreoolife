interface BrandMarkProps {
  className?: string;
}

export function BrandMark({ className = "" }: BrandMarkProps) {
  return (
    <span
      className={`relative inline-block size-[31px] shrink-0 ${className}`.trim()}
      aria-hidden="true"
    >
      <span className="absolute -top-1.5 left-px text-[21px] leading-normal font-black tracking-[-3px]">
        ee
      </span>
      <span className="absolute bottom-0 left-[7px] h-2.5 w-[18px] rounded-b-[20px] border-4 border-current border-t-0" />
    </span>
  );
}

interface BrandLogoProps {
  className?: string;
}

export function BrandLogo({ className = "" }: BrandLogoProps) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 text-[27px] leading-none font-black max-[760px]:text-[21px] ${className}`.trim()}
    >
      <BrandMark />
      <span>Khreeolife</span>
    </span>
  );
}
