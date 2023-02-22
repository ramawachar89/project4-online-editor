import React,{useState} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import ViewListIcon from '@mui/icons-material/ViewList';
import SettingsIcon from '@mui/icons-material/Settings';

import { AiFillCodepenSquare } from "react-icons/ai";
import CustomButton from '../../atom/custombutton/custombutton';
import { FaPencilAlt } from "react-icons/fa";
import Register from '../register/register';
import { Dialog } from '@mui/material'
import { AiFillCloseCircle } from "react-icons/ai";
import styled from './header.module.css';

export default function Header(){
  const[open,setOpen]=useState(false)
  const[inp,setInp]=useState(false)
  const[input,setInput]=useState("")
  function opened(){
    setOpen(true)
  }
  function handExit(){
    setOpen(false)
  }
  function inputopen(){
    setInp(!inp)
  }

  function inputed(e){
    setInput(e.target.value)
  }
  let userName = JSON.parse(localStorage.getItem("userInfo"));
  let profile=[{
    handlerName: `@${userName[1].name}`,
   }]
    return(
      <>
        <Box  sx={{ '& button': { m: 1 } }}>
        <AppBar  style={{backgroundColor:"black"}} position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr:22}}
              style={{backgroundColor:"black"}} 
            >
              <AiFillCodepenSquare />
            
            {inp ? (input, <FaPencilAlt/> ) : "Untitled"}  
           {input>input.length ? "untitled...." : ""}
           {inp ? <input  type="text" value={input} onChange={inputed} className={styled.input}/> : <FaPencilAlt onClick={inputopen}/>}<br/>
         <br/><div className={styled.name}>
         {profile.map((user)=>( 
              <p>{user.handlerName}</p>
             ))}
          </div> 
             
            </IconButton>
            <Typography variant="s" component="div" sx={{ flexGrow:2}}>
            
            </Typography>
            <CustomButton name="Save" 
            startIcon={<CloudQueueIcon/>} 
            styling={{backgroundColor:"FloralWhite" ,color:"black"}}  />
            <CustomButton 
            name="Settings" 
            startIcon={<SettingsIcon />} 
            styling={{backgroundColor:"FloralWhite" ,color:"black"}}  />
            <CustomButton 
            name={<ViewListIcon />} 
            styling={{backgroundColor:"FloralWhite" ,color:"black"}}  />
            <CustomButton name="Sign Up"  onClick={opened}
            styling={{backgroundColor:"green"}}/>
            <CustomButton name="Login Up"
             styling={{backgroundColor:"FloralWhite" ,color:"black"}}  />
            </Toolbar>
      </AppBar>
      
    </Box>
    {open ? (<Dialog open={open}
      PaperProps={{
        style: {
          borderRadius: "20px",
           },
        sx:{width:"90%" ,height:"70rem"}
      }}>
       < AiFillCloseCircle
         
         style={{
          position:'absolute',
           top: '20px',
           right: '20px',
           fontSize:"50px",
           cursor:"pointer"
         }}
         onClick={handExit}
       />
       <Register/>
    </Dialog>): ("")} 
    
    </>
    )
}