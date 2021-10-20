import React from 'react'
import TarotCard from "./TarotCard"
export default function Welcome({randomCard}) {
    return (
        <div>
           <h1>Welcome</h1> 
           <br/>
           <h2>Card of the Day:</h2>
           <br/>
           <TarotCard card={randomCard}/>
        </div>
    )
}
