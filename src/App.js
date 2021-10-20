import './App.css';
import React, {useEffect, useState} from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import TarotCard from "./components/TarotCard"
import TarotContainer from "./components/TarotContainer"
import Welcome from "./components/Welcome"
import  NavBar from "./components/NavBar"
import TarotShow from "./components/TarotShow"

function App() {

  const [cards, setCards] = useState([])
  const [requesting, setRequesting] = useState(true)


  useEffect(() => {
    setRequesting(true)
    fetch("http://localhost:3001/cards")
    .then(resp => resp.json())
    .then((cardsData) => {
      setCards(cardsData)
      setRequesting(false)
    })
  }, [])


  return (
    <div>
      {requesting ? 
      <p>Loading...</p> : 
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/cards/:id"><TarotShow cards={cards} /></Route>
          <Route exact path="/cards" ><TarotContainer cards={cards} /></Route>
          <Route exact path="/" ><Welcome randomCard={cards[0]} /></Route>
        </Switch>
      </Router>
      }
    </div> 
  );
}

export default App;
