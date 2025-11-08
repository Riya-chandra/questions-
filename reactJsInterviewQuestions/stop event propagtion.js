// stopPropagation()

childElement.addEventListener('click',
    function(event){
        event.stopPropagation();
        console.log("child clcked but event do not bubble ot parent ")
    }
)
parentElement.addEventListener('click',function(){
    console.log("this wont run when child is clicked")
});


// For an even stronger version that prevents any other listeners on the same element from 
// firing, use stopImmediatePropagation(): 
element.addEventListener('click', function(event) { 
event.stopImmediatePropagation(); 
console.log('This runs'); 
}); 
element.addEventListener('click', function() { 
console.log('This will NOT run'); 
});







const grandparent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

// CAPTURING phase listener (3rd param = true)
grandparent.addEventListener('click', function() {
  console.log('Grandparent - capturing phase');
}, true);

parent.addEventListener('click', function() {
  console.log('Parent - capturing phase');
}, true);

// BUBBLING phase listener (default, 3rd param = false)
child.addEventListener('click', function() {
  console.log('Child - bubbling phase');
});

parent.addEventListener('click', function() {
  console.log('Parent - bubbling phase');
});

grandparent.addEventListener('click', function() {
  console.log('Grandparent - bubbling phase');
});



// Grandparent - capturing phase
// Parent - capturing phase
// Child - bubbling phase
// Parent - bubbling phase
// Grandparent - bubbling phase
