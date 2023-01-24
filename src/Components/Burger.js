import { slide as Menu } from 'react-burger-menu'
import {burgerStyle} from '../Config'

const Burger= ()=>{
    return (
        <Menu styles={burgerStyle}>
        
        <a id="Home" className="menu-item text-2xl my-[20px]" href="/"><i className="fa-solid fa-house-user mx-[10px] mt-[5px]"></i> Home</a>
        <a id="History" className="menu-item text-2xl my-[20px]" href="/about"><i className="fa-solid fa-clock-rotate-left mx-[10px] mt-[5px]"></i> History</a>
        <a id="PlayList" className="menu-item text-2xl my-[20px]" href="/contact"><i className="fa-solid fa-list mx-[10px] mt-[5px]"></i> PlayList</a>
        <a id="Liked" className="menu-item text-2xl my-[20px]" href="/contact"><i className="fa-sharp fa-solid fa-thumbs-up mx-[10px] mt-[5px]"></i> Liked Videos</a>
 
      </Menu>

    )
}

export default Burger;