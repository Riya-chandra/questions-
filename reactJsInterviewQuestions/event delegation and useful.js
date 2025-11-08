// Event delegation is a technique of attaching a single event listener to a parent element instead 
// of attaching individual listeners to multiple child elements. 


document.getElementById('button-container').addEventListener('click',
    function(event){
    if(event.target.tagName==='BUTTON'){
        console.log('button clicked:',event.target.textContent);
        if(event.target.dataset.action==='delete'){
            deleteItem(event.target.dataset._id);
        }
    }
    }
)