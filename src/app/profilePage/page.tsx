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
                <h1 className = 'text-4xl'>Your Linked MyAnimeList Profile</h1>
                <h1>View MAL Profile</h1>
                <Button variant = 'contained'>Change Linked Profile</Button>
            </div>
        </div>
    )
}