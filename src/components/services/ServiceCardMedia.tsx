import Image from 'next/image'

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
      <Image
        src={image}
        alt={alt}
        fill
        sizes={sizes}
        quality={75}
        loading="lazy"
        style={{ objectFit: 'cover', objectPosition: 'center 38%' }}
        className="service-card-img"
      />
    </div>
  )
}
