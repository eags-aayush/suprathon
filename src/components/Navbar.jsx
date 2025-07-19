import { useState } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { div } from 'framer-motion/client'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState(true)

  const linkClass = ({ isActive }) =>
    `nav-link hover:font-bold transition-all duration-200 ease-in-out ${isActive ? 'font-bold border-b-2 border-text' : ''}`

  return (
    <nav className='z-50 sticky top-10 px-5 py-3 font-light w-3/4 m-auto backdrop-blur-md bg-white/10 border-2 border-text rounded-full'>
      <ul className='hidden md:flex justify-between gap-4'>
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

      <ul className='md:hidden flex flex-row justify-between'>

          <li className='font-bold'>Suprathon</li>

          <section className='flex flex-row gap-4'>
            <button
              onClick={() => {
                setTheme(!theme);
                document.documentElement.classList.toggle('dark');
              }}
              className="cursor-pointer"
            >
              {theme ? <Sun /> : <Moon />}
            </button>

            <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X /> : <Menu />}</button>
          </section>
        </ul>

      {isOpen && (
        <div className=' absolute top-10 right-0 bg-background text-text p-4 rounded-md'>
        <ul className='md:hidden flex flex-col gap-4'>
          <NavLink to="/" onClick={() => setIsOpen(!isOpen)} className={linkClass}>Home</NavLink>
          <NavLink to="/analyze" onClick={() => setIsOpen(!isOpen)} className={linkClass}>Analyze</NavLink>
          <NavLink to="/humanize" onClick={() => setIsOpen(!isOpen)} className={linkClass}>Humanize</NavLink>
          <NavLink to="/theFAQ" onClick={() => setIsOpen(!isOpen)} className={linkClass}>The FAQs</NavLink>
        </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
