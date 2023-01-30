import Burger from "./Burger"
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Header =()=>{

const {user,logout} =UserAuth();
console.log(user);


const navigate=useNavigate();
 async function signOut(){

  try{
    await logout();
    navigate("/")
  }
  catch(e){
    console.log(e);
  }
 }



    return (
        <div className="flex justify-between  bg-gray-700 p-[20px] items-center ">
          

          <Burger />
          {/* <div className="">
            <img src="https://www.nicepng.com/png/detail/858-8588651_total-video-player-icon-for-video-player.png" alt="Title Image" className="w-[60px]" />
          </div> */}

        <div className="flex gap-[20px]">

            {(!user) && <Link to="/login" ><button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button></Link>}

            {(!user)  &&  <Link to="/signup"><button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">SignUp</button></Link>}

            {(user) && <Link to="/signout"><button  className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
            
            onClick={()=>{
              signOut();
            }}>SignOut</button></Link>}

            
        </div>


        </div>
    ) 
}

export default Header;