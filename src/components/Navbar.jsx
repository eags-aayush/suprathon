import { useState } from 'react'
import { Sun, Moon } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const [theme, setTheme] = useState(true)
  console.log(theme)
  const linkClass = ({ isActive }) =>
    `nav-link hover:font-bold transition-all duration-200 ease-in-out ${isActive ? 'font-bold border-b-2 border-text' : ''}`

  return (
    <nav className='z-50 sticky top-10 px-5 py-3 font-light w-3/4 m-auto backdrop-blur-md bg-white/10 border-2 border-text rounded-full'>
      <ul className='flex justify-between gap-4'>
        <li className='font-bold'>Suprathon</li>
        <NavLink to="/" className={linkClass}>Home</NavLink>
        <NavLink to="/analyze" className={linkClass}>Analyze</NavLink>
        <NavLink to="/humanize" className={linkClass}>Humanize</NavLink>
        <NavLink to="/theFAQ" className={linkClass}>The FAQs</NavLink>

        <button
          onClick={() => {
            setTheme(!theme);
            document.documentElement.classList.toggle('dark');
          }}
          className="cursor-pointer"
        >
          {theme ? <Sun /> : <Moon />}
        </button>

      </ul>
    </nav>
  )
}

export default Navbar
