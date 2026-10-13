import Image from 'next/image'
import { ProtectedMediaFrame } from '@/components/media/ProtectedMediaFrame'

type Props = {
  image: string
  alt: string
  sizes?: string
}

export function ServiceCardMedia({
  image,
  alt,
  sizes = '(max-width:900px) 100vw, 33vw',
}: Props) {
  return (
    <div className="service-card-media media-frame">
      <ProtectedMediaFrame src={image} className="service-card-protected">
        <Image
          src={image}
          alt={alt}
          fill
          sizes={sizes}
          quality={72}
          style={{ objectFit: 'cover', objectPosition: 'center 38%' }}
          className="service-card-img"
        />
      </ProtectedMediaFrame>
    </div>
  )
}
