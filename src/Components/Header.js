import Burger from "./Burger"

const Header =()=>{
    return (
        <div className="flex justify-between  bg-gray-700 p-[20px] items-center ">
          

          <Burger />
          {/* <div className="">
            <img src="https://www.nicepng.com/png/detail/858-8588651_total-video-player-icon-for-video-player.png" alt="Title Image" className="w-[60px]" />
          </div> */}

        <div className="flex gap-[20px]">
            <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
            <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">SignUp</button>
        </div>


        </div>
    ) 
}

export default Header;