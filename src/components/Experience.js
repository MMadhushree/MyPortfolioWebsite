import React from 'react'
import html from "../assets/html.png";
import css from "../assets/css.png"
import js from "../assets/javascript.png"
import reactImg from "../assets/reactImg.png"
import Numpy from "../assets/Numpy.png"
import pandas from "../assets/pandas.png"
import tailwind from "../assets/tailwind.png"
import github from "../assets/github.png"
import figma from "../assets/figma.png"
import cpp from "../assets/cpp.png"
import java from "../assets/java.png"
import python from "../assets/python.png"

export const Experience = () => {

    const techs= [
        {
            id:1,
            src : html,
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src : css,
            title:'CSS',
            style:'shadow-blue-500'
        },
        {
            id:3,
            src : js,
            title:'JavaScript',
            style:'shadow-yellow-500'
        },
        {
            id:4,
            src : figma,
            title:'FIGMA',
            style:'shadow-green-500'
        },
        {
            id:5,
            src : reactImg,
            title:'REACT',
            style:'shadow-blue-500'
        },
        {
            id:6,
            src : tailwind,
            title:'TAILWIND',
            style:'shadow-sky-400'
        },
        {
            id:7,
            src : github,
            title:'GITHUB',
            style:'shadow-gray-400'
        },
        {
            id:8,
            src : pandas,
            title:'PANDAS',
            style:'shadow-purple-500'
        },
        {
            id:9,
            src : Numpy,
            title:'NUMPY',
            style:'shadow-blue-700'
        },
        {
            id:10,
            src : python,
            title:'PYTHON',
            style:'shadow-yellow-300'
        },
        {
            id:11,
            src : java,
            title:'Java',
            style:'shadow-orange-400'
        },
        {
            id:12,
            src : cpp,
            title:'C/C++',
            style:'shadow-gray-200'
        },
    ]



  return (
    <div name="experience"
    className='bg-gradient-to-b from-black
    to-gray-800 w-full h-auto '>
        <div className='max-w-screen-lg mx-auto flex flex-col
        justify-center w-full h-full pt-[80px] text-white p-4'>
            <div>
                <p className='text-4xl font-bold border-b-4 
                border-gray-500 inline'>
                        Experience
                </p>
                <p className='py-6'>
                    These are the technologies I've worked with
                </p>
            </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-3
            gap-8 text-center py-8 px-12 sm:px-8">
                {/* Looping must always come after grid */}

            {techs.map(({ id, src, title, style}) => (
                <div  key={id} className={`shadow-md hover:scale-105 duration-500 
                py-2 rounded-lg ${style}`} >
                    <img src= {src} alt="" className='w-20 mx-auto' />
                    <p className="mt-4">{title}</p>

                </div>
            ))}    




            </div>
        </div>
        
    </div>
  )
}
