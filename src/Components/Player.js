import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import Loader from './Loader';


const Player = () => {

  
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a760903f0dmsh0ff0c07d17f9a99p130fffjsn4c276a048d96",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

const [videoData,setVideoData] =useState([]);
const {id}=useParams();

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
    <ReactPlayer playIcon controls url={`https://www.youtube.com/watch?v=${id}`} width="100%"  />
    <h1 className='text-2xl font-bold mt-[20px] text-center text-white'>{videoData[0]?.snippet?.title}</h1>
    <div className='flex gap-[40px] mt-[40px]'>

      <div className='flex gap-[10px] text-white justify-center items-center text-2xl font-bold cursor-pointer'><i className="fa-solid fa-thumbs-up text-white  "></i>Like</div>

      <div className='flex gap-[10px] text-white text-2xl font-bold justify-center items-center cursor-pointer'><i className="fa-solid fa-list text-white"></i>Add To Playlist</div>
    </div>
    </div>
  )
}

export default Player;
