import React, { useEffect, useState } from 'react'
import Icon from './../assets/Icon.png'
import { Link } from 'react-scroll'
import {FaBars, FaXmark} from 'react-icons/fa6'

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSticky, setIsSticky] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 100) {
                setIsSticky(true)
            } else {
                setIsSticky(false)
            }
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.addEventListener('scroll', handleScroll)
        }
    })

    const navItems = [
        {'link': 'Home', 'path': 'home'},
        {'link': 'Service', 'path': 'services'},
        {'link': 'About', 'path': 'about'},
        {'link': 'Product', 'path': 'products'},
        {'link': 'Testimonial', 'path': 'testimonial'},
        {'link': 'FAQ', 'path': 'faq'},
    ]
  return (
    <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
        <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300": ""}`}>
            <div className='flex justify-between items-center text-base gap-8'>
                <a href='' className='text-2xl font-semibold flex items-center space-x-3'><img src={Icon} alt="logo"className='w-10 inline-block items-center' /><span className='text-[#263238]'>NEXCENT</span></a>
                
                {/* nav items for large devices */}
                <ul className='md:flex space-x-12 hidden'>
                    {
                        navItems.map(({link, path}) => <Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-base text-gray900 hover:text-brandPrimary first:font-medium'>{link}</Link>)
                    }
                </ul>

                {/* btn for large devices */}

                <div className='space-x-12 hidden lg:flex items-center'>
                    <a href="" className='hidden lg:flex items-center text-brandPrimary hover:text-gray900'>Login</a>
                    <button className='bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralGrey'>Sign Up</button>
                </div>

                {/* menu btn for mobile devices */}

                <div className='md:hidden'>
                    <button 
                        onClick={toggleMenu}
                        className='text-neutralDGrey focus:outline-none focus:text-gray-500'>
                    {
                        isMenuOpen ? <FaXmark className='w-6 h-6'/> : <FaBars className='w-6 h-6'/>
                    }
                    </button>
                </div>
                {/* menu items for mobile devices */}
                <div className={`space-y-4 px-4 py-7 mt-16 bg-brandPrimary ${isMenuOpen ? "fixed top-0 left-0 right-0" : "hidden"}`}>
                    {
                        navItems.map(({link, path}) => <Link to={"#"+path} spy={true} smooth={true} offset={-100} key={path} className='block text-base text-white hover:text-neutralDGrey first:font-medium'>{link}</Link>)
                    }
                </div>
            </div>
        </nav>
    </header>
  )
}

export default NavBar