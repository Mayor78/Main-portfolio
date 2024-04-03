import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {aboutMe} from './About'





const Hero = () => {
  return (
    <div>Hero</div>
  )
}

export default Hero







































    
const image1 ="https://anyimage.io/storage/uploads/376b58573d21f41c5b1af3c064d2b808"
// 'https://images.pexels.com/photos/6976104/pexels-photo-6976104.jpeg?auto=compress&cs=tinysrgb&w=600'

  return (
    <div className='grid grid-cols-1 rounded-full sm:grid-cols-3 gap-8max-w-[1200px]  md:h-[70vh] mx-auto py-8 bg-black '>
        <div className="col-span-1  my-auto mx-auto w-[170px] h-auto lg:w-[300px]">
         
                <img className='rounded-full' src={image1} alt="image" />
            
        </div>
        <div className="col-span-2 px-5 my-auto">
        <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold'> 
            <span className=" primary-color">
                I'am a 

            </span> <br />
            <TypeAnimation 
                sequence={[
                    "FrontendDev",
                    1000,
                    "Webdesigner",
                    1000,
                    " Mern stack",
                    1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                />
            </h1>
                <p className='text-white sm:text-lg my-6 lg:text-xl'>
                    My Name Is Abraham Mayowa I have 1+ years experince in web Developer
                </p>
                <div className="my-8">
                    <a href="/" className='px-6 py-3 w-full rounded-xl mr-4
                    bg-gradient-to-br from-orange-500 to-pink-500 text-white'>
                        Download CV

                    </a>
                    <a href="/contact" className='px-6 py-3 w-full rounded-xl 
                    border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500
                    text-white hover:border-none '>
                        Contact
                    </a>
                </div>
           
        </div>

    </div>
  )
}

export default Hero