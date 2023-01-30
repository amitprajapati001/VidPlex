import {  useEffect, useState } from "react";

import { Link } from "react-router-dom";


const Videocard =({item})=>{
    return(
        <div className="flex items-baseline flex-col m-[0px] justify-evenly md:ml-[40px] "> 
             <img alt="img" src={item?.snippet?.thumbnails?.high?.url} className="md:h-[200px] w-[100%] mt-[20px] justify-center items-center md:ml-[17px]  object-cover rounded" />
             <h1 className="flex overflow-hidden text-lg w-[250px] truncate font-bold mt-[5px]">{item?.snippet?.title}</h1>
        </div>
    )
}

const Body=()=>{


    const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "a760903f0dmsh0ff0c07d17f9a99p130fffjsn4c276a048d96",
          "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
        },
      };
    
    
    const [search, setSearch] =useState("")
    const [videos, setVideos]=useState([])
{
    useEffect(()=>{
        
    async function getVideos(){
        const data= await fetch(`https://youtube-v31.p.rapidapi.com/search?q=songs&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`,options)
        const json =await data.json();
        setVideos(json.items)
        setSearch("")
        console.log(json.items);
        
    }

    getVideos();
        
    },[])
}




    async function getVideos(){
        const data= await fetch(`https://youtube-v31.p.rapidapi.com/search?q=${search}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`,options)
        const json =await data.json();
        setVideos(json.items)
        setSearch("")
        console.log(videos);
        
    }
   
    // return  (videos.length===0)?<Loader /> : 
     return (
        <>
        <div className="flex justify-center items-center p-[20px]  ">

           <input type="text" value={search} onChange={(e)=>{
            setSearch(e.target.value)
           }}  name="url" id="url" placeholder="Search Here" className="flex border rounded-tl-md  rounded-bl-md dark:text-gray-100 dark:bg-gray-800 focus:ring-violet-400 bg-gray-100 w-[300px] p-[10px]  text-[100%] outline-0  " /> 
           <button  onClick={()=>{
               getVideos();
           }} >
        
        <i className="fa-solid fa-magnifying-glass p-[15px] text-white bg-black rounded-tr-md rounded-br-md"></i></button>  
        </div>

        <div className="flex flex-wrap w-full">
        {
            videos?.map((item,index) => {
                return <Link to={`/player/${item?.id?.videoId}`  } key={index}  ><Videocard item={item} /></Link>
            })
        }
        </div>

        </>
    )
}

export default Body;