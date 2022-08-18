import { SwipeDown } from '@mui/icons-material';
import React, { useState,useEffect } from 'react'
import Tindercard from 'react-tinder-card' 
import './TinderCard.css';
import axios from './axiosInstance.js';
// import {} from './global.d.ts'
// import { path } from 'path';
// import * from "./imgs/*";
// import path from 'path'

function TinderCard() {
    const [people,setPeople] = useState([
        // {
        //     name:"Elon Musk",
        //     url:require('./imgs/elonmusk.jpg')
        // },
        // {
        //     name:"Jef Bejos",
        //     url:require("./imgs/jeffbezos.jpg")
        // },
        // {
        //     name:"Donald Trumph",
        //     url:require("./imgs/trump.webp")
        // },
        // {
        //     name:"Vladimir Putin",
        //     url:require("./imgs/putin.jpg")
        //     // url:"./imgs/putin.jpg"
        // },
        
    ])
    // console.log(people)

    useEffect(()=>{
        async function fetchData(){
            const req = await axios.get("/tinder/cards");
            let reqData = req.data.map((d)=>{
                const i = "./imgs/putin.jpg";
                return {name:d.name,url:d.imgURL};
            });
            console.log(reqData)
            setPeople(reqData)
        }

        fetchData();
    },[])
    
    const outOfFrame = (name)=>{
        console.log(`${name} is out of frame`)
    }
    const swiped = (direction,nameToDelete)=>{
        console.log(`${nameToDelete} is deleted`)
    }
  return (

    <div className='tinderCard'>
        <div className='tinderCard__cardContainer'>
        {people.map((person)=>{
            const p_url = person.url;
            console.log(p_url)
            return <Tindercard 
                className="swipe"
                key={person.name}
                preventSwipe={["up","down"]}
                onSwipe={(dir)=>swiped(dir,person.name)}
                onCardLeftScreen = {()=>outOfFrame(person.name)}
            >
                
                <div 
                    // style = {{backgroundImage:`url(${p_url})`}}
                    className='card'
                    
                >
                    <img className='card' src={p_url} />
                    <h3>{person.name}</h3>
                </div>
            </Tindercard>;
        })}
        </div>
        
    </div>
  )
} 

export default TinderCard;