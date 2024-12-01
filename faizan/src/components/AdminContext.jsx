import React from "react";
import { useState } from "react";
import { createContext } from "react";


//crete context
//provide 
//consume


//create
export const AdminContext = createContext()

//provide
export const AdminProvider = ({children})=>{
    const [isadmin ,setisadmin ] = useState(false)
    return(
        <AdminContext.Provider value={{isadmin,setisadmin}}>
            {children}
        </AdminContext.Provider>
    )
}


// private route consumes // go to private route for consumption