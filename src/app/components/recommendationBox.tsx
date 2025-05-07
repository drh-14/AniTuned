import Entry, {EntryProps} from '../components/entry';
export default function RecommendationBox(props: {isAnime: boolean, entries: EntryProps[]}){
    return(
        <div className = 'flex flex-col gap-12 items-center'>
            <h1 className = 'text-4xl'>Your Recommended {props.isAnime ? "Anime" : "Manga"}</h1>
            <div className = 'flex justify-center overflow-y-auto gap-8'>
                {props.entries.map((entry) => <Entry title = {entry.title} description = {entry.description} imageLink = {entry.imageLink} malLink = {entry.malLink}></Entry>)}
            </div>
        </div>
    )
}