export default function Signup(){
    return(
        <div className = 'flex flex-col gap-12 items-center mt-24'>
            <div className = 'flex flex-col gap-8 w-3/4 items-center'>
                <input className = 'p-4 w-1/3 border-2 border-solid' placeholder = "Enter Username"></input>
                <input className = 'p-4 w-1/3 border-2 border-solid' placeholder = "Enter email"></input>
                <input className = 'p-4 w-1/3 border-2 border-solid' placeholder = "Enter password"></input>
                <button className = 'rounded-md p-4 border-solid border-2'>Sign Up</button>
            </div>

        </div>
    )
}