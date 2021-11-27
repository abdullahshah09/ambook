import { useState } from 'react'
import './register.css'

function Register() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [phoneNumber,setPhoneNumber] = useState('')
    const [password,setPassword] = useState('')

    async function registerUser(event) {
        event.preventDefault()

        const response = await fetch('http://localhost:8888/api/register',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                phoneNumber,
                password,
            }),
        })

        const data = await response.json()

        alert(data.msg)
        if(response.status === 200) {
            window.location.href = '/'
        }
    }

    return(
        <div>
            <div className="w-full md:w-1/2  md:px-10 mx-auto">
                    <div className="text-center mb-10">
                        <h1 className="font-bold text-3xl text-gray-900">Register</h1>
                    </div>
                    <div>
                        <form onSubmit={registerUser}>
                            <div className="flex -mx-3">
                                <div className="w-1/2 px-3 mb-5">
                                    <label className="text-xs font-semibold px-1">Name</label>
                                    <div className="flex">
                                        <div
                                            className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                            <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                                        </div>
                                        <input type="text"
                                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                            placeholder="Enter the name"
                                            required="required"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)} />
                                    </div>
                                </div>
                                <div className="w-1/2 px-3 mb-5">
                                    <label className="text-xs font-semibold px-1">Phone Number</label>
                                    <div className="flex">
                                        <div
                                            className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                            <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                                        </div>
                                        <input type="tel"
                                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                            placeholder="Enter the phone number"
                                            value={phoneNumber}
                                            required="required"
                                            onChange={(e) => setPhoneNumber(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <label className="text-xs font-semibold px-1">Email</label>
                                    <div className="flex">
                                        <div
                                            className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                            <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                                        </div>
                                        <input type="email"
                                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                            placeholder="Enter the email"
                                            value={email}
                                            required="required"
                                            onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-12">
                                    <label className="text-xs font-semibold px-1">Password</label>
                                    <div className="flex">
                                        <div
                                            className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                            <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                                        </div>
                                        <input type="password"
                                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                            placeholder="Enter the password"
                                            value={password}
                                            required="required"
                                            onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <input type="submit" value="Register" className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"/>
                                </div>
                            </div>
                        </form>
                    </div>
            </div>
            
        </div>
    )
}

export default Register