import React, { useState } from "react";
import CustomInput from '../../atom/input/input'


export default function Login(){
    const[user,setUser]=useState("")
    const[password,setPassword]=useState("")
    function username(e){
        setUser(e.target.value)
    }
    function pass(e){
        setPassword(e.target.value)
    }
    const data=JSON.parse(localStorage.getItem("userInfo"))
  console.log(data)
    function login (){
      const datta=data.filter((userr)=>userr.name===user && userr.password===password)
   
      console.log(datta)
    }

    return(
       <>
       <CustomInput type="text" value={user} placeholder="username" onChange={username}/>
       <CustomInput type="password" value={password} placeholder="password" onChange={pass}/>
       <button onClick={login}>login</button>
       </>
    )
}