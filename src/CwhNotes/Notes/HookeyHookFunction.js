// Hooks can only be called inside React function components. Don’t call Hooks from regular JavaScript functions.
// Hooks can only be called at the top level of a component. Don’t call Hooks inside loops, conditions, or nested functions.
// Hooks cannot be conditional
// Hooks will not work in React class components
// Hooks are functions that let you “hook into” React state and lifecycle features from function components
// *********************************************************************
import React, { useState, useEffect } from 'react';
export default function HookeyHookFunction() {
    // useState Hook 1
    const [count,setCount] = useState(0);
    const [color, setColor] = useState("red");
  return (
    <>
    {/* State of Count using useState */}
    <h1>Using HookeyHookFunction</h1>
    <div>
        <h3>New Value : {count}</h3>
        <button onClick={()=>setCount(count+1)}>Increase</button>
        <button onClick={()=>setCount(count-1)}>Decrease</button>
        <button onClick={()=>setCount(0)}>Reset</button>
    </div>
    <div>
      {/* State of Coolor using useState */}
    <h3>New Fav Color : {color}</h3>
        <button onClick={()=>setColor("blue")}>Blue</button>
        <button onClick={()=>setColor("green")}>Green</button>
        <button onClick={()=>setColor("yellow")}>Yellow</button>
        <button onClick={()=>setColor("red")}>Red</button>
    </div>
    </>
  )
}


