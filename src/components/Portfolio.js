import React from 'react'


export const Portfolio = () => {
  return (
    <div name="Portfolio"
    className='bg-gradient-to-b from-black
     to-gray-700 w-full text-white md:h-s
     '>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col
        justify-cener w-full h-full'>
            <div className="pb-4">
                <p className="text-4xl font-bold inline border-b-4
            border-gray-500"> Portfolio</p>
            <p className="py-6">
                Some of the projects I have worked on
            </p>
                
            </div>
            <div className="grid sm:grid-cols-2 md:grid:cols-3 gap-8
            px-12 sm:px0" >
                {/* Use this to add experience as in the reference Programming with Yash */}
                <div>
                    <img src="" alt="" />
                </div>

            </div>
        </div>

    </div>
  )
}
