import React,{useState,useEffect} from "react";
// import ReactDOM from "react-dom";
import "./Main.css";
import Input from "./input";
import Text from "./show";

const Main = ()=>{

   let [speedChanger,setSpeedChanger] = useState(1);

   let speed = 500 / speedChanger;
   console.log(speed);
  

   
   const txt = "I have One AutoMated Text";
//    let text = Text().props.children;
//    let input  = Input().props.defaultValue;
   
   
   let [text,setText] = useState("I");
   let [arrIndex,setArrIndex] = useState(0);
   let arr = [ 
     "I have an AutoMated text",
     "Project with React using hooks",
     "If you like it",
     "u may appreciate it",
     "Thanks for your valuable time"       
    ];

   let start = 1;
   let flag = false;
   let i=0;
   const AutoType = ()=>{
        if(flag === false && start < arr[i].length){
            start++;
        } 
        else{ 
            flag=true;   
            start--; 
        }

        
        // (flag=== false && start < txt.length)?start++:flag =true ;start--; 

        if(start===0){
            i++;
            if(i==arr.length){
                i=0;
            }
            console.log(i);
            flag=false;
        } 

        setText(
            text=arr[i].slice(0,start)        
        )
   }

   useEffect( ()=>{    
    const interval = setInterval(AutoType,speed);
    return ()=>clearInterval(interval);
  },[speedChanger]);

   return(
       <>
       <div className = "main">
         <Text showText={text}/>
         <Input changeState={speedChanger => setSpeedChanger(speedChanger)}/>
       </div>
       </>
   )
}

export default Main;