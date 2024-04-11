import React from 'react'
import { FaGithub, FaXTwitter  } from "react-icons/fa6";
import { MdWhatsapp } from "react-icons/md";

const Footer = () => {
  return (
    <div>
        <div className="max-w-[1200px] sm:h-[150px] p-12 flex justify-between mx-auto">
            <span className='primary-color'>A. Mayor</span>
            <p className='text-gray-600 hover:text-white cursor-pointer'>Abrahammayowa78@gmail.com <br /></p>
        </div>
        <div className=" text-white h-[20px]  flex py-3 items-center justify-center mb-5 ">
         <a href="https://github.com/Mayor78"> <FaGithub className='5-xl m-10 hover:bg-primary-color '/></a>
         <a href=""> <MdWhatsapp className='5-xl m-8 ' /></a>
         <a href=""><FaXTwitter className='5-xl m-8 '/></a>

        </div>
    
    </div>
  )
}

export default Footer