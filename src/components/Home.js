import React from 'react'
import { FaArrowRight } from 'react-icons/fa'


export const Home = () => {
  return (
    <div name="home" id='home'
     className='h-screen w-full bg-gradient-to-b 
    from-black via-black to-gray-800 text-white'>
        
        <div className='max-w-screen-lg mx-auto flex 
        flex-col items-center justify-center h-full px-4 md:flex-row'> 
            <div className='flex flex-col justify-center h-full'>
                <h3 className='text-xl sm:text-5xl '>
                    Hello there, </h3>
                <h2 className='text-5xl font-bold sm:text-7xl' >I'm Madhushree</h2>
                <p className='text-gray-400 py-4 max-w-md'>
                Welcome to my portfolio website! As a recent engineering graduate,
                 I have built this site using React.js and Tailwind CSS to showcase my skills in web development. 
                 With a strong foundation in DSA and OOPS, 
                 I am now learning the tools and technologies required to become a proficient data analyst.
                    </p>
                <div>
                    <button className='group  w-fit px-6 py-3
                    my-2 flex items-center rounded-md bg-gradient-to-r
                    from-cyan-500 to-blue-500 cursor-pointer '>
                        Portfolio
                         <span className='px-2 group-hover:rotate-90
                          duration-300 '> <FaArrowRight  size={18} className='ml-1'/></span>
                    </button>
                </div>
            </div>
        </div>
        
        
        
     </div>
    
  )
}
