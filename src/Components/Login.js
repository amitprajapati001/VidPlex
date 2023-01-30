import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";


const Login =()=>{

    const {signIn} =UserAuth();
    const navigate =useNavigate()

    const [userInfo, setUserInfo]=useState({
        email:"",
        password:""
    })

    async function handleSubmit(){

       try {await signIn(userInfo.email, userInfo.password)
        navigate("/")}
        catch(e){
            console.log(e);
        }
    }

   
    return (
        <div className="flex flex-col items-center justify-center ">
            <h1 className="text-3xl font-bold mt-[10px]">Login</h1>

            <div className="flex flex-col w-[200px]  justify-center mt-[100px] ">

                <label className="text-2xl font-bold">Email</label>

                <input className="border-[2px] pt-[10x]" onChange={(e)=>{
                    setUserInfo({...userInfo, email:e.target.value})
                }}>
                </input>
                <label className="text-2xl font-bold">Password</label>
                <input className="border-[2px] pt-[10x]" onChange={(e)=>{
                    setUserInfo({...userInfo, password:e.target.value })
                }} >
                </input>
            </div>
            <div>
                <button className="border-[5px] mt-[20px] font-bold" onClick={()=>{
                    handleSubmit();
                }}>Login</button>
            </div>
        </div>
    )
}

export default Login;