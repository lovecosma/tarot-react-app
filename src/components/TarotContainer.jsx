import React from 'react'
import TarotCard from "./TarotCard"

export default function TarotContainer({cards}) {
    return (
        <div>
            {cards.map(card => <TarotCard card={card}/> )}
        </div>
    )
}
