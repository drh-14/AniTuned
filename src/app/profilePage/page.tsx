'use client'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Navbar from '../components/navbar';
import { Button } from '@mui/material';
export default function ProfilePage(){
    return(
        <div className = 'flex flex-col gap-16 items-center'>
            <Navbar></Navbar>
            <div className = 'flex flex-col items-center gap-8'>
                <h1 className = 'text-4xl'>Your Linked AniList Profile</h1>
                <h1>View AniList Profile</h1>
                <Button sx ={{font: 'Poppins', backgroundColor: 'var(--color-indigo-500)'}} variant = 'contained'>Change Linked Profile</Button>
            </div>
        </div>
    )
}