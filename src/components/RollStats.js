import React, { useState } from 'react'
import diceImage1 from '../images/dice-six-faces-one.png'
import diceImage2 from '../images/dice-six-faces-two.png'
import diceImage3 from '../images/dice-six-faces-three.png'
import diceImage4 from '../images/dice-six-faces-four.png'
import diceImage5 from '../images/dice-six-faces-five.png'
import diceImage6 from '../images/dice-six-faces-six.png'



export default function RollStats() {
    const [myRolls, setMyRolls] = useState()
    const [roll1, setRoll1] = useState()
    const [roll2, setRoll2] = useState()
    const [roll3, setRoll3] = useState()
    const [roll4, setRoll4] = useState()
    const [roll5, setRoll5] = useState()

    let diceImages = [
        diceImage1,
        diceImage2,
        diceImage3,
        diceImage4,
        diceImage5,
        diceImage6,

    ]

    function rollDice() {
        var rolled = []
        var newRolled = []
        var checklist = true
        rolled.push((Math.floor(Math.random() * 6) + 1));
        rolled.push((Math.floor(Math.random() * 6) + 1));
        rolled.push((Math.floor(Math.random() * 6) + 1));
        rolled.push((Math.floor(Math.random() * 6) + 1));
        rolled.push((Math.floor(Math.random() * 6) + 1));
        var min = Math.min(...rolled);
        newRolled = (rolled.filter((e) => {
            
            return e !== min}
        ))
        console.log(rolled)
        console.log(min)
        console.log(newRolled)
    }
      
  return (
    <div>
        <button onClick={rollDice}>Roll Stats!</button>
        <img src='#' alt='dice'></img>
        <img src='#' alt='dice'></img>
        <img src='#' alt='dice'></img>
        <img src='#' alt='dice'></img>
        <img src='#' alt='dice'></img>
    </div>
  )
}
