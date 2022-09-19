import type { NextPage } from 'next'
import { client } from '../lib/client'
import groq from 'groq'
const Home: NextPage = ({ bestNewBooks }: any) => {
  return (
    <>
  
    </>
  )
}

export default Home

const bestNewBooksQuey = groq`*[_type == "book" && categorys[]-> name match "The Biggest New Books"]`

export async function getStaticProps() {
  const bestNewBooks = await client.fetch(bestNewBooksQuey)
  return {
    props: {
      bestNewBooks,
    },
  }
}

/*

*[_type == "book" && categorys[]-> name match "The Biggest New Books"]
*/
