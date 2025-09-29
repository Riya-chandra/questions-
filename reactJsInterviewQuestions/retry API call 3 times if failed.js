async function fetchWithRetry(url, retries=3){
    for(let i=0;i<retries;i++){
        try{
            const res=await fetch(url);
            if(!res.ok) throw new Error("failed");
            return await res.json();
        }catch(err){
            console.log(`attempt ${i+1} failed`);
            if(i=== retries-1) throw err;
        }
    }
}
// Usage
fetchWithRetry("https://jsonplaceholder.typicode.com/posts/1")
  .then(console.log)
  .catch(err => console.error("All attempts failed"));
