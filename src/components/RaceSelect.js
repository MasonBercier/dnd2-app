import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";


export default function RaceSelect() {
  const [userRace, setUserRace] = useState('')
  const [allRaces, setAllRaces] = useState([]);

  const navigate = useNavigate()
  

  useEffect(() => {
    fetch("https://api.open5e.com/races/")
        .then(response => response.json())
        .then(json => setAllRaces(json.results))
    }, [userRace]);

    const addRaceToDb = () => {
      setDoc(doc(db, "users", auth.currentUser.uid, "character", 'race'), {
        race: userRace
      })
      navigate('/alignmentselect')
    }

  return (
    <>
     <h1 className='RaceTitle'>Choose your race</h1>
    <div className="RaceButtons" data-columns="4" >
      {allRaces.map((item, index) => {
          return (
          <div key={index} >
            <button type="button" className="nes-btn is-primary" onClick={() => setUserRace(item.name)}>{item.name}</button>
          </div>
          )
        })}
    </div>
      <div>
      {allRaces.map((item, index) => {
        if (userRace === item.name) {
          return (
          <div key={index} className="nes-container is-dark with-title is-centered">
            <p className="title">{userRace}</p>
            <p>{item.desc}</p>
            <p>{item.asi_desc}</p>
            <p>{item.age}</p>
            <p>{item.alignment}</p>
            <p>{item.size}</p>
            <p>{item.traits}</p>
          </div>
          )} else {
            return ''
          }
      })}
    </div>
      <div className="SaveRaceButton">
        <button className="nes-btn is-success" onClick={addRaceToDb}>Save Race!</button>
      </div>
    </>
  )
}
