import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className='flex flex-col md:flex-row flex-wrap bg-[#E3F2FD] rounded-bl-[50px] rounded-tr-[50px] px-6 lg:px-20'>

            {/* -----Left Side----- */}
            <div className='md:w-1/2 flex flex-col items-start justify-center gap-5 py-10 m-auto md:py-[8vw] md:mb-[-30px]'>
                <p className='text-3xl md:text-4xl lg:text-5xl text-[#023E8A] font-bold leading-snug'>
                    Book an Appointment <br /> With <span className="text-[#E63946]">Expert Doctors</span>
                </p>
                <div className='flex flex-col md:flex-row items-center gap-3 text-[#023E8A] text-sm font-medium'>
                    <img className='w-28' src={assets.group_profiles} alt="Doctor Group" />
                    <p className='leading-relaxed'>
                        Find the best doctors, schedule hassle-free appointments, <br className='hidden sm:block' /> and get trusted medical advice from experts.
                    </p>
                </div>
                <a href="#speciality" className='flex items-center gap-2 bg-[#0077B6] px-8 py-3 rounded-full text-white text-sm font-medium shadow-lg hover:bg-[#E63946] transition-all duration-300'>
                    Book Appointment <img className='w-3' src={assets.arrow_icon} alt="Arrow Icon" />
                </a>
            </div>

            {/* -----Right Side----- */}
            <div className='md:w-1/2 relative flex justify-center'>
                <img className='w-[100%] md:w-full md:absolute bottom-0 h-auto' src={assets.header_img} alt="Doctor Consultation" />
            </div>

        </div>
    )
}

export default Header
