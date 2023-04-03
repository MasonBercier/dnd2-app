import React, { useEffect, useState, useContext } from 'react'
import diceImage1 from '../images/dice-six-faces-one.png'
import diceImage2 from '../images/dice-six-faces-two.png'
import diceImage3 from '../images/dice-six-faces-three.png'
import diceImage4 from '../images/dice-six-faces-four.png'
import diceImage5 from '../images/dice-six-faces-five.png'
import diceImage6 from '../images/dice-six-faces-six.png'
import { AppContext } from '../context/AppContext'



export default function RollStats() {
    // const {myRolls} = useContext(AppContext)
    // const {setMyRolls} = useContext(AppContext)
    const [myRolls, setMyRolls] = useState([])
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
        var checker = true
        if(myRolls.length < 5){
            rolled.push((Math.floor(Math.random() * 6) + 1));
            rolled.push((Math.floor(Math.random() * 6) + 1));
            rolled.push((Math.floor(Math.random() * 6) + 1));
            rolled.push((Math.floor(Math.random() * 6) + 1));
            rolled.push((Math.floor(Math.random() * 6) + 1));
            const min = Math.min(...rolled);
            for(let i of rolled) {
                newRolled.push(i)
                if(checker === true){
                    if(min === i){
                        newRolled.pop(i)
                        checker = false
                    }
                }    
            }
            const sum = newRolled.reduce((partialSum, a) => partialSum + a, 0);
            setMyRolls(myRolls => [...myRolls, sum])
        } else {
            console.log('Your rolls are full!')
        }
    }

    function spliceOutItem(index) {
       myRolls.splice(index, index + 1)
      }
      
  return (
    <div>
        <button onClick={rollDice}>Roll Stats!</button>
        <div className="AllRolls">
          {myRolls.map((item, index) => {
              return (
               <div key={index}>
                <table id="dsTable">
                    <tbody>
                        <tr>
                        <td>Rolls</td>
                        </tr>
                        <tr>
                        <td>{item}</td>
                        <td><small>{index + 1}</small></td>
                        <td><input type="button" value="Delete" onClick={spliceOutItem}/></td>
                        </tr>
                    </tbody>
                </table>
               </div>
              )
           })}

        </div>
    </div>
  )
}
