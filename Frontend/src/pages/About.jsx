import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
    return (
        <div className="px-4 md:px-16 lg:px-24 py-10">

            {/* --- Title Section --- */}
            <div className="text-center text-xl md:text-4xl font-semibold text-gray-700 tracking-wide mb-10">
                <p>ABOUT <span className="text-[#0077B6]">US</span></p>
            </div>

            {/* --- About Description --- */}
            <div className="flex flex-col md:flex-row gap-10 items-center mb-20">
                <img
                    src={assets.about_image}
                    alt="About Prescripto"
                    className="w-full md:max-w-[400px] rounded-3xl shadow-lg"
                />
                <div className="text-gray-600 text-[15px] leading-relaxed md:w-2/3 flex flex-col gap-5">
                    <p>
                        Welcome to <strong className="text-[#023E8A]">Mediverse</strong>, your trusted partner in modern healthcare.
                        We’re on a mission to simplify the way you manage appointments, prescriptions, and personal health records—
                        all in one place.
                    </p>
                    <p>
                        By combining smart AI and intuitive design, Prescripto empowers you to make informed healthcare decisions with ease.
                        Whether you're booking a first-time consultation or tracking ongoing treatment, we ensure your care is seamless and secure.
                    </p>
                    <div>
                        <h3 className="font-semibold text-gray-800 text-lg mb-1">Our Vision</h3>
                        <p>
                            To build a smarter healthcare ecosystem that brings patients and doctors closer, ensuring access to care when you need it the most.
                        </p>
                    </div>
                </div>
            </div>

            {/* --- Why Choose Us --- */}
            <div className="text-center text-2xl font-semibold text-gray-700 mb-6">
                <p>WHY <span className="text-[#0077B6]">CHOOSE US</span></p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                <div className="border rounded-2xl px-10 py-12 text-center bg-white shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:bg-[#0077B6] hover:text-white">
                    <h4 className="text-lg font-semibold mb-4">EFFICIENCY</h4>
                    <p className="text-sm leading-relaxed">
                        Streamlined appointment scheduling that fits perfectly into your busy life.
                    </p>
                </div>
                <div className="border rounded-2xl px-10 py-12 text-center bg-white shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:bg-[#0077B6] hover:text-white">
                    <h4 className="text-lg font-semibold mb-4">CONVENIENCE</h4>
                    <p className="text-sm leading-relaxed">
                        Instant access to a trusted network of healthcare professionals, right at your fingertips.
                    </p>
                </div>
                <div className="border rounded-2xl px-10 py-12 text-center bg-white shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:bg-[#0077B6] hover:text-white">
                    <h4 className="text-lg font-semibold mb-4">PERSONALIZATION</h4>
                    <p className="text-sm leading-relaxed">
                        Smart suggestions, reminders, and insights tailored just for you and your wellness goals.
                    </p>
                </div>
            </div>

            {/* --- Testimonials Section --- */}
            <div className="text-center text-2xl font-semibold text-gray-700 mb-10">
                <p>WHAT OUR USERS <span className="text-[#0077B6]">SAY</span></p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300">
                    <p className="italic text-sm text-gray-600 mb-4">
                        “MediVerse made scheduling appointments so simple. I love how everything is organized in one place.”
                    </p>
                    <h4 className="font-semibold text-gray-800 text-sm">— Ayesha R., Mumbai</h4>
                </div>
                <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300">
                    <p className="italic text-sm text-gray-600 mb-4">
                        “The AI-based prescription system is a game-changer. No more misplaced paper slips!”
                    </p>
                    <h4 className="font-semibold text-gray-800 text-sm">— Rajiv S., Bengaluru</h4>
                </div>
                <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300">
                    <p className="italic text-sm text-gray-600 mb-4">
                        “MediVerse keeps me on track with medication reminders. Super convenient and modern.”
                    </p>
                    <h4 className="font-semibold text-gray-800 text-sm">— Sneha M., Pune</h4>
                </div>
            </div>

        </div>
    )
}

export default About
