// XMLHttpRequest is the traditonal way to make async HTTp reqiest before fetch API

const xhr=new XMLHttpRequest();
xhr.open('GET','https://ap.example.com/data',true);

xhr.onload=function(){
    if(xhr.status>=200 && xhr.status<300){
        const data=JSON.parse(xhr.responseText);
        console.log(data);
    }else{
        console.error('Request failed with status',xhr.status);
    }
};
xhr.onerror=function(){
    console.error('Request failed');
}  
// → Ye tab trigger hota hai jab network issue ho (e.g., no internet, DNS fail, timeout).
// → Iska onload se koi lena-dena nahi — ye tab chalega jab response aaya hi nahi.
xhr.send();