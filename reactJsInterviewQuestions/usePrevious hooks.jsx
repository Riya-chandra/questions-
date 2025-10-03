// Question: Implement usePrevious to get previous value of a prop or state.

import {useRef,useEffect} from "react";

function usePrevious(value){
    const ref=useRef();   //{current:undefined} by default
    useEffect(()=>{
        ref.current=value;    //prev=0 (in 1st click increase)
    });
    return ref.current;   //1 (in 1st click increase)
}

//usage
import react,{useState} from "react";

function counter(){
    const [count,setCount]=useState(0);  //count=0
    const prevCount=usePrevious(count); //useprevious(0) intiall, count=1
    return (
        <div>
            current:{count},previous:{prevCount}  
            {/* prev value isisliye aa paa rhi h kyuki increment se phele se humloh useprev wala function 
            call kr diye h jisse value jaa kr ref kr rh prev ko  */}
            {/* Output: Current: 0, Previous: undefined  intially */} 
            <button onClick={()=> setCount(count+1)}> Increase</button>
            {/* count=1 */}
        </div>
    )
}

export default counter;