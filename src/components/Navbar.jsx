import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)


    const handleNav = () => {
        setNav(!nav)
    }

    const goToHome = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        if(nav){
            setNav(!nav)
        }
    }

    const goToAboutMe = () => {
        if(nav){
            setNav(!nav)
            window.scrollTo({
                top: 820,
                behavior: "smooth",
            });
        } else {
            window.scrollTo({
                top: 740,
                behavior: "smooth",
            });
        }
    }

    const goToProjects = () => {
        if(nav){
            setNav(!nav)
            window.scrollTo({
                top: 1600,
                behavior: "smooth",
            });
        } else {
            window.scrollTo({
                top: 1400,
                behavior: "smooth",
            });
        }
    }

    const goToContacts = () => {
        if(nav){
            setNav(!nav)
            window.scrollTo({
                top: 3000,
                behavior: "smooth",
            });
        } else {
            window.scrollTo({
                top: 2000,
                behavior: "smooth",
            });
        }
    }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-secondary'>hb</h1>
        <ul className='hidden md:flex'>
            <li className='p-4'><button onClick={goToHome}>Home</button></li>
            <li className='p-4'><button onClick={goToAboutMe}>About</button></li>
            <li className='p-4'><button onClick={goToProjects}>Projects</button></li>
            <li className='p-4'><button onClick={goToContacts}>Contacts</button></li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}   
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>hb</h1>
            <ul className='p-4'>
                <li className='p-4 border-b border-gray-600'><button onClick={goToHome}>HOME</button></li>
                <li className='p-4 border-b border-gray-600'><button onClick={goToAboutMe}>ABOUT</button></li>
                <li className='p-4 border-b border-gray-600'><button onClick={goToProjects}>PROJECTS</button></li>
                <li className='p-4 border-b border-gray-600'><button onClick={goToContacts}>CONTACTS</button></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar