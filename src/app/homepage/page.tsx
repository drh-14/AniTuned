'use client'
import RecommendationBox from '../components/recommendationBox';
import Navbar from '../components/navbar';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
export default function Homepage(){
    const router = useRouter();
    return(
        <div className = 'flex flex-col items-center gap-40 mb-8'>
            <Navbar></Navbar>
            <h1 className = 'text-5xl'>Welcome Darren</h1>
            <div className = 'flex flex-col items-center gap-50'>
            <RecommendationBox isAnime = {true}  entries = {[]}></RecommendationBox>
            <RecommendationBox isAnime = {false} entries = {[]}></RecommendationBox>
            </div>
            <Button onClick = {() => router.push('/changePreferences')} sx ={{font: 'Poppins', backgroundColor: 'var(--color-indigo-500)'}} size = "large" variant = "contained">Modify Preferences</Button>
        </div>
    )
}