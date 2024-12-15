import React from "react";
import { useContext } from "react";
import { AdminContext } from "./AdminContext";
import {Navigate} from 'react-router-dom'


//consumes from admin context
const PrivateRoute=({children})=>{
    const {isadmin} = useContext(AdminContext) 
    return(
        // <h2>Private</h2>
       isadmin ? children :  <Navigate to="/not/" /> //if true navigate to children(children is what is wrapped inside private Route) else to not found
    )
}


export default PrivateRoute