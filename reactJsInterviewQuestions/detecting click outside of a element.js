import { useEffect, useRef, useState } from "react";

const menu=document.getElementById('dropdown-menu')
const button=document.getElementById('menu-button')

//check ki click hua kaha h pge m 
document.addEventListener('click',function(event){
    const isClickInside=menu.contains(event.target)|| button.contains(event.target);
    if(!isClickInside){
        menu.classList.remove('show');
        console.log('clicked outside closing the menu')
    }
});

button.addEventListener('click',function(event){
     button.classList.toggle('show');// open hota toh bnd ho jta bnd hota tih open ho jta 
})


//react version
function dropdown(){
    const [isOpen,setOpen]=useState(false);
    const dropdownRef=useRef(null);

    useEffect(()=>{
        function handleclickOutside(event){
            if(dropdownRef.current && !dropdownRef.current.contains(event.target)){
                setOpen(false); //null ho ya event.target ko contain nhi krta dropdownref then setopen ko false hi rkhna
            }
        } //document.addEventListener('mousedown', handleClickOutside)
// → listener lagata hai poore page pe, taaki kisi bhi jagah click detect ho.
// 6️⃣ return () => { document.removeEventListener(...) }
// → ye cleanup part hai (component unmount hone par listener hata diya jaata hai).
        document.addEventListener('mousedown',handleclickOutside);
        return ()=>{

        }
    })
}