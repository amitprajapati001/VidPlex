import React from "react";
import { useState } from "react";
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
        
        <div class="bg-gray-200 min-h-screen flex flex-col">
                    <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center mt-[100px] px-2">
                        <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                            <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                            <input 
                                type="text"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="fullname"
                                placeholder="Full Name"
                                value={userInfo.name} onChange={(e)=>setUserInfo({...userInfo, name:e.target.value})} 
                                />
        
                            <input 
                                type="text"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="email"
                                placeholder="Email"
                                value={userInfo.email} onChange={(e)=>setUserInfo({...userInfo, email:e.target.value})}
                                />
        
                            <input 
                                type="password"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="password"
                                placeholder="Password"
                                value={userInfo.password} onChange={(e)=>setUserInfo({...userInfo, password:e.target.value})}
                                />
                           
        
                            <button
                                type="submit"
                                class="w-full text-center py-3 rounded bg-gray-700 text-white hover:bg-green-dark focus:outline-none my-1" 
                                onClick={()=>{ 
                                    handleSubmit();
                                }}
                            >Create Account</button>
        
                            
                        </div>
        
                        
                    </div>
                </div>
       
     )


}

export default Signup;