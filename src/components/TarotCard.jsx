import React from 'react'

export default function TarotCard({card}) {
    const {id, name, value, meaning_up, meaning_reverse, desc, card_type} = card

    return (
        <div>
              <h3>{name}</h3>
              <p>value</p>
              <p>{meaning_up}</p>
              <p>{meaning_reverse}</p>
              <p>{desc}</p>
            <p>{card_type}</p>
        </div>
    )
}
