import Image, { ImageProps } from "next/image";

interface OptimizedImageProps extends Omit<ImageProps, "src"> {
  src: ImageProps['src'];
  priority?: boolean;
  sizes?: string;
}

/**
 * OptimizedImage component that uses WebP with fallback to original
 * Uses Picture element for proper browser format selection
 * 
 * Usage:
 * <OptimizedImage 
 *   src="/panel-event.jpg" 
 *   alt="Description"
 *   width={600}
 *   height={400}
 *   priority
 * />
 */
export default function OptimizedImage({
  src,
  alt,
  priority = false,
  sizes,
  className,
  ...props
}: OptimizedImageProps) {
  // Convert src to string - handle StaticImageData, StaticRequire, or string
  const srcString = typeof src === 'string' 
    ? src 
    : typeof src === 'object' && 'src' in src
    ? src.src
    : String(src);
  
  // Get WebP version path
  const getWebPPath = (originalPath: string): string => {
    const ext = originalPath.split('.').pop()?.toLowerCase();
    if (ext && ['jpg', 'jpeg', 'png'].includes(ext)) {
      return originalPath.replace(new RegExp(`\\.${ext}$`, 'i'), '.webp');
    }
    return originalPath;
  };

  const webpSrc = getWebPPath(srcString);
  const isOptimizable = webpSrc !== srcString; // Only use picture if we have a WebP version

  // If not optimizable (already WebP or unsupported format), use regular Image
  if (!isOptimizable) {
    return (
      <Image
        {...props}
        alt={alt}
        src={src}
        priority={priority}
        sizes={sizes}
        className={className}
        fetchPriority={priority ? "high" : undefined}
      />
    );
  }

  // Use Picture element with WebP source and fallback
  return (
    <picture className={className}>
      <source srcSet={webpSrc} type="image/webp" />
      <Image
        {...props}
        alt={alt}
        src={src}
        priority={priority}
        sizes={sizes}
        className="w-full h-auto"
        fetchPriority={priority ? "high" : undefined}
      />
    </picture>
  );
}
