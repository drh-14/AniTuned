'use client'
import { useRouter } from 'next/navigation';
import { Button } from '@mui/material';
export default function Navbar(){
    const router = useRouter();
    return(
        <div className = 'h-1/4 bg-indigo-500 w-full p-4 inline-block'>
            <button onClick = {() => router.push('/homepage')} className = 'text-4xl'>AniTuned</button>
            <div className = 'float-right'>
                <div className = 'flex gap-8'>
                    <Button onClick = {() => router.push('/profilePage')} sx= {{backgroundColor: "var(--color-purple-600)"}} variant = 'contained'>Your Profile</Button>
                    <Button onClick = {() => router.push('/')} sx= {{backgroundColor: "var(--color-purple-600)"}} variant = 'contained'>Log Out</Button>
            </div>
            </div>

        </div>
    )
}