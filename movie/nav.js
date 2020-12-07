import React ,{useState} from 'react';

function nav() {
    const[count, Setcount] = usestate(0);
    return (
        <div>
            <h1> LOG IN </h1>
            <button on click ={()=> setcount (count+1)}> START YOUR FREE TRIAL </button>

            
        </div>
    )
}

export default nav
