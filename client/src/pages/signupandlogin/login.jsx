import { useState } from 'react'
import './login.css'
import cookie from "react-cookies"

function Login() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    function toRegister() {
        window.location.href = '/register'
    }

    async function loginUser(event) {
        event.preventDefault()

        const response = await fetch('http://localhost:8888/api/login',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })

        const data = await response.json()

        
        if(response.status === 200) {
            console.log(data.data)
            cookie.save('token', data.data.token)
            cookie.save('userId',data.data.user._id)
            window.location.href = '/home'
        } else {
            alert(data.msg)
        }
    }

    return(
        <div>
            <div className="relative min-h-screen flex">
            <div
                className="
                    flex flex-col
                    sm:flex-row
                    items-center
                    md:items-start
                    sm:justify-center
                    md:justify-start
                    flex-auto
                    min-w-0
                    bg-white
                "
            >
                <div
                    className="
                        sm:w-1/2
                        xl:w-3/5
                        h-full
                        hidden
                        md:flex
                        flex-auto
                        items-center
                        justify-center
                        p-10
                        overflow-hidden
                        bg-purple-900
                        text-white
                        bg-no-repeat bg-cover
                        relative
                    "
                >
                    <div
                        className="
                            absolute
                            bg-gradient-to-b
                            from-indigo-600
                            to-blue-500
                            opacity-75
                            inset-0
                            z-0
                        "
                    ></div>
                    <div className="w-full max-w-lg z-10">
                        <div className="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6"
                            >Welcome to Ambook</div>
                    </div>
                    <ul className="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div
                    className="
                        md:flex md:items-center md:justify-center
                        w-full
                        sm:w-auto
                        md:h-full
                        w-2/5
                        xl:w-2/5
                        p-8
                        md:p-10
                        lg:p-14
                        sm:rounded-lg
                        md:rounded-none
                        bg-white
                    "
                >
                    <div className="max-w-md w-full mx-auto space-y-8">
                        <div className="text-center">
                            <h2 className="mt-6 text-3xl font-bold text-gray-900">Welcome back </h2>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                            <span className="h-px w-16 bg-gray-200"></span>
                            <span className="text-gray-300 font-normal">Log in by using email</span>
                            <span className="h-px w-16 bg-gray-200"></span>
                        </div>
                        <form className="mt-8 space-y-6"  onSubmit={loginUser}>
                            <div className="relative">
                                <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide"
                                    >Email</label>
                                <input
                                    className="
                                        w-full
                                        text-base
                                        px-4
                                        py-2
                                        border-b border-gray-300
                                        focus:outline-none
                                        rounded-2xl
                                        focus:border-indigo-500
                                    "
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Please enter email"
                                    required="required"
                                />
                            </div>
                            <div className="mt-8 content-center">
                                <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide"
                                    >Password</label>
                                <input
                                    className="
                                        w-full
                                        content-center
                                        text-base
                                        px-4
                                        py-2
                                        border-b
                                        rounded-2xl
                                        border-gray-300
                                        focus:outline-none focus:border-indigo-500
                                    "
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter the password"
                                    required="required"
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="
                                        w-full
                                        flex
                                        justify-center
                                        bg-gradient-to-r
                                        from-indigo-500
                                        to-blue-600
                                        hover:bg-gradient-to-l
                                        hover:from-blue-500
                                        hover:to-indigo-600
                                        text-gray-100
                                        p-4
                                        rounded-full
                                        tracking-wide
                                        font-semibold
                                        shadow-lg
                                        cursor-pointer
                                        transition
                                        ease-in
                                        duration-500
                                    "
                                    >Log in</button>
                            </div>
                            <p
                                className="
                                    items-center
                                    justify-center
                                    mt-10
                                    text-center text-md text-gray-500
                                "
                            >
                                <span>No account?</span>
                                <button onClick={toRegister} className="
                                    text-indigo-400
                                    hover:text-blue-500
                                    no-underline
                                    hover:underline
                                    cursor-pointer
                                    transition
                                    ease-in
                                    duration-300
                                ">    Register now</button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Login