import React from 'react'

export const Contact = () => {
  return (
    <div
    name="contact"
    className='w-full h-auto bg-gradient-to-b
     from-gray-800 to-black text-white '>
        <div className="flex flex-col p-4   justify-center max-w-screen-lg mx-auto h-full">
            <div className="pb-3 mt-[50px]">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                    Contact
                </p>
                <p className="py-6">
                    Submit the form below to get in touch with me
                </p>
            </div>

        <div className='flex justify-center items-center'>

            <form action="https://getform.io/f/9ac87c75-9df8-42cc-a75e-45fe967752ab"
            method='POST'
            className='flex flex-col w-full md:w-1/2'>

            <input type="text" name="name" 
            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none
            flex items-center"
            placeholder='Enter your name ' required />

            <input type="text" name="email" 
            className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
            placeholder='Enter your email ' required/>

            <textarea name="message"  
             
             placeholder='Enter your message here... '
             rows="5"
            className="p-2  bg-transparent border-2 rounded-md text-gray-500 focus:outline-none" required>
                 </textarea>

            <button className="text-white p-2 bg-gradient-to-b from-cyan-500
            to-blue-500 px-6 py-3 my-8 mx-auto flex items-center 
            rounded-md hover:scale-110 duration-300"> Let's Talk</button>
            

            
        </form>
    </div>
    </div>
    </div>
  )
}
