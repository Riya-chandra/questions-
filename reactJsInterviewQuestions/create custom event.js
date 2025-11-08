// step 1: 
// new Event() 
// or
// new CustomEvent()

//step2 - add event listenr to repond to that event
// step3- dispatch the event using element.dispathEvent()


// implementation
//step 1 creatnig simple element
const simpleEvent= new Event('simpleEvent',{
    bubbles:true,  // Whether the event bubbles up through the DOM 
    cancelable:true   // Whether the event can be canceled 
})

//adding listner to the event
document.addEventListener('simpleEvent',function(e){
    console.log('simple event triggerd')
})

//dipatch 
document.dispatchEvent(simpleEvent);



//one examplepof custom events
const productEvent=new Event('productAdded',{
    bubbles:true,
    cancelable:true,
    details:{
        productId:123,
        productName:'keybaord',
        price:1233
    }
});

document.addEventListener('productAdded',function(e){
    console.log("prodcut added:",e.details.productName,'for $',e.details.price)
})
document.dispatchEvent(productEvent)