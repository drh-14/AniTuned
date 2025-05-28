'use client'
import { useState } from 'react';
export default function Forgot(){
    const [email, setEmail] = useState("");
    return(
        <div className = 'flex flex-col items-center gap-12 mt-24'>
            <h1 className = 'text-3xl'>Enter your email associated with your account. A reset email will be sent.</h1>
            <input className = 'p-4 w-1/4 border-2 border-solid' onChange = {(e) => setEmail(e.target.value)} placeholder = "Email"></input>
            <button className = 'p-4'>Reset username/password</button>
        </div>
    )
}