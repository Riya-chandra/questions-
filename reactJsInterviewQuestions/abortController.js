// AbortControllers provide a way to cancel fetch requests. They're part of the Fetch API and 
// allow you to abort one or multiple fetch operations when needed. 

const controller=new AbortController
const signal=controller.signal;

fetch('https//api.example',{signal})
 .then(response=>response.json())
 .then(data=>console.log(data))
 .catch(error=>{
    if(error.name==='AbprtError'){
        console.log('fetch aborted');
    }
    else{
        console.error('error',error)
    }
 })
 // Abort the fetch after 5 seconds 
setTimeout(() => controller.abort(), 5000);