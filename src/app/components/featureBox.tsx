import Image, { StaticImageData } from 'next/image';
export default function FeatureBox(props: {imageLink: StaticImageData, text:string, width: number, height: number}){
    return(
        <div className = 'flex flex-col gap-16 items-center w-1/4 p-4'>
            <div className = 'text-3xl'>{props.text}</div>
            <Image className = 'w-max h-auto' src = {props.imageLink} alt = ""></Image>
        </div>
    )
}