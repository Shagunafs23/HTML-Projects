import {useEffect, useState} from "react";

export default function Counter(){
    let [count,setCount]= useState(0);

    const incCount = ()=>{
        setCount((currCount)=> currCount+1);
        //console.log(count);
    };
    useEffect(function sideEffect(){
        console.log("This is the side effect");
    });

    return(
        <div>
            <h3>Count = {count}</h3>
            <button onClick={incCount}>+1</button>
        </div>
    );
}