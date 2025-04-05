import React, { useState } from 'react';
import { assets } from "../assets/assets";
import { useContext } from 'react';
import { AdminContext } from '../context/AdminContext';
import axios from 'axios'
import { toast } from 'react-toastify';
import { DoctorContext } from '../context/DoctorContext';




const Login = () => {

    const [state, setState] = useState('Admin')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { setAToken, backendUrl } = useContext(AdminContext)
    const { setDToken } = useContext(DoctorContext)

    const onSubmitHandler = async (event) => {
        event.preventDefault()

        try {
            if (state === 'Admin') {
                const { data } = await axios.post(backendUrl + '/api/admin/login', { email, password })
                if (data.success) {
                    localStorage.setItem('aToken', data.token)
                    setAToken(data.token)
                } else {
                    toast.error(data.message)
                }

            } else {
                const { data } = await axios.post(backendUrl + '/api/doctor/login', { email, password })
                if (data.success) {
                    localStorage.setItem('dToken', data.token)
                    setDToken(data.token)
                    console.log(data.token)
                } else {
                    toast.error(data.message)
                }
            }

        } catch (error) {

        }
    }

    const handleMouseOver = (e) => {
        // Randomize the position of the cat
        const randomX = Math.random() * 80; // 80% of the form width
        const randomY = Math.random() * 80; // 80% of the form height
        e.target.style.transform = `translate(${randomX}%, ${randomY}%)`;
    };

    return (
        <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
            <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>

                <p className='text-2xl font-semibold m-auto'><span className='text-primary'> {state} </span> Login </p>
                <div className='w-full'>
                    <p>Email</p>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="email" required />
                </div>
                <div className='w-full'>
                    <p>password</p>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="password" required />
                </div>
                <button className='bg-primary text-white w-full py-2 rounded-md text-base'>Login</button>
                {
                    state === 'Admin'
                        ? <p>Doctor Login? <span className='text-primary underline cursor-pointer' onClick={() => setState('Doctor')}>Click here</span></p>
                        : <p>Admin Login? <span className='text-primary underline cursor-pointer' onClick={() => setState('Admin')}>Click here</span></p>
                }

                {/* Cat Image */}
                <img
                    src={assets.cat_icon} // Update with the correct path to your cat image
                    alt="cat"
                    className=" cursor-pointer absolute w-14 h-14 transition-transform duration-100"
                    style={{ top: '20%', left: '50%', transform: 'translate(-50%, -50%)' }} // Centered initially
                    onMouseOver={handleMouseOver}
                />

            </div>
        </form>
    )
}

export default Login
