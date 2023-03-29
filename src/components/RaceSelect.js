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
    <div>
    <button onClick={() => setUserRace('Dwarf')}>Dwarf</button>
      <button onClick={() => setUserRace('Elf')}>Elf</button>
      <button onClick={() => setUserRace('Halfling')}>Halfling</button>
      <button onClick={() => setUserRace('Human')}>Human</button>
      <button onClick={() => setUserRace('Dragonborn')}>Dragonborn</button>
      <button onClick={() => setUserRace('Gnome')}>Gnome</button>
      <button onClick={() => setUserRace('Half-Elf')}>Half-Elf</button>
      <button onClick={() => setUserRace('Half-Orc')}>Half-Orc</button>
      <button onClick={() => setUserRace('Tiefling')}>Tiefling</button>
      <h3>{userRace}</h3>
      </div>
      <div>
      {allRaces.map((item, index) => {
        if (userRace === item.name) {
          return (
          <div key={index}>
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
    </>
  )
}
