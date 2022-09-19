import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from './ImageBuilder'

const myPortableTextComponents = {
  types: {
    image: ({ value, alt }: any) => (
      <figure className='relative h-[45rem] w-full'>
        <Image
          src={urlFor(value).url()}
          layout="fill"
          objectFit="cover"
          quality={100}
          alt={alt}
        />
      </figure>
    ),
  },
}

interface CustomPortableTextProps {
  content: any
}

export const CustomPortableText: React.FC<CustomPortableTextProps> = ({
  content,
}) => {
    return (
      <div className='w-full prose xl:prose-xl'>
        <PortableText value={[content]} components={myPortableTextComponents} />
      </div>
    )
}
