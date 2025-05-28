'use client'
import { Button } from '@mui/material';
export default function LinkProfile(){
    return(
        <div className = 'flex flex-col items-center justify-center mt-32'>
            <Button sx ={{font: 'Poppins', backgroundColor: 'var(--color-indigo-500)'}}  size = "large" variant = 'contained'>Link AniList Profile</Button>
        </div>
    )
}