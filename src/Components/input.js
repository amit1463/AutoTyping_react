import React, { useState } from "react";
import "./input.css";
// import Main from "./Main";

const Input = (props) =>{ 

    const [state,setState] = useState(1);
    
   
    let ChangeValue = (e) =>{
        setState(e.target.value);
    }

    return( 
    <>       
    <input type = "number" min = "1" max = "10" onClick = {()=>props.changeState(state)} onChange={ChangeValue} value={state} className = "number"/>
    </>
    )

}

export default Input;



