import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import TarotCard from "./TarotCard"
export default function TarotShow({cards}) {
    const { id } = useParams()
    const [currentCard, setCurrentCard] = useState({})
    const [file, setFile] = useState(null)


    useEffect(() => {
        const showCard = cards.filter(card => card.id === Number(id))[0]  
        setCurrentCard(showCard)
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault()
        let formData = new FormData()
        formData.append("file", file)
        fetch(`http://localhost:3001/cards/${currentCard.id}`, {
            method: "PATCH",
            body: formData
        })
    }

    return (
        <div>
            <TarotCard card={currentCard} />
            {!!currentCard.image_url ? <img src={currentCard.image_url} width="300px" height="300px" ></img> : 
            <form onSubmit={handleSubmit} > 
                <input onChange={(e) => setFile(e.target.files[0])} type="file" name="file"></input>
                <br/>
                <button>Add Image</button>
            </form>
            }
        </div>
    )
}
