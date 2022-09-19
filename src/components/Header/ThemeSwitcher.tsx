import { useTheme } from 'next-themes'
import { useState } from 'react'
import { HiOutlineColorSwatch } from 'react-icons/hi'
interface ThemeSwitcherProps {}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = () => {
  const [input, setInput] = useState('')
  const { theme, setTheme } = useTheme()
  return (
    <div className="dropdown dropdown-end">
      <div className="tooltip tooltip-bottom" data-tip="Theme switcher">
        <label tabIndex={0} className="btn">
          <HiOutlineColorSwatch className="text-xl" />
        </label>
      </div>
      <ul
        tabIndex={0}
        className="p-2 overflow-scroll shadow dropdown-content menu bg-base-100 rounded-box w-52 h-52"
      >
        <input
          type="text"
          placeholder="Type here"
          className="w-full max-w-xs py-3 mb-3 input input-bordered"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        {themes
          .filter((t) => t.toLowerCase().includes(input.toLowerCase()))
          .map((Theme) => (
            <li
              className={`${theme === Theme && 'btn-primary'} ${
                input.includes(Theme) && 'btn-primary'
              }`}
              key={Theme}
              onClick={() => setTheme(`${Theme}`)}
            >
              <label className="uppercase">{Theme}</label>
            </li>
          ))}
      </ul>
    </div>
  )
}

const themes = [
  'light',
  'dark',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
  'halloween',
  'garden',
  'forest',
  'aqua',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'black',
  'luxury',
  'dracula',
  'cmyk',
  'autumn',
  'business',
  'acid',
  'lemonade',
  'night',
  'coffee',
  'winter',
]
