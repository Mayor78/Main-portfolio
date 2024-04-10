import React from 'react'
import { FaGithub, FaXTwitter  } from "react-icons/fa6";
import { MdWhatsapp } from "react-icons/md";

const Footer = () => {
  return (
    <div>
        <div className="max-w-[1200px] sm:h-[150px] p-12 flex justify-between mx-auto">
            <span className='primary-color'>A. Mayor</span>
            <p className='text-gray-600 hover:text-white cursor-pointer'>Abrahammayowa78@gmail.com <br />#webDev2024</p>
        </div>
        <div className=" text-white h-[20px]  cursor-pointer md:mr-4   items-center justify-center  md:h-[100px] max-w-[1200px] mx-auto grid grid-cols-6 ">
          <FaGithub/>
          <MdWhatsapp />
          <FaXTwitter />

        </div>
    
    </div>
  )
}

export default Footer