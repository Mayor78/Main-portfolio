import React from 'react'
import Accordion from './Accordion'

const AboutMe = () => {
    const About ="https://anyimage.io/storage/uploads/376b58573d21f41c5b1af3c064d2b808"
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id='about'>
        <div className="md:grid md:grid-cols-2 sm:py-16">
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0">
                <div className="my-auto mx-6">
                    <h2 className="text-4xl from-bold mb-4 primary-color">About Me</h2>
                    <p className="text-base lg:text-lg">
                    As a web developer, I possess a passion for crafting innovative and user-centric digital experiences through proficient coding, 
                    creative problem-solving, and continuous learning. With a blend of technical expertise, creativity, and attention to detail, 
                    I strive to create web solutions that not only meet but exceed the expectations of clients and users alike.

                        My skill set encompasses a wide range of technologies, including:
                        <br />
                        <br />
                        <Accordion/>
                        <br />
                       
                        As a web developer, I am dedicated to delivering high-quality, scalable, and user-friendly web applications that drive business success and delight users. I am passionate about leveraging technology to create meaningful digital experiences that make a positive impact on the world.

                    </p>
                </div>

            </div>
            <img className='mx-auto rounded-full py-8 md:py-0 ' src={About} width={300} height={300} />
        </div>

    </div>
  )
}

export default AboutMe