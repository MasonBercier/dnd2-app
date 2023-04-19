import { setDoc, doc, collection, onSnapshot } from "firebase/firestore";
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";


export default function RollStats() {
    const [myRolls, setMyRolls] = useState([])
    const [stats, setStats] = useState([])
    const [bonusCheck, setBonusCheck] = useState('true')

    const navigate = useNavigate()


    const currentStats = async () => {
        const statArr = []
        const subColRef = collection(db, "users", auth.currentUser.uid, "character")
        onSnapshot(subColRef, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                statArr.push(doc.data())
            })
            setStats(stats.concat(statArr))
            console.log(stats)
        })
        
    }

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
            console.log('Your rolls are full!', myRolls[0])
        }
    }

    const addAbilityScore = () => {
        setBonusCheck('false')
        console.log(bonusCheck, myRolls)
            if (stats[2]['race'] === 'Dwarf') {
                myRolls[2] += 2 }
            else if (stats[2]['race'] === 'Elf' || stats[2]['race'] === 'Halfling') {
                myRolls[1] += 2 
            }else if(stats[2]['race'] === 'Human') {
                myRolls[0] = myRolls[0] + 1
                myRolls[1] += 1
                myRolls[2] += 1
                myRolls[3] += 1
                myRolls[4] += 1
                myRolls[5] += 1
            } else if (stats[2]['race'] === 'Dragonborn') {
                myRolls[0] += 2
                myRolls[5] += 1
            } else if (stats[2]['race'] === 'Gnome') {
                myRolls[3] += 2
            }  else if (stats[2]['race'] === 'Half-Elf') {
                myRolls[5] += 2
                myRolls[0] += 1
                myRolls[1] += 1
            }else if (stats[2]['race'] === 'Half-Orc') {
                myRolls[0] += 2
                myRolls[2] += 1
            }  else if (stats[2]['race'] === 'Tiefling') {
                myRolls[3] += 1
                myRolls[5] += 2
            } 
    }

    const addRollsToDb = () => {
        setDoc(doc(db, "users", auth.currentUser.uid, "character", 'rolls'), {
          rolls: myRolls,
        })
        navigate('/nameselect')
    }
      
  return (
    <>  {stats.length <= 0 && 
        <div className='RollLoad'>
            <button className='nes-btn is-primary' onClick={currentStats}>Load Stats</button> 
        </div>}
        {stats.length > 0 && 
            <>
            {myRolls.length < 6 && 
                <div className='RollButton'>
                    <button button type="button" className="nes-btn is-success" onClick={rollDice}>Roll Stats!</button>
                </div>}
            {myRolls.length > 5 && 
                <> {bonusCheck === 'true' ? 
                    <div className="AddBonusButton">
                        <button className="nes-btn is-success" onClick={addAbilityScore}>Add Racial Bonus!</button> 
                    </div>
                    : <div className="SaveRollsButton">
                        <button className="nes-btn is-success" onClick={addRollsToDb}>Save Rolls!</button>
                    </div>
                    }</>}
            <div className="AllRolls">
            <div className='nes-container is-dark with-title is-centered'>
                    <p className="title">Strength</p>
                    <p>{myRolls.length > 0 ? <p>{myRolls[0]}</p> : <p>no stats</p>}</p>
                </div>
                <div className='nes-container is-dark with-title is-centered'>
                    <p className="title">Dexterity</p>
                    <p>{myRolls.length > 1 ? <p>{myRolls[1]}</p> : <p>no stats</p>}</p>
                </div>
                <div className='nes-container is-dark with-title is-centered'>
                    <p className="title">Constitution</p>
                    <p>{myRolls.length > 2 ? <p>{myRolls[2]}</p> : <p>no stats</p>}</p>
                </div>
                <div className='nes-container is-dark with-title is-centered'>
                    <p className="title">Intelligence</p>
                    <p>{myRolls.length > 3 ? <p>{myRolls[3]}</p> : <p>no stats</p>}</p>
                </div>
                <div className='nes-container is-dark with-title is-centered'>
                    <p className="title">Wisdom</p>
                    <p>{myRolls.length > 4 ? <p>{myRolls[4]}</p> : <p>no stats</p>}</p>
                </div>
                <div className='nes-container is-dark with-title is-centered'>
                    <p className="title">Charisma</p>
                    <p>{myRolls.length > 5 ? <p>{myRolls[5]}</p> : <p>no stats</p>}</p>
                </div>
            {/* {myRolls.map((item, index) => {
                return (
                    <div className="nes-container is-rounded is-dark">
                        <div key={index}>
                            <p>{item}</p>
                        </div>
                    </div>
                )
            })} */}
            </div>
        </>}
    </>
  )
}
