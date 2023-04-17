import { collection, onSnapshot } from 'firebase/firestore'
import { auth, db } from "../firebase";
import React, { useState, useEffect } from 'react'


export default function Combat() {
    const [enhp, setEnhp] = useState()
    const [endmg, setEndmg] = useState()
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
        setStrMod(Math.floor((stats[4]['rolls'][0] - 10) / 2))
        setDexMod(Math.floor((stats[4]['rolls'][1] - 10) / 2))
        setConMod(Math.floor((stats[4]['rolls'][2] - 10) / 2))
        setIntMod(Math.floor((stats[4]['rolls'][3] - 10) / 2))
        setWisMod(Math.floor((stats[4]['rolls'][4] - 10) / 2))
        setChaMod(Math.floor((stats[4]['rolls'][5] - 10) / 2))
        if (stats[2]['class'] === 'Barbarian') {
            setHp(Number(12 + conMod))
            setDmg(Number(10 + strMod))
        } else if (stats[2]['class'] === 'Bard') {
            setHp(Number(8 + conMod))
            setDmg(Number(8 + strMod))
        } else if (stats[2]['class'] === 'Cleric') {
            setHp(Number(8 + conMod))
            setDmg(Number(6 + strMod))
        } else if (stats[2]['class'] === 'Druid') {
            setHp(Number(8 + conMod))
            setDmg(Number(6 + strMod))
        } else if (stats[2]['class'] === 'Fighter') {
            setHp(Number(10 + conMod))
            setDmg(Number(12 + strMod))
        } else if (stats[2]['class'] === 'Monk') {
            setHp(Number(8 + conMod))
            setDmg(Number(4 + strMod))
        } else if (stats[2]['class'] === 'Paladin') {
            setHp(Number(10 + conMod))
            setDmg(Number(10 + strMod))
        } else if (stats[2]['class'] === 'Ranger') {
            setHp(Number(10 + conMod))
            setDmg(Number(6 + dexMod))
        } else if (stats[2]['class'] === 'Rogue') {
            setHp(Number(8 + conMod))
            setDmg(Number(4 + dexMod))
        } else if (stats[2]['class'] === 'Sorcerer') {
            setHp(Number(6 + conMod))
            setDmg(Number(3 + chaMod))
        } else if (stats[2]['class'] === 'Warlock') {
            setHp(Number(8 + conMod))
            setDmg(Number(4 + strMod))
        } else if (stats[2]['class'] === 'Wizard') {
            setHp(Number(6 + conMod))
            setDmg(Number(3 + intMod))
        } console.log(dmg, hp)
    }

    const enterCombat = () => {
        setInit(Math.floor(Math.random() * 20) + 1)
        setEndmg(4)
        setEnhp(9)
        
    }

    const fightCombat = () => {
        if (stats[2]['class'] === 'Barbarian') {
            
        }
    }


  return (
    <div>
        <button onClick={currentStats}>Check stats</button>
        <button onClick={prepareCombat}>Prepare for Combat!</button>
        <div class="nes-container with-title is-dark is-centered">
            <p class="title">- Character Stats -</p>
            <div class="lists">
                <ul className="nes-list is-disc">
                    <li>{hp > 0 ? <p style={{color: 'green'}}>HP: {hp}</p> :<p>no stats</p>}</li>
                    <li>{dmg > 0 ? <p style={{color: 'red'}}>Damage: {dmg}</p> :<p>no stats</p>}</li>
                </ul>
            </div>
        </div>
        <button onClick={enterCombat}>Enter Combat!</button>
        <div class="nes-container with-title is-dark is-centered">
            <p class="title">- Enemy Stats -</p>
            <div class="lists">
                <ul className="nes-list is-disc">
                    <p>Skeleton:</p>
                    <li>{enhp > 0 ? <p style={{color: 'green'}}>HP: {enhp}</p> :<p>HP: ???</p>}</li>
                    <li>{endmg > 0 ? <p style={{color: 'red'}}>Damage: {endmg}</p> :<p>Damage: ???</p>}</li>
                </ul>
            </div>
        </div>
    </div>
  )

}