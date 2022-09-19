import Link from 'next/link'

interface LogoProps {}

export const Logo: React.FC<LogoProps> = () => {
  return (
    <Link href="/">
      <a className="btn btn-outline">Books</a>
    </Link>
  )
}
