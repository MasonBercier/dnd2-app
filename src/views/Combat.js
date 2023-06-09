import { collection, onSnapshot } from 'firebase/firestore'
import { auth, db } from "../firebase";
import React, { useState, useLayoutEffect } from 'react'
import { Loop } from '@mui/icons-material';


export default function Combat() {
    const [enName, setEnName] = useState()
    const [enSize, setEnSize] = useState()
    const [enType, setEnType] = useState()
    const [enemyList, setEnemyList] = useState([])
    const [enemyStats, setEnemyStats] = useState()
    const [enhp, setEnhp] = useState()
    const [endmg, setEndmg] = useState()
    const [eninit, setEninit] = useState()

    const [hp, setHp] = useState()
    const [curHp, setCurHp] = useState()
    const [dmg, setDmg] = useState()
    const [stats, setStats] = useState([])
    const [init, setInit] = useState()

    const [strMod, setStrMod] = useState()
    const [dexMod, setDexMod] = useState()
    const [conMod, setConMod] = useState()
    const [intMod, setIntMod] = useState()
    const [wisMod, setWisMod] = useState()
    const [chaMod, setChaMod] = useState()

    const [abilityCount, setAbilityCount] = useState()
    const [dodgeOdds, setDodgeOdds] = useState()

    const [prepCount, setPrepCount] = useState(0)
    const [pTurn, setpTurn] = useState(0)
    const [eTurn, seteTurn] = useState(0)
    const [turn, setTurn] = useState(0)
    const [abilityCheck, setAbilityCheck] =useState(0)

    const [enemy, setEnemy] = useState(0)
    let random = (Math.floor(Math.random() * 25)+ 1)



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
    // const getAllStats = () => {
    //     getEnemy();
    //     calculateStats()
    // }
    // useEffect(() => {
    //     fetch("api.open5e.com/monsters/?challenge_rating=0")
    //     .then(response => response.json())
    //     .then(json => setEnemyList(json.results))
    //     console.log(enemyList)
    //   }, [setHp]);
    useLayoutEffect(() => {
        fetch("https://api.open5e.com/monsters/?challenge_rating=0.5")
        // fetch("https://www.dnd5eapi.co/api/monsters?challenge_rating=0.5")
        .then(response => response.json())
        .then(json => setEnemyList(json.results))
    },[enemy])
    
    const calculateStats = () => {
        
        setPrepCount(1)

        setStrMod(Math.floor((stats[4]['rolls'][0] - 10) / 2))
        setDexMod(Math.floor((stats[4]['rolls'][1] - 10) / 2))
        setConMod(Math.floor((stats[4]['rolls'][2] - 10) / 2))
        setIntMod(Math.floor((stats[4]['rolls'][3] - 10) / 2))
        setWisMod(Math.floor((stats[4]['rolls'][4] - 10) / 2))
        setChaMod(Math.floor((stats[4]['rolls'][5] - 10) / 2))
        
        setDodgeOdds(5)

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
            setDodgeOdds(dodgeOdds + 10)
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
        }
       
    }
    
    const useAbiltiy = () => {
        if (stats[2]['class'] === 'Barbarian') {
           setDmg(dmg * 2)
        } else if (stats[2]['class'] === 'Bard') {
            setEndmg(0)
        } else if (stats[2]['class'] === 'Cleric') {
            setEnhp(enhp - 5)
            if(curHp + 5 < hp){
                setCurHp(curHp + 5)
            } else {setCurHp(hp)}
        } else if (stats[2]['class'] === 'Druid') {
            if(curHp + 8 < hp){
                setCurHp(curHp + 8)
            } else {setCurHp(hp)}
        } else if (stats[2]['class'] === 'Fighter') {
            //passive dodge
        } else if (stats[2]['class'] === 'Monk') {
            // passive ability
        } else if (stats[2]['class'] === 'Paladin') {
            setInit(999)
        } else if (stats[2]['class'] === 'Ranger') {
            setDmg(dmg * 2)
        } else if (stats[2]['class'] === 'Rogue') {
            //on enter combat sneak attack
        } else if (stats[2]['class'] === 'Sorcerer') {
            //passive burn chance damage each turn
        } else if (stats[2]['class'] === 'Warlock') {
            // passive familiar chance
        } else if (stats[2]['class'] === 'Wizard') {
            // passive stun chance
        } setAbilityCheck(1)
    }

    const getEnemyStats = () => {
        setEnemy(enemy + 1)
        console.log(random)
        console.log(enemyList)
        setEnemyStats(enemyList[random])
        if(typeof enemyStats !== 'object'){
            console.log('running')
        }
        console.log(enemyStats)
    }
    

    const enterCombat = () => {

        setPrepCount(2)
        if(enemy >= 1){
            setEnName(enemyStats['name'])
            setEnSize(enemyStats['size'])
            setEnType(enemyStats['type'])
            setEnhp(enemyStats['hit_points'])
            setEndmg(Math.floor(((enemyStats['hit_points'] / 2 + 1))))
            setInit(Math.floor(Math.random() * 20) + dexMod)
            setCurHp(hp)
            setEninit(Math.floor(Math.random() * 20) + 1)
            setTurn(1)
        }
    }

    const fightCombat = () => {
        if(init >= eninit) {
            setpTurn(1)
            seteTurn(2)
        } else {
            setpTurn(2)
            seteTurn(1)
        }
        if(turn == pTurn) {
            setEnhp(enhp - (Math.floor(Math.random() * dmg) + 1))
            setTurn(eTurn)
        } else if (turn == eTurn ) {
            setCurHp(curHp - (Math.floor(Math.random() * endmg) + 1))
            setTurn(pTurn)
        }
    }


  return (
    <div>
        {stats.length <= 0 &&
            <div className='RollLoad'>
                <button className='nes-btn is-primary' onClick={currentStats}>Load Character</button> 
            </div>}
        {stats.length > 0 && 
            <>
            <div className='RollLoad'>
                <button className='nes-btn is-primary' onClick={calculateStats}>Calculate Stats!</button>
            </div>
            <div className="nes-container with-title is-dark is-centered">
                <p className="title">- {stats[2]['class']} Stats -</p>
                <div className="lists">
                    <ul className="nes-list is-disc">
                        <li>{hp > 0 ? <p style={{color: 'green'}}>Max HP: {hp}</p> :<p>no stats</p>}</li>
                        <li>{curHp > 0 ? <p style={{color: 'green'}}>Current HP: {curHp}</p> :<p>Current HP: no stats</p>}</li>
                        <li>{dmg > 0 ? <p style={{color: 'red'}}>Damage: 1-{dmg}</p> :<p>no stats</p>}</li>
                        {init > 0 ? <li>Initiative: {init}</li> : <p>Initiative: no stat</p>}
                        {abilityCheck === 0 && <button className="nes-btn is-success" onClick={useAbiltiy} >Ability</button>}
                    </ul>
                </div>
            </div>
            {prepCount == 1 && <>
                {typeof enemyStats !== 'object' && <div className='FindEnemy'>
                    <button className="nes-btn is-error" onClick={getEnemyStats}>Find Enemy</button>
                </div>}
                {typeof enemyStats === 'object' && <div className='EnterCombat'>
                    <button className="nes-btn is-error" onClick={enterCombat}>Enter Combat!</button>
                </div>}</>}
            {prepCount == 2 && 
                <div className='FightCombat'>
                    <button className="nes-btn is-error" onClick={fightCombat}>Fight!</button>
                </div>}
            {/* {enhp > 0 &&  */}
                <div className="nes-container with-title is-dark is-centered">
                    <p className="title">- {enName}: Stats -</p>
                <div className="lists">
                    <ul className="nes-list is-disc">
                        {enSize ? <li> Size : {enSize}</li> : <p>: no stat</p>}
                        {enType ? <li> Type : {enType}</li> : <p>: no stat</p>}
                        <li>{enhp > 0 ? <p style={{color: 'green'}}>HP: {enhp}</p> :<p>HP: ???</p>}</li>
                        <li>{endmg ? <p style={{color: 'red'}}>Damage: 1-{endmg}</p> :<p>Damage: ???</p>}</li>
                        {eninit > 0 ? <li>Initiative: {eninit}</li> : <p>Initiative: no stat</p>}
                    </ul>
                </div>
            </div>
            {/* } */}
            </>} 
    </div>
  )

            }