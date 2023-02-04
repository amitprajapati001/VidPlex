import React from "react";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import {  collection, onSnapshot, query } from "firebase/firestore";
import { UserAuth } from "../context/AuthContext";
import { removeDuplicates } from "../Config";
import { Link } from "react-router-dom";



const HistoryCard =({item})=>{
    return(
        <div className="flex items-baseline flex-col m-[0px] justify-evenly md:ml-[40px] "> 
             <img alt="img" src={item?.snippet?.thumbnails?.high?.url} className="md:h-[200px] w-[100%] mt-[20px] justify-center items-center md:ml-[17px]  object-cover rounded" />
             <h1 className="flex overflow-hidden text-lg w-[250px] truncate font-bold mt-[5px]">{item?.snippet?.description}</h1>
        </div>
    )
}

const History =()=>{

    const [history, setHistory]=useState([])
    const { user } = UserAuth();

        useEffect(() => {
        const q = query(collection(db, `${user?.email}-History`));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          let data = [];
          querySnapshot.forEach((doc) => {
            data.push({ ...doc.data(), id: doc.id });
          });
          setHistory(removeDuplicates(data.map((item)=>item?.url[0])));
        });
        return () => unsubscribe();
      }, [user?.email]);

console.log("Myhistory", history);

    return (
        <div className="flex flex-wrap w-full">
        {
            history?.map((item,index) => {
                return <Link to={`/player/${item?.id}`  } key={index}  ><HistoryCard item={item} /></Link>
            })
        }
        </div>
    )
}

export default History;