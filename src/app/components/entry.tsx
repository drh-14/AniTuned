export type EntryProps = {title: string, description: string, imageLink: string, malLink: string};
import Image from 'next/image';
import Link from 'next/link';
export default function Entry(props: EntryProps){
    return(
        <div className = 'flex flex-col gap-8 items-center border-2 border-black rounded-md h-300 overflow-auto bg-gray-500'>
            <h1>{props.title}</h1>
            <h1>{props.description}</h1>
            <Image src = {props.imageLink} alt = "" width = "100" height = "100"></Image>
            <Link href = {props.malLink}></Link>
        </div>
    )
}