import React,{useReducer} from "react";




function reducer(state,action){  //reducer(0, { type: "INCREMENT" })
    switch(action.type){ 
     case "increment":return state+1;
     case "decrement" :return state-1;
     default:return state;
    }
}

function counter(){
    const [count,setCount]=useReducer(reducer,0);
    // count = 0 → initial state
// dispatch → function jo action bhejega reducer ko
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>dispatch({type:"increment"})}>+</button>
            <button onClick={()=>dispatch({type:"decrement"})}>-</button>
        </div>
    )
}



// Feature	       useState	                    useReducer
// Syntax	        [state, setState]	        [state, dispatch]
// Updates	        Direct setState(value)	    Dispatch(action) → reducer returns new state
// Best For	        Simple state / primitive    Complex state / multiple sub-values
// State Merge	    Manual (spread operator)	Reducer handles logic
// Predictability	Less structured	            More predictable, centralized logic
// Side Effects	    useEffect ke saath	        Reducer sirf pure function, side-effects reducer ke bahar