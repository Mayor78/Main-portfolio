import React from 'react'

const MyWork = () => {

    const cal='https://anyimage.io/storage/uploads/f9147e3f4b193aeb43bfe3b3ad73f5cc'
   
    const project2 ='https://anyimage.io/storage/uploads/5e3300c947dfe568aef707f911981089'
    const project3 = 'https://anyimage.io/storage/uploads/866f238009bb891fe2cfd6435437f5b5'
    const project4 = 'https://anyimage.io/storage/uploads/3acaa93c1c2e4da7f4c732307d6fee51'
    const project5 ='https://anyimage.io/storage/uploads/7592dd396d0f841ffe3eba1c3d0d92af'
    const project6 = 'https://anyimage.io/storage/uploads/376b58573d21f41c5b1af3c064d2b808'

  return (
    <div
     className='text-white max-w-[1200px] mx-auto my-12 bg-black' id='work'>
       <div className="pb-8">
        <p className="text-4xl mb-3 font-bold primary-color">Work</p>
        <p className="text-gray-400">Check out some of my recent work</p>
       </div>
       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        

        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
                    shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                    h-[200px] bg-cover relative">
                        <img src={cal} layout='fill' alt="" />
                    <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col
                    justify-center items-center">
                     <span className='text-2xl font-bold text-white tracking-wider'> Web Calculator</span>
                     <div className="pt-8 text-center">
                         <a href="https://calculator-five-brown-68.vercel.app/">
                             <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>Live</button>
                         </a>
                        </div>
                        </div>
                    </div>
                    <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
                    shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                    h-[200px] bg-cover relative">
                        <img src={project2} layout='fill' alt="" />
                    <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col
                    justify-center items-center">
                     <span className='text-2xl font-bold text-white tracking-wider'>Youtube</span>
                     <div className="pt-8 text-center">
                         <a href="https://youtube-clone-eta-mocha.vercel.app/">
                             <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>Live</button>
                         </a>
                        </div>
                        </div>
                    </div>
                    <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
                    shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                    h-[200px] bg-cover relative">
                        <img src={project3} layout='fill' alt="" />
                    <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col
                    justify-center items-center">
                     <span className='text-2xl font-bold text-white tracking-wider'>Travel Website</span>
                     <div className="pt-8 text-center">
                         <a href="https://tripboss-psi.vercel.app/">
                             <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>Live</button>
                         </a>
                        </div>
                        </div>
                    </div>
                    <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
                    shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                    h-[200px] bg-cover relative">
                        <img src={project4} layout='fill' alt="" />
                    <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col
                    justify-center items-center">
                     <span className='text-2xl font-bold text-white tracking-wider'>Travel website</span>
                     <div className="pt-8 text-center">
                         <a href="https://fuel-travel.vercel.app/">
                             <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>Live</button>
                         </a>
                        </div>
                        </div>
                    </div>
                    {/* <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
                    shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                    h-[200px] bg-cover relative">
                        <img src={project5} layout='fill' alt="" />
                    <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col
                    justify-center items-center">
                     <span className='text-2xl font-bold text-white tracking-wider'>Cart page</span>
                     <div className="pt-8 text-center">
                         <a href="https://my-cart-mu.vercel.app/">
                             <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>Live</button>
                         </a>
                        </div>
                        </div>
                    </div> */}
                    
       </div>
    </div>






  )
}

export default MyWork