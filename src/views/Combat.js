import { collection, onSnapshot } from 'firebase/firestore'
import { auth, db } from "../firebase";
import React, { useState, useEffect } from 'react'


export default function Combat() {
    const [hp, setHp] = useState()
    const [dmg, setDmg] = useState()
    const [stats, setStats] = useState([])
    const [init, setInit] = useState()
    const [strMod, setStrMod] = useState()
    const [dexMod, setDexMod] = useState()
    const [conMod, setConMod] = useState()
    const [intMod, setIntMod] = useState()
    const [wisMod, setWisMod] = useState()
    const [chaMod, setChaMod] = useState()




    const currentStats = async () => {
        const statArr = []
        const subColRef = collection(db, "users", auth.currentUser.uid, "character")
        onSnapshot(subColRef, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                statArr.push(doc.data())
            })
            setStats(stats.concat(statArr))
        })
    }

    const prepareCombat = () => {
        setStrMod(Math.floor((stats[3]['rolls'][0] - 10) / 2))
        setDexMod(Math.floor((stats[3]['rolls'][1] - 10) / 2))
        setConMod(Math.floor((stats[3]['rolls'][2] - 10) / 2))
        setIntMod(Math.floor((stats[3]['rolls'][3] - 10) / 2))
        setWisMod(Math.floor((stats[3]['rolls'][4] - 10) / 2))
        setChaMod(Math.floor((stats[3]['rolls'][5] - 10) / 2))
        if (stats[1]['class'] === 'Barbarian') {
            setHp(8)
            setDmg(10)
        } else if (stats[1]['class'] === 'Bard') {
            setHp(12)
            setDmg(10)
        }
    }

    const enterCombat = () => {
        setInit(Math.floor(Math.random() * 20) + 1)
        
    }

    const fightCombat = () => {
        if (stats[1]['class'] === 'Barbarian') {
            
        }
    }

  return (
    <div>
        <button onClick={currentStats}>check</button>
        <button onClick={prepareCombat}>Prepare for Combat!</button>
    </div>
  )
}
