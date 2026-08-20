import Image from 'next/image'
import { getAnaPhoto, type AnaPhotoId } from '@/data/ana-photos'

/**
 * Editorial “Ana speaks” block — only for first-person voice.
 * Do not use for institutional or purely educational copy.
 */
export function AnaSpeaks({
  quote,
  photoId = 'ana-studio',
  attribution = 'Ana Sampaio',
  role = 'Cabeleireira e terapeuta capilar integrativa',
}: {
  quote: string
  photoId?: AnaPhotoId
  attribution?: string
  role?: string
}) {
  const photo = getAnaPhoto(photoId)

  return (
    <figure className="ana-speaks">
      <div className="ana-speaks-media">
        <Image
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          sizes="(max-width:768px) 120px, 160px"
          className="ana-speaks-img"
        />
      </div>
      <blockquote className="ana-speaks-quote">
        <p>{quote}</p>
        <figcaption>
          <strong>{attribution}</strong>
          <span>{role}</span>
        </figcaption>
      </blockquote>
    </figure>
  )
}
