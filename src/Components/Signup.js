import React from "react";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signup =()=>{

    const navigate=useNavigate();
    const { createUser } = UserAuth();
    const [userInfo, setUserInfo]=useState({
        name:"",
        email:"",
        password:"",
    })

    async function handleSubmit(){
    
       
        try {
            await createUser(userInfo.email, userInfo.password)
            navigate("/")
        }
        catch(e){
            console.log(e);
        }
    }


    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mt-[30px]">Sign Up</h1>

            <div className="flex flex-col w-[200px]  justify-center mt-[70px] ">
                <label className="text-2xl font-bold">Name</label>
                <input className="border-[2px] pt-[10x]" type="text" required value={userInfo.name} onChange={(e)=>setUserInfo({...userInfo, name:e.target.value})}  >
                
                </input>

                <label className="text-2xl font-bold">Email</label>

                <input className="border-[2px] pt-[10x]" type="email" required value={userInfo.email} onChange={(e)=>setUserInfo({...userInfo, email:e.target.value})} >
                </input>
                <label className="text-2xl font-bold">Password</label>
                <input className="border-[2px] pt-[10x]" type="password" required value={userInfo.password} onChange={(e)=>setUserInfo({...userInfo, password:e.target.value})}  >
                </input>
            </div>
            <div>
                <button className="border-[5px] mt-[20px] font-bold" onClick={()=>{ 
                        handleSubmit();
                }}>Signup</button>
               
            </div>
        </div>
    )
}

export default Signup;