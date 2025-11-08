import { element, elementType } from "prop-types";

// Modern browsers provide the classList API for manipulating CSS classes: 
// adding classes
element.classList.add('active');
element.classList.add('highlight','visible');//multiple classes add
//  .add()
// Ye method naye class names add karta hai element me — bina purani classes delete kiye.
// Agar same class already present hai, to duplicate nahi add hota.


// removing classes
element.classList.remove('active');
element.classList.remove('highlight','visible');

// toggling classes means add if bsent and remove if present
element.classList.toggle('active');
element.classList.toggle('visible',isvisible);
// .classList.toggle('classname', condition) yaha ek condition hai let isVisible =true then uske hisb se ye kaamkrega 

const box = document.getElementById('box');
let isVisible = true;

box.classList.toggle('visible', isVisible);


// const element=document.getElementById('box')
// element.classList.toggle(....)

// chceckinhg if an element has a class
if(element.classList.contains('active')){
    //do something...
}


// replacing a class
element.classList.replace('old-class','new-class');

// Setting inline styles with cssText (overwrites all existing inline styles): 
// element.style.cssText = 'color: red; background-color: white; font-size: 
// 16px;'; 

//removing style
element.style.removeProperty('background-color');