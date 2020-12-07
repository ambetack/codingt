import React ,{useState} from 'react';
import { Browser Router, Route, Link};

function nav() {
    const[count, Setcount] = usestate(0);
    return (
        <div>
            <Link to="/">LOG IN  </Link>
      <Link to="/STA9RT YOUR FREE TRIAL">STA9RT YOUR FREE TRIAL </Link>
      
            <h1> LOG IN </h1>
            <button on click ={()=> setcount (count+1)}> START YOUR FREE TRIAL </button>

            
        </div>
    )
}

export default nav
