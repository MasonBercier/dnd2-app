import React, { useState, useEffect } from "react";



export default function RaceSelect() {
  const [userRace, setUserRace] = useState('')
  const [allRaces, setAllRaces] = useState([]);
  

  useEffect(() => {
    fetch("https://api.open5e.com/races/")
        .then(response => response.json())
        .then(json => setAllRaces(json.results))
    }, [userRace]);



  return (
    <>
     <h1 className='RaceTitle'>Choose your race</h1>
    <div className="RaceButtons" data-columns="4" >
      {allRaces.map((item, index) => {
          return (
          <div key={index} >
            <button type="button" class="nes-btn is-primary" onClick={() => setUserRace(item.name)}>{item.name}</button>
          </div>
          )
        })}
    </div>
      <div>
      {allRaces.map((item, index) => {
        if (userRace === item.name) {
          return (
          <div key={index} class="nes-container is-dark with-title is-centered">
            <p class="title">{userRace}</p>
            <p>{item.desc}</p>
            <p>{item.asi_desc}</p>
            <p>{item.age}</p>
            <p>{item.alignment}</p>
            <p>{item.size}</p>
            <p>{item.languages}</p>
            <p>{item.vision}</p>
            <p>{item.traits}</p>
          </div>
          )} else {
            return ''
          }
      })}
    </div>
      <div className="SaveRaceButton">
        <button class="nes-btn is-success">Save Race!</button>
      </div>
    </>
  )
}
