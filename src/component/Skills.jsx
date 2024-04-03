import React from 'react'

const Skills = () => {
const html='https://media.istockphoto.com/id/1413514774/photo/stylized-3d-html-icon-design.webp?b=1&s=170667a&w=0&k=20&c=OrkPbETxWlQ4FQSfTku07zULRenQ6KnxkGM4nU5H_Kk='
const css ='data:image/png;base64,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'
const javascript= 'data:image/png;base64,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'
const tailwind ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX9fZzRj7BuQAtuf6RSuqIjWEaai2Vl7sFq2Y6tKq5hA&s'
const react ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQd_7qIjTaVBFGH_wbX-CmV8WJjPCYIHhpwukPk3vq0A&s'

  return (
    <div className='border-gray-400 text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-6
                place-items-center md:flex md:justify-between md:items-center'>


                    <h2 className='text-gray-700 text-xl md:text-4l font-bold m-4 hover:text-white cursor-pointer'> 
                    My <br />Tech <br />Stack
                    </h2>

                    <div className="flex flex-col items-center m-4 sm:my-0 w-[50px] md:w-[100px]hover:opacity-50 hover:-translate-y-1 hover:animate-shake transition-all duration-400 opacity-90 ">
                        <img src={html} alt="" />
                        <p className="mt-2 ">HTML</p>

                    </div>

                    <div className="flex flex-col items-center m-4 sm:my-0 w-[50px] md:w-[100px] hover:opacity-50 hover:-translate-y-1 hover:animate-shake transition-all duration-400 opacity-90">
                        <img src={css} alt="" />
                        <p className="mt-2 ">CSS</p>

                    </div>

                    <div className="flex flex-col items-center m-4 sm:my-0 w-[50px] md:w-[100px] hover:opacity-50 hover:-translate-y-1 hover:animate-shake transition-all duration-400 opacity-90">
                        <img src={javascript} alt="" />
                        <p className="mt-2 ">JAVASCRIPT</p>

                    </div>

                    <div className="flex flex-col items-center m-4 sm:my-0 w-[50px] md:w-[100px] hover:opacity-50 hover:-translate-y-1 hover:animate-shake transition-all duration-400 opacity-90">
                        <img src={tailwind} alt="" />
                        <p className="mt-2 ">TAILWIND</p>

                    </div>

                    <div className="flex flex-col items-center m-4 sm:my-0 w-[50px] md:w-[100px]hover:opacity-50 hover:-translate-y-1 hover:animate-shake transition-all duration-400 opacity-90">
                        <img src={react} alt="" />
                        <p className="mt-2 ">REACT</p>

                    </div>
            

         </div>
  )
}

export default Skills