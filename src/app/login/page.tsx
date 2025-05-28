'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import GoogleButton from 'react-google-button'
export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    return (
        <div className='flex flex-col gap-8 items-center mt-24'>
            <div className=' flex gap-8 w-3/4 flex-col items-center'>
            <input onChange = {(e) => setUsername(e.target.value)} className = 'border-2 border-white rounded-md p-4 w-1/4' placeholder = "Username"></input>
            <input onChange = {(e) => setPassword(e.target.value)} type = "password" className = 'border-2 border-white rounded-md p-4 w-1/4' placeholder = "Password"></input>
            <button onClick = {() => router.push('/homepage')} className = 'p-4 rounded-md border-2 border-white border-solid w-1/8 hover:bg-gray-900'>Login</button>
            <GoogleButton></GoogleButton>
            <button onClick = {() => router.push('/forgot')}>Forgot Username/Password?</button>
            <button onClick = {() => router.push('/signup')}>Sign Up</button>
            </div>
        </div>
    )
}