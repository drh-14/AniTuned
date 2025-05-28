'use client'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Navbar from '../components/navbar';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
export default function ChangePreferences() {
    const router = useRouter();
    return (
        <div className = 'flex flex-col gap-8 items-center'>
            <Navbar></Navbar>
            <h1 className = 'text-4xl'>Your Preferred Genres</h1>
            <FormGroup className='bg-white text-black rounded-md p-4 overflow-auto'>
                <FormControlLabel control={<Checkbox />} label={"Romance"}></FormControlLabel>
                <FormControlLabel control={<Checkbox />} label={"Shonen"}></FormControlLabel>
            </FormGroup>
            <Button onClick = {() => router.push('/homepage')} variant = 'contained'>Change Preferences</Button>
        </div>
    )
}