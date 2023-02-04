import React, { useState, useEffect } from 'react'
import { useParams, useLocation  } from 'react-router-dom';
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { UserAuth } from "../context/AuthContext";
import ReactPlayer from 'react-player';
import {  onSnapshot, query } from "firebase/firestore";
import { removeDuplicates } from '../Config';

const Player = () => {

  const { user } = UserAuth();
  const location = useLocation();
  const [videoData,setVideoData] =useState([]);
  const {id}=useParams();
  const [like, setLike]=useState(false)
  const [addToWatch, setToWatch]=useState(false)
  const  [watchDataId,setWatchDataId]=useState([])
  const [localDataId,setLocalDataId]=useState([])
  console.log("Videodata", videoData);


  function addToLike(){
    if(like===false){
      setLike(true)
    }
  }

  function addToWatchList(){
    const videopath=location.pathname.slice(8)
    
    if(!idArray.includes(videopath)){
      setToWatch(true)
    }
  }

// Storing History in Firebase

useEffect(()=>{
  if(videoData.length!==0){
    async function setDataFun(e) {
          if (user) {
            await addDoc(collection(db, `${user?.email}-History`), {
              url: videoData
            });
          }}
        setDataFun();
   }
  
},[videoData])

 // Adding  Liked videos to Firebase


useEffect(()=>{
  if(videoData.length!==0){
    async function setDataFun(e) {
          if (user) {
            await addDoc(collection(db, `${user?.email}-Like`), {
              url: videoData
            });
          }}
        setDataFun();

   }
  
},[like])


//Addeed to watchList

useEffect(()=>{
  if(videoData.length!==0){
    async function setDataFun(e) {
          if (user) {
            await addDoc(collection(db, `${user?.email}-AddToWatch`), {
              url: videoData
            });
          }}
        setDataFun();
   }
  
},[addToWatch])


//  Data from  Watchlist

useEffect(() => {
  const q = query(collection(db, `${user?.email}-AddToWatch`));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
  let data = [];
    querySnapshot.forEach((doc) => {
      data.push({ ...doc.data(), id: doc.id });
    });
    
    setWatchDataId(removeDuplicates(data));
    setLocalDataId(data)
  });
  return () => unsubscribe();
}, [user?.email]);

const idArray=localDataId.map((item)=>item?.url[0].id)
console.log("localdata", localDataId)
console.log("idarray",idArray);
  
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a760903f0dmsh0ff0c07d17f9a99p130fffjsn4c276a048d96",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

useEffect(()=>{     
    async function getVideosData(){
        const data= await fetch(`https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`, options)
        const json =await data.json();
        setVideoData(json?.items)
    }
    getVideosData();    
    },[])

  

  return   (
    <div className='flex justify-start items-center flex-col   bg-black min-h-[100vh] '>
    <ReactPlayer  playing={true} playIcon controls url={`https://www.youtube.com/watch?v=${id}`} width="100%"  />
    <h1 className='text-2xl font-bold mt-[20px] text-center text-white'>{videoData[0]?.snippet?.title}</h1>
    <div className='flex gap-[40px] mt-[40px]'>

      <div className='flex gap-[10px] text-white justify-center items-center text-2xl font-bold cursor-pointer' onClick={()=>{
        addToLike();
      }}><i className="fa-solid fa-thumbs-up text-white  "></i>Like</div>

      <div className='flex gap-[10px] text-white text-2xl font-bold justify-center items-center cursor-pointer' onClick={()=>{
        addToWatchList();
      }}><i className="fa-solid fa-list text-white"></i>Add To WatchList</div>
    </div>
    </div>
  )
}

export default Player;
