import React,{useState} from 'react'
import CustomInput from '../../atom/input/input'
import CustomButtons from '../../atom/button/button'
import { isuserName ,isuserEmail,isuserPassword} from '../../helper/validation'
import { useContext } from 'react'
import { DataContext } from '../data/context'
import { Dialog } from '@mui/material'
import styled from './register.module.css'
import CustomButton from '../../atom/custombutton/custombutton';
import { TfiTwitter} from "react-icons/tfi";
import { FaFacebookSquare } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
function Register(){
    const[name , setName]=useState("")
    const[email , setEmail]=useState("")
    const[password , setPassword]=useState("")
    const[nameerror , setnameerror]=useState("")
    const[emailerror , setemailerror]=useState("")
    const[passworderror , setpassworderror]=useState("")
    const[data, setData]=useState([])
    
    function captureName(e){
       setName(e)
       const namevalidate=isuserName(name)
       setnameerror(namevalidate)
    }
    function captureEmail(e){
        setEmail(e)
        const emailvalidate=isuserEmail(email)
        setemailerror(emailvalidate)
     }
    
     function capturePassword(e){
        setPassword(e)
        const passwordvalidate=isuserPassword(password)
        setpassworderror(passwordvalidate)
     }
     function handleSubmit(e){
        e.preventDefault();  //you stop the refresh page again and again
        if(name==="" || email==="" || password===""){
            alert("Enter something")
        
    }else if(nameerror=="Invalid username"|| emailerror=="Invalid Email" || passworderror=="Invalid Password"  ){
        alert("you have Enter wrong details")
    }else{
        const userData={name:name, Email:email, password:password}
        data.push(userData)
 }

        localStorage.setItem("userInfo",JSON.stringify(data))
        console.log(data)
      }
    return(
        <>
        <div className={styled.account}>
            <h1>Create Account</h1>
            <CustomButton 
            startIcon={<TfiTwitter/>}
            name="Sign up With Twitter"
            styling={{backgroundColor:"skyblue",width:"28rem",borderRadius:"20px",padding:"1rem",marginBottom:"1rem"}}
            />
             <CustomButton 
             startIcon={<BsGithub/>}
            name="Sign up With Git Hub"
            styling={{backgroundColor:"gray",width:"28rem",borderRadius:"20px",padding:"1rem",marginBottom:"1rem"}}
            />
             <CustomButton 
             startIcon={<FaFacebookSquare/>}
            name="Sign up With Facebook"
            styling={{backgroundColor:"grayblue",width:"28rem",borderRadius:"20px",padding:"1rem",marginBottom:"1rem"}}
            />
        </div>
        <h4 style={{marginLeft:"1rem"}} >Or,</h4>
       
        <div className={styled.main}>
        <CustomButton name="sign up With Email"
         styling={{backgroundColor:"black",width:"28rem",borderRadius:"20px",padding:"1rem",marginBottom:"1rem"}}
        />
         <CustomInput 
         placeholder="Enter Name" 
         type="text"
         onChange={captureName}
         style={{width:"20rem",borderRadius:"20px",padding:"1rem",marginBottom:"1rem"}}
         />
        {nameerror}
        
         <CustomInput 
         placeholder="Email" 
         type="text"
         onChange={captureEmail}
         style={{width:"20rem",borderRadius:"20px",padding:"1rem",marginBottom:"1rem"}}
         />
         {emailerror}
         <CustomInput 
         placeholder="password"
        type="password"
        onChange={capturePassword}
        style={{width:"20rem",borderRadius:"20px",padding:"1rem",marginBottom:"1rem"}}
       />
        {passworderror}
        <CustomButtons

        placeholder="Submit"
        onClick={handleSubmit}
       
        />
         </div>
        
 
        </>
    )
}

export default Register;