import React from "react";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import {  collection, onSnapshot, query } from "firebase/firestore";
import { doc, deleteDoc } from "firebase/firestore";
import { UserAuth } from "../context/AuthContext";
import { removeDuplicates } from "../Config";
import { Link } from "react-router-dom";



const WatchList1 =({item})=>{

const { user } = UserAuth();

async function deleteWatchList() {
    await deleteDoc(doc(db, `${user?.email}-AddToWatch`, `${item.id}`));
  }
    
return(
        <div className="flex items-baseline flex-col m-[0px] justify-evenly md:ml-[40px] "> 
             <img alt="img" src={item?.url[0].snippet?.thumbnails?.medium?.url}className="md:h-[200px] w-[100%] mt-[20px] justify-center items-center md:ml-[17px]  object-cover rounded" />
             <h1 className="flex overflow-hidden text-lg w-[250px] truncate font-bold mt-[5px]">{item?.url[0].snippet?.title}</h1>

            <div className="flex gap-[10px]">
            <Link to={`/player/${item?.url[0]?.id}`}><button className="border-[2px] p-[10px] bg-gray-100">Play</button></Link>
            <button className="border-[2px] p-[10px] bg-gray-100" onClick={() => deleteWatchList()} >Remove from WatchList</button>
        </div>
            
        </div>
        

        
    )
}

const WatchList =()=>{

    const [addTowatch, setTowatch]=useState([])
    const { user } = UserAuth();

        useEffect(() => {
        const q = query(collection(db, `${user?.email}-AddToWatch`));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let data = [];
          querySnapshot.forEach((doc) => {
            data.push({ ...doc.data(), id: doc.id });
          });
          
          setTowatch(removeDuplicates(data));
        });
        return () => unsubscribe();
      }, [user?.email]);



    return (
        <div className="flex flex-wrap w-full">
            
        {
            addTowatch?.map((item,index) => {
                return <WatchList1 item={item} key={index} />
            })
        }
        </div>
    )
}

export default WatchList;