import Image from 'next/image'
import { getBlogFeaturedImageSize } from '@/data/blog-image-dimensions'
import { ProtectedMediaFrame } from '@/components/media/ProtectedMediaFrame'

type BlogCoverImageProps = {
  src: string
  alt: string
  sizes: string
  priority?: boolean
  quality?: number
  className?: string
  /** tile = capa uniforme nos cards (cover, sem faixas); full = artigo, proporção real */
  variant?: 'tile' | 'full'
}

export function BlogCoverImage({
  src,
  alt,
  sizes,
  priority,
  quality = 85,
  className = '',
  variant = 'tile',
}: BlogCoverImageProps) {
  const { width, height } = getBlogFeaturedImageSize(src)

  if (variant === 'full') {
    return (
      <ProtectedMediaFrame src={src} className="blog-cover-protected">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          priority={priority}
          fetchPriority={priority ? 'high' : undefined}
          quality={quality}
          className={['blog-cover-photo', 'blog-cover-photo--full', className].filter(Boolean).join(' ')}
        />
      </ProtectedMediaFrame>
    )
  }

  return (
    <ProtectedMediaFrame src={src} className="blog-cover-protected blog-cover-protected--tile">
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        fetchPriority={priority ? 'high' : undefined}
        quality={quality}
        className={['blog-cover-photo', 'blog-cover-photo--tile', className].filter(Boolean).join(' ')}
      />
    </ProtectedMediaFrame>
  )
}
