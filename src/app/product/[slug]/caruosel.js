import { deepOrange } from "@mui/material/colors";
import { EXPORT_DETAIL } from "next/dist/shared/lib/constants";
import React , {useState} from "react";

 function React_3_function_1(){
    const [count , UseCounter ] =useState(0)
     
    const Increment =() =>
    {
        UseCounter(count +1)
    }
    const Decrement = () =>
    {
        let value = 0; 
        if(count <= value )
        {
            value=1 
        }
        else 
        {
            value=count 
        }
        UseCounter(count -1)
        {
            const Reset = ()=>
            {
                UseCounter(0)
            }
            return(
                <box>
                    <button onClick={(()=>Increment())}>NEMEH</button>

                    <button onClick={(()=>Decrement())}>HASAH</button>
                    <button onClick={(()=>Reset())}>Reset</button>
                </box>

            )
        }
    }
 }
 export default React_3_function_1  