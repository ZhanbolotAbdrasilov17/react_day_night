import { useState } from "react"

export const Window = () => {
    const [day, setDay] = useState('')
    const [counter, setCounter] = useState(0)


    const handleClick = () => {
        setCounter(counter + 1)
        if (counter % 2 === 0) {
            setDay('Day') 
        } else {
            setDay('')
        }
    }

    return (
        <div>
            <div className={`window${day}`} onClick={handleClick}>
                <div className={`circle${day}`}></div>
            </div>
        </div>
    )
}