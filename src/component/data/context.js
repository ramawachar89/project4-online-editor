
import { createContext ,useState} from "react";


export const DataContext= createContext();
export const DataOpen=createContext()

  

const DataProvider=({children})=>{
    const[html,setHtml] = useState("") 
  const[js,setJs] = useState("")
  const[css,setCss]=useState("")
  const[open,setOpen]=useState("")
    return(
        <DataContext.Provider
        
        value={{
            html,
            setHtml,
            js,
            setJs,
            css,
            setCss,
            open,
            setOpen
        }}
        >

              {children}
        </DataContext.Provider>
    )
}
export default DataProvider;

