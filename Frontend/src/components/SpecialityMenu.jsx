import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
    return (
        <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality'>
            <h1 className='text-4xl font-bold text-[#023E8A]'>Find by Speciality </h1>
            <p className='sm:w-1/3 text-center text-md text-gray-600'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
            <div className='flex sm:justify-center gap-10 pt-5 w-full overflow-scroll'>
                {specialityData.map((item, index) => (
                    <Link onClick={() => scrollTo(0, 0)} className='flex  flex-col items-center text-xs  cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/doctors/${item.speciality}`}>
                        <img className='w-16 sm:w-24 mb-2 rounded-full p-1 border-2 border-[#023E8A] shadow-lg shadow-[#023E8A]/40' src={item.image} alt="" />
                        <p className='text-[#023E8A] text-sm font-semibold'>{item.speciality}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SpecialityMenu
