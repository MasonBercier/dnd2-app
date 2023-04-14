import { setDoc, doc } from "firebase/firestore";
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";


export default function RollStats() {
    const [myRolls, setMyRolls] = useState([])

    const navigate = useNavigate()

    function rollDice() {
        var rolled = []
        var newRolled = []
        var checker = true
        if(myRolls.length < 6){
            rolled.push((Math.floor(Math.random() * 6) + 1));
            rolled.push((Math.floor(Math.random() * 6) + 1));
            rolled.push((Math.floor(Math.random() * 6) + 1));
            rolled.push((Math.floor(Math.random() * 6) + 1));
            rolled.push((Math.floor(Math.random() * 6) + 1));
            const min = Math.min(...rolled);
            for(let roll of rolled) {
                newRolled.push(roll)
                if(checker === true){
                    if(min === roll){
                        newRolled.pop(roll)
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

    const addRollsToDb = () => {
        setDoc(doc(db, "users", auth.currentUser.uid, "character", 'rolls'), {
          rolls: myRolls,
        })
        navigate('/newcharactersheet')
    }
      
  return (
    <div className='Rolls'>
        <button button type="button" className="nes-btn is-success" onClick={rollDice}>Roll Stats!</button>
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
                        {/* <button onClick={spliceItem} type="button" className="nes-btn is-error">Delete</button> */}
                        </tr>
                    </tbody>
                </table>
               </div>
              )
           })}
        <div className="SaveRollsButton">
            <button className="nes-btn is-success" onClick={addRollsToDb}>Save Rolls!</button>
        </div>
        </div>
    </div>
  )
}
