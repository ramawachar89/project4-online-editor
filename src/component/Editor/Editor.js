import  React,{useState} from 'react';
import Box from '@mui/material/Box';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import style from './Editor.module.css'


import '../codeeditor/codeeditor'
import {Controlled as ControlledEditor} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import "codemirror/mode/xml/xml"; 
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { FaLanguage } from 'react-icons/fa';


export default function Editor({heading,icons,color,onChange,value,language}) {
const[show,setShow]=useState(true)
function handleChange(editor,data,value){
  onChange(value)
}
 function isOpen(){
  setShow(!show)
 }
  return (
   <div className={style.maineditor} style={show ? null : {flexGrow:0} }>
     <div className={style.div2}>
      <div className={style.div1}>
        <Box component="span"
          style={{backgroundColor:color,
            height:20,
            width:20 ,
            display:"flex",
            placeContent:"center",
            borderRadius:5,
            marginRight:5,  
            paddingBottom:2, 
            color:"black"    
          }}>
        {icons}
        </Box>
       {heading}
      </div>
      < CloseFullscreenIcon 
     
       style={{alignSelf:"center"}}
        onClick={isOpen}     
      />
     </div>
     <ControlledEditor className='Controlled-editor'
    onBeforeChange={handleChange}
    value={value}
         options={{
          lineWrapping:true,
       mode:language,
     theme:"material",
     lineNumbers:true,
    
}}/>
 
   </div>
   
  );
}

