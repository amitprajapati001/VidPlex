import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";


const Login =()=>{

    const {signIn} =UserAuth();
    const navigate =useNavigate()

    const [userInfo, setUserInfo]=useState({
        email:"amit@2.com",
        password:"amit@2.com"
    })

    async function handleSubmit(){

       try {await signIn(userInfo.email, userInfo.password)
        navigate("/")}
        catch(e){
            console.log(e);
        }
    }

    return (
        
        <div class="bg-gray-200 min-h-screen flex flex-col">
                    <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center mt-[100px] px-2">
                        <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                            <h1 class="mb-8 text-3xl text-center">Log In</h1>
                        
                            <input 
                                type="text"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="email"
                                placeholder="Email"
                                onChange={(e)=>{
                                    setUserInfo({...userInfo, email:e.target.value})
                                }}
                                />
        
                            <input 
                                type="password"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="password"
                                placeholder="Password"
                                onChange={(e)=>{
                                    setUserInfo({...userInfo, password:e.target.value })
                                }} 
                                />
                           
        
                            <button
                                type="submit"
                                class="w-full text-center py-3 rounded bg-gray-700 text-white  hover:bg-green-dark focus:outline-none my-1" 
                                onClick={()=>{ 
                                    handleSubmit();
                                }}
                            >Sign In</button>
        
                            
                        </div>
        
                        
                    </div>
                </div>
       
     )
  
}

export default Login;