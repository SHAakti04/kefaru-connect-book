import mascotAsset from "@/assets/kefaru-mascot.png.asset.json";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  alt?: string;
  priority?: boolean;
}

/**
 * Brand mascot. The asset lives on the Kefaru CDN; swapping in an updated
 * render only requires replacing the pointer file in src/assets.
 */
export function KefaruMascot({ className, alt = "Kefaru Tech rhino mascot", priority }: Props) {
  return (
    <img
      src={mascotAsset.url}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={cn("h-auto w-full select-none object-contain", className)}
      draggable={false}
    />
  );
}
