import React, {useState} from 'react';
import './Contador.css';

export default function Contador() {

const [count, setCount] = useState(0);
  
    return(
        <div className= "count">
            <form className="form-value">
               <div className="current-value"> 
               <p>Current number: {count}</p>
               </div>
               <input
               className="button-decrease"
               type = "button"
               value = "Decrease"
               onClick= {() => setCount(count - 1)}/>
               <input
               className="button-reset"
               type = "button"
               value = "Reset"
               onClick= {() => setCount(0)}/>
              
               <input
               className="button-increase"
               type = "button"
               value = "Increase"
               onClick= {() => setCount(count + 1)}/>
               
             
            </form>
        </div>
    );

};

