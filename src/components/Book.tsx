import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from './sanity/ImageBuilder'

interface BookProps {
  createdAt: Date
  updatedAt: Date
  coverPhotoAlternativeText: string
  authorNames: Array<string>
  authorSlugs: Array<string>
  bookSlug: string
  coverTitle: string
  coverPhoto: any
  price: number
  bookType: string
}

export const Book: React.FC<BookProps> = ({
  createdAt,
  updatedAt,
  coverPhotoAlternativeText,
  authorNames,
  authorSlugs,
  bookSlug,
  coverTitle,
  coverPhoto,
  price,
  bookType,
}) => {
  return (
    <article className="w-64 shadow-xl card bg-base-100">
      <figure className="relative w-full h-[10rem]">
        <Image
          src={urlFor(coverPhoto).url()}
          layout="fill"
          objectFit="contain"
          quality={100}
          alt={coverPhotoAlternativeText}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{coverTitle}</h2>
        <p>£{price}</p>
        <p className='uppercase'>{bookType}</p>
        <p>
          {authorNames.map((Name) => (
            <>{Name}</>
          ))}
        </p>
        <div className="justify-end card-actions">
          <Link href={`/book/${bookSlug}`}>
            <a className="btn btn-primary">Buy Now</a>
          </Link>
        </div>
      </div>
    </article>
  )
}
