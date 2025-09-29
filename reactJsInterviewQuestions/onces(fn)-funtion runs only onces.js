function onces(fn){
    let called=false;
    return function(...args){
    if(!called){
        called=true;
        return fn.apply(this,args);
    }
};
}

const init=once(()=>
    console.log("initialized")
);
 init(); // Initialized
 init(); // nothing happens

 //called ensures function executes only onces