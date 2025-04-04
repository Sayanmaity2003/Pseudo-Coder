import React from "react";
import { FaLinkedinIn, FaTwitter, FaWhatsapp, FaGithub, FaTelegramPlane, FaInstagram } from "react-icons/fa";
import { assets } from "../assets/assets";

const Footer = () => {
    return (
        <footer className="md:mx-10 py-12">
            {/* ---- Footer Grid Layout ---- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-14 my-10 text-sm">

                {/* ----- Left Section ----- */}
                <div>
                    <img className="mb-5 w-40" src={assets.logo} alt="Prescripto Logo" />
                    <p className="text-gray-600 leading-6 md:w-4/5">
                        MediVerse simplifies healthcare. Stay connected with doctors, digitize prescriptions, and manage appointments effortlessly—all in one place. Empower your health journey today.
                    </p>
                </div>

                {/* ----- Middle Section ----- */}
                <div className="md:text-center">
                    <p className="text-xl font-semibold text-gray-800 mb-5">Company</p>
                    <ul className="flex flex-col gap-2 text-gray-600">
                        <li className="hover:text-[#0077B6] transition-colors cursor-pointer">Home</li>
                        <li className="hover:text-[#0077B6] transition-colors cursor-pointer">About Us</li>
                        <li className="hover:text-[#0077B6] transition-colors cursor-pointer">Contact Us</li>
                        <li className="hover:text-[#0077B6] transition-colors cursor-pointer">Privacy Policy</li>
                    </ul>
                </div>

                {/* ----- Right Section ----- */}
                <div className="md:text-right">
                    <p className="text-xl font-semibold text-gray-800 mb-5">Get in Touch</p>
                    <ul className="flex flex-col gap-2 text-gray-600">
                        <li className="font-medium">+91 9999999999</li>
                        <li>
                            <a href="mailto:mannasoumyajit47@gmail.com" className="hover:text-[#0077B6] transition-colors">
                                pseudocoder@gmail.com
                            </a>
                        </li>
                    </ul>

                    {/* ---- Social Media Icons ---- */}
                    <div className="flex justify-start md:justify-end gap-5 mt-6 text-2xl text-[#0077B6]">
                        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-[#0e76a8] hover:scale-110 transition-all duration-300">
                            <FaLinkedinIn />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-[#1DA1F2] hover:scale-110 transition-all duration-300">
                            <FaTwitter />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] hover:scale-110 transition-all duration-300">
                            <FaWhatsapp />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-black hover:scale-110 transition-all duration-300">
                            <FaGithub />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-[#0088cc] hover:scale-110 transition-all duration-300">
                            <FaTelegramPlane />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-[#E1306C] hover:scale-110 transition-all duration-300">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>

            {/* ---- Footer Bottom Text ---- */}
            <div className="text-center text-gray-600 mt-10 border-t pt-5">
                <p className="text-sm">
                    © 2025 <span className="font-semibold text-gray-800">Pseudo Coder</span>. Developer of <span className="text-[#0077B6] font-semibold">MediVerse</span> - All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
