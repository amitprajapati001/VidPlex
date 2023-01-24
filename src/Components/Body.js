import { useState } from "react";
import {DATA_API} from "../Config"

const Videocard =({item})=>{
    return(
        <div className="flex m-[10px] ml-[35px] justify-center items-center "> 
             <img src={item?.snippet?.thumbnails?.high?.url} className="h-[200px] p-[10px] object-cover rounded" />
        </div>
    )
}


const Body=()=>{

    
    const [search, setSearch] =useState("")
    const [videos, setVideos]=useState([])


    async function getVideos(){
        const data= await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=any&maxResults=50&q=${search}=any&key=${DATA_API}`)
        const json =await data.json();
        setVideos(json.items)
        
    }
   
    return (
        <>
        <div className="flex justify-center items-center p-[20px]  ">
           <input type="text" value={search} onChange={(e)=>{
            setSearch(e.target.value)
           }}  name="url" id="url" placeholder="Search Here" className="flex border rounded-tl-md  rounded-bl-md dark:text-gray-100 dark:bg-gray-800 focus:ring-violet-400 bg-gray-100 w-[300px] p-[10px]  text-[100%] outline-0  " /> 
           <button  onClick={()=>{
               getVideos();
           }} ><i className="fa-solid fa-magnifying-glass p-[15px] text-white bg-black rounded-tr-md rounded-br-md"></i></button>  
        </div>

        <div className="flex flex-wrap w-full">
        {
            videos?.map((item) => {
                return <Videocard item={item} />
            })
        }
        </div>

        </>
    )
}

export default Body;