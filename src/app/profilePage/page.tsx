'use client'
import Navbar from '../components/navbar';
import { Button } from '@mui/material';
export default function ProfilePage(){
    return(
        <div className = 'flex flex-col gap-16 items-center'>
            <Navbar></Navbar>
            <h1 className = 'text-5xl'>Your preferences</h1>
            <div className = 'flex flex-col items-center gap-8'>
                <h1 className = 'text-4xl'>Your Linked MyAnimeList Profile</h1>
                <Button variant = 'contained'>Change Linked Profile</Button>
            </div>
        </div>
    )
}