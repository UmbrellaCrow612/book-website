import type { NextPage } from 'next'
import { client } from '../lib/client'
import groq from 'groq'
import { Book } from '../components/Book'
const Home: NextPage = ({ biggestNewBooks }: any) => {
  return (
    <section className="px-3 py-5 mx-auto max-w-screen-2xl">
      <h1 className="text-4xl font-bold leading-tight text-center md:text-5xl">
        The Biggest New Books
      </h1>
      {/* Book container */}
      <div className="flex flex-wrap gap-5 px-4 py-8 justify-evenly">
        {biggestNewBooks.map((book: any) => (
          <Book
            authorNames={book.authorNames}
            coverTitle={book.coverTitle}
            authorSlugs={book.authorSlugs}
            bookSlug={book.bookSlug}
            bookType={book.bookType}
            coverPhoto={book.coverPhoto}
            createdAt={book.createdAt}
            coverPhotoAlternativeText={book.coverPhotoAlternativeText}
            key={book.id}
            price={book.price}
            updatedAt={book.updatedAt}
          />
        ))}
      </div>
    </section>
  )
}

export default Home

const theBiggestNewBooksQuery = groq`*[_type == "book" && categorys[]-> name match "The Biggest New Books"]{
 "createdAt": _createdAt,
 "updatedAt": _updatedAt,
 "id": _id,
 "coverPhotoAlternativeText": coverPhoto.alternateText,
 "authorNames": authors[] -> name,
 "authorSlugs": authors[] -> slug.current,
 "bookSlug": slug.current,
 coverTitle,
 coverPhoto,
 price,
 bookType
}`

// Note you can get the cover photo url directly "url": coverPhoto.asset -> url

export async function getStaticProps() {
  const biggestNewBooks = await client.fetch(theBiggestNewBooksQuery)
  return {
    props: {
      biggestNewBooks,
    },
  }
}
