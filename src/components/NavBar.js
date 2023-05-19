import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
// import {Link} from 'react-scroll'
import {Link as ScrollLink } from 'react-scroll'

export const NavBar = () => {
    // Creating an array for NavBar
    const links=[
        {
            id:1,
            link: 'home'
        },
        {
            id:2,
            link: "about"
        },
        // {
        //     id:3,
        //     link : 'portfolio'
        // },
        {
            id:4,
            link: 'experience'
        },
        {
            id:5,
            link: 'contact'
        }
    ]
    //  UseStates for mobile version
    const [nav,setNav] = useState(false);

  return (
    <div  name='home' className='flex justify-between  items-center w-full h-20
    px-4  text-white bg-black fixed' >
        <div>
            <h1 className=' text-5xl font-signature ml-3'> Madhu</h1>  
        </div>   

        {/* Using an array to create links in navbar */}
        {/* md is the media tag  which lets ypu configure for mobile version */}
        <ul className=' hidden md:flex'>
            { links.map(( {id, link} ) =>(
                <li className=' px-4 cursor-pointer capitalize font-semibold
                text-gray-500 hover:scale-110 duration-200 '>
                    <ScrollLink to={link} smooth={true} duration={500}>
                    {link}
                    </ScrollLink>
                    
                    </li>
            ))}
         </ul>
      {/* Nav for mobile version */}
    {/*  Display hamburger symbol if in mobile screen size */}
      <div onClick={()=> setNav(!nav)}
      className ='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
        {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
      </div>
      
    {/* If state of nav is true  i.e mobile version displays the following version of NAVBAR */}

    {nav && (
        <ul className='flex flex-col justify-center items-center
        absolute top-0 left-0 w-full h-screen bg-gradient-to-b
        from-black to-gray-500'>

            {links.map(({link, id}) =>
            <li key={id} className=' px-4 cursor-pointer capitalize
            py-6 text-4xl hover:scale-105 duration-200'>
                <ScrollLink to={link} smooth={true} duration={1000} onClick={ () => setNav(!nav)}>{link}</ScrollLink>
            </li>
            
            )}
        </ul>
    )}

    


     </div>
  )
}
