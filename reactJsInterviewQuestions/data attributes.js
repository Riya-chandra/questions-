// Data attributes are custom attributes that allow you to store extra information on HTML 
// elements without using non-standard attributes, extra properties on DOM elements, or 
// Node.setUserData().

import { use } from "react";


//adding data attributes in html
<div id="user"
data-id="123"
data-user-name="admin"
data-role="software developer"
data-last-login="2023">
    
    John DOE
</div>

// accessing data attributres in js
// Using the dataset property (modern, preferred method): 
const userElement=document.getElementById('user')
const userId=userElement.dataset.id ;//123
const userName=userElement.dataset.userName;//admin
const role=userElement.dataset.role; //software developer

//writing values
userElement.dataset.status="active";
userElement.dataset.lastLogin="2024"

// Using getAttribute/setAttribute (alternative method): 
// Reading 
const userId1 = userElement.getAttribute('data-id'); 
const userName1 = userElement.getAttribute('data-user-name'); 
// Writing 
userElement.setAttribute('data-status', 'active');


// Names are converted from kebab-case to camelCase when accessed via dataset 
// • All values are stored as strings 
// • Provide a clean way to associate data with elements without cluttering the DOM 
// • Particularly useful for JavaScript frameworks and custom components 
// • Should not be used for data that should be visible to users (use appropriate HTML elements 
// instead)