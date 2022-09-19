import { Logo } from './Logo'
import { MenuHandler } from './MenuHandler'
import { SearchHandler } from './SearchHandler'
import { ThemeSwitcher } from './ThemeSwitcher'

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="w-full">
      <nav className="justify-between navbar bg-base-100">
        <MenuHandler />
        <Logo />
        <div className='flex gap-2'>
          <ThemeSwitcher />
          <SearchHandler />
        </div>
      </nav>
    </header>
  )
}
