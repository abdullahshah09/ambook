import { useState } from 'react'
import './login.css'

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

        alert(data.msg)
        if(response.status == 200) {
            
            window.location.href = '/home'
        }
    }

    return(
        <div>
            <div class="relative min-h-screen flex">
            <div
                class="
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
                    class="
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
                        class="
                            absolute
                            bg-gradient-to-b
                            from-indigo-600
                            to-blue-500
                            opacity-75
                            inset-0
                            z-0
                        "
                    ></div>
                    <div class="w-full max-w-lg z-10">
                        <div class="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6"
                            >Welcome to Ambook</div>
                    </div>
                    <ul class="circles">
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
                    class="
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
                    <div class="max-w-md w-full mx-auto space-y-8">
                        <div class="text-center">
                            <h2 class="mt-6 text-3xl font-bold text-gray-900">Welcome back </h2>
                        </div>
                        <div class="flex items-center justify-center space-x-2">
                            <span class="h-px w-16 bg-gray-200"></span>
                            <span class="text-gray-300 font-normal">Log in by using email</span>
                            <span class="h-px w-16 bg-gray-200"></span>
                        </div>
                        <form class="mt-8 space-y-6"  onSubmit={loginUser}>
                            <div class="relative">
                                <label class="ml-3 text-sm font-bold text-gray-700 tracking-wide"
                                    >Email</label>
                                <input
                                    class="
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
                                />
                            </div>
                            <div class="mt-8 content-center">
                                <label class="ml-3 text-sm font-bold text-gray-700 tracking-wide"
                                    >Password</label>
                                <input
                                    class="
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
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    class="
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
                                class="
                                    items-center
                                    justify-center
                                    mt-10
                                    text-center text-md text-gray-500
                                "
                            >
                                <span>No account?</span>
                                <a
                                    href="#"
                                    target="_blank"
                                    class="
                                        text-indigo-400
                                        hover:text-blue-500
                                        no-underline
                                        hover:underline
                                        cursor-pointer
                                        transition
                                        ease-in
                                        duration-300
                                    "
                                    ><button onClick={toRegister}>    Register now</button></a
                                >
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>







            {/* <h1>Login</h1>
            <form onSubmit={loginUser}>
                <input 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text" 
                placeholder="Email"
                />
                <br/>
                <input 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password" 
                placeholder="Password"
                />
                <br/>
                <input type="submit" value="Login"/>
                <input type="button" class= "w-10 h-10 bg-green-400 text-black text-sm"  onClick={toRegister} value="Register" />
            </form> */}
        </div>
    )
}

export default Login