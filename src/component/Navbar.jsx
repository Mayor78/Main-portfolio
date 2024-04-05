import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        const closeMenu = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setNav(false);
            }
        };

        document.addEventListener('click', closeMenu);

        return () => {
            document.removeEventListener('click', closeMenu);
        };
    }, []);

    const handleNav = (event) => {
        event.stopPropagation();
        setNav(!nav);
    };
    

    return (
        <div className="bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center">
            <h1 className='text-3xl font-bold primary-color ml-4'>A. Mayor</h1>
            <ul className='hidden md:flex'>
                <li className='p-5'><a href="#about">About</a></li>
                <li className='p-5'><a href="#contact">Contact</a></li>
                <li className='p-5'><a href="#work">Work</a></li>
            </ul>
            <div onClick={(event) => handleNav(event)} className=" sticky block md:hidden mr-6 ">
    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
</div>

            <div ref={navRef} className={nav ? 'z-10 fixed h-[50%] left-0 top-0 w-[60%] bg-[#202121] ease-in-duration-500' : 'fixed left-[100%] '}>
                <h1 className='text-3xl  primary-color m-4'>A. Mayor</h1>
                <ul className='p-8 text-2xl'>
                <li className='p-2 hover:text-white hover:underline'><a href="#home">Home</a></li>
                    <li className='p-2 hover:text-white hover:underline'><a href="#about">About</a></li>
                    <li className='p-2 hover:text-white hover:underline'><a href="#work">Work</a></li>
                    <li className='p-2 hover:text-white hover:underline'><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
