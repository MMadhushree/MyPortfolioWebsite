import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import {AiOutlineMail } from 'react-icons/ai'
import {BsFillPersonLinesFill} from 'react-icons/bs'

export const SocialLinks = () => {
// It's visible only for desktop version
    const links = [
        {
            id:1,
            child: (
            <> LinkedIn <FaLinkedin   size={30}/> </>  
            ),
            href: 'https://www.linkedin.com/in/madhushree-m-218163205',
            style : 'rounded-md'
        },
        {
            id:2,
            child: (
            <> Github <FaGithub   size={30}/> </>  
            ),
            href: 'https://github.com/MMadhushree',
            
        },
        {
            id:3,
            child: (
            <> Email <AiOutlineMail   size={30}/> </>  
            ),
            href: 'mailto:madhushree10.m@gmail.com',
            
        },
        {
            id:4,
            child: (
            <> Resume <BsFillPersonLinesFill   size={30}/> </>  
            ),
            // Upload your resume in the public folder
            href: './Resume.pdf',
            style : 'rounded-br-md',
            download: true
        },
    ];

  return (
    <div className=' hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {links.map(({id ,href, child, download }) =>(


                <li key={id}
                className="flex justify-between items-center w-40 
                    h-14 px-4 bg-gray-700 ml-[-100px] 
                    hover:rounded-md hover:ml-[-10px] duration-200" >

                        <a href={href} className='flex justify-between items-center w-full
                        text-white pl-3'
                        download={download}
                        target="_blank"
                        // To avoid warnings
                        rel ="noreferrer" > 

                        {child}
                         
                        </a>
                </li>
            ))}

            
        </ul>
        
    </div>
  );
};
