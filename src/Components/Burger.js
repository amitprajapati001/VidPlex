import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom';
import {burgerStyle} from '../Config'

const Burger= ()=>{
    return (
        <Menu styles={burgerStyle}>
        
        <Link id="Home" className="menu-item text-2xl my-[20px]" to="/"><i className="fa-solid fa-house-user mx-[10px] mt-[5px]"></i> Home</Link>
        <Link id="History" className="menu-item text-2xl my-[20px]" to="/history"><i className="fa-solid fa-clock-rotate-left mx-[10px] mt-[5px]"></i> History</Link>
        <Link id="PlayList" className="menu-item text-2xl my-[20px]" to="/playlist"><i className="fa-solid fa-list mx-[10px] mt-[5px]"></i> PlayList</Link>
        <Link id="Liked" className="menu-item text-2xl my-[20px]" to="/likedvideos"><i className="fa-sharp fa-solid fa-thumbs-up mx-[10px] mt-[5px]"></i>Liked Videos</Link>
 
      </Menu>

    )
}

export default Burger;