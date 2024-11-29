import "./App.css"
import React,{useState} from 'react';
import*as icon from 'react-bootstrap-icons';
import { BackspaceFill } from 'react-bootstrap-icons';


export default function App() {

  const [display, setDisplay] = useState("");
  const[x,last] = useState("");


  
  const button =(value) =>
  {
    if(value == "CE")
    {
      setDisplay("");
    }
    else if(value == "back")
    {
      setDisplay(display.slice(0,-1));
    }
    else if(value === "="){
      
     setDisplay(eval(display));
    }
    else{
      
      if((x === "-" || x === "+" || x === "%" || x === "*" || x === "/") &&
      (value === "+" || value === "-" || value === "%" || value === "*" || value === "/"))
      {
        
        setDisplay(display.slice(0,-1)+ value);
        
      }else{
      setDisplay(display + value);
    
      }
      last( value );
    }
  }


  return (
    <div className="calculator">
      <div className="answer">
      <h1>{display}</h1>
      </div>
      <div className="buttons">
        <button onClick={() => button("CE")}>CE</button>
        <button onClick={() => button("+")}>+</button>
        <button onClick={() => button("%")}>%</button>
        <button onClick={() => button("/")}>/</button>
        
        <button onClick={() => button("7")}>7</button>
        <button onClick={() => button("8")}>8</button>
        <button onClick={() => button("9")}>9</button>
        <button onClick={() => button("*")}>*</button>
        
        <button onClick={() => button("4")}>4</button>
        <button onClick={() => button("5")}>5</button>
        <button onClick={() => button("6")}>6</button>
        <button onClick={() => button("-")}>-</button>
        
        <button onClick={() => button("1")}>1</button>
        <button onClick={() => button("2")}>2</button>
        <button onClick={() => button("3")}>3</button>
        <button onClick={() => button("+")}>+</button>
        
        <button onClick={() => button("0")}>0</button>
        <button onClick={() => button(".")}>.</button>
        <button className="equal" onClick={() => button("=")}>=</button>
        <button onClick={() => button("back")}>
          <div className="back"><BackspaceFill color="black" size={40}/></div></button>
        
      </div>
    </div>
  )
}
