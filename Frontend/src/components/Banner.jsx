import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    const navigate = useNavigate()

    return (
        <div className='flex bg-[#E3F2FD] rounded-bl-[50px] rounded-tr-[50px] px-6 sm:px-14 md:px-14 lg:px-12 my-20 md:mx-10'>

            {/* ----- Left Side ----- */}
            <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
                <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-[#023E8A]'>
                    <p>Book an Appointment</p>
                    <p className='mt-4'>
                        With <span className="text-[#E63946] px-3 py-1 bg-white rounded-xl shadow-md">100+ Trusted Doctors</span>
                    </p>
                </div>
                <button
                    onClick={() => { navigate('/login'); scrollTo(0, 0) }}
                    className='bg-[#0077B6] text-white px-8 py-3 rounded-full mt-6 font-medium shadow-lg 
                    hover:bg-[#E63946] transition-all'
                >
                    Create Account
                </button>
            </div>

            {/* ----- Right Side ----- */}
            <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
                <img className='w-full absolute bottom-0 right-0 max-w-md' src={assets.appointment_img} alt="Appointment" />
            </div>

        </div>
    )
}

export default Banner
