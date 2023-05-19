import React from 'react'

export const About = () => {
  return (
    <div name="about" 
    className=' w-full h-screen bg-gradient-to-b from-gray-800
    to-black text-white'>
        <div className=' max-w-screen-lg p-2 mx-auto flex flex-col
        justify-center w-full h-full'>
            <div className='pb-4 '>
                <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <br />
            <p className='text-xl mt-4'>
               
                Meet me, a data enthusiast and aspiring data scientist/analyst! 
                I'm currently pursuing my Bachelor's degree in Computer Science Engineering from Vidyavardhaka College of Engineering. Along with my academic pursuits,
                 I have also been an active volunteer and led various college-level clubs.
                I believe in being proactive and contributing towards the betterment of society.
                </p>
            <br />
            <p className='text-xl'>
            Apart from my extra-curricular activities, 
            I have a great understanding of web development using React.js and the MEAN stack. 
            These skills have enabled me to build various projects and applications that have helped me understand the importance of data and its impact on society.
            </p>
            <br />
            <p className='text-xl'>
            I'm constantly exploring the world of data science and analytics, and I'm excited about the possibilities it holds. Through this portfolio, 
            I hope to showcase my skills and projects, and connect with like-minded individuals and organizations.
            </p>
        </div>
    </div>
  )
}
