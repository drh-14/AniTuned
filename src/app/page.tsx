'use client'
import { Button } from '@mui/material';
import FeatureBox from '../app/components/featureBox';
import anilistprofile from './anilistprofile.png'
import filters from './filters.png';
import ratings from './ratings.png'
import { useRouter } from 'next/navigation'; 
export default function Home() {
  const router = useRouter();
  return (
    <div className = 'flex flex-col gap-50 items-center mt-24 mb-24'>
      <div className = 'flex flex-col items-center gap-24'>
      <div className = 'text-5xl'>Welcome to AniTuned</div>
      <div className = 'text-4xl'>Your key to finding new anime and manga relevant to you.</div>
      </div>
      <div className = 'text-5xl'>Features</div>
      <div className = 'flex gap-12 justify-center'>
      <FeatureBox width = {1200} height = {1200} text = "Import your MyAnimeList profile, enabling recommendations fully relevant to you" imageLink = {anilistprofile}></FeatureBox>
      <FeatureBox width = {400} height = {400} text = "Adjust your preferences, giving you anime and manga that fits what you want right now" imageLink = {filters}></FeatureBox>
      <FeatureBox  width = {2000} height = {2000} text = "Rate recommended anime and manga, improving future recommendation relevance and quality" imageLink = {ratings}></FeatureBox>
      </div>
      <Button sx ={{font: 'Poppins', backgroundColor: 'var(--color-indigo-500)'}}size = "large" onClick = {() => router.push('/login')} variant = 'contained'>Get Started</Button>
    </div>
  );
}
