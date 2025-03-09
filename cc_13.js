//Task 2: Adding Employee Cards Dynamically

 //Write a function that uses createElement to build an employee card.
function createElement(name, position) { 
    
    const employeeContainer = document.getElementById("employeeContainer"); 
    let card = document.createElement("div"); 

    // Set attributes (such as class and id) using setAttribute as needed.
    card.setAttribute("class", "employeeCard"); 
    card.setAttribute("id", `employee`); 
    
    //A "Remove" button for deleting the card.
    btn = document.createElement("button"); 
    btn.textContent = "Remove Information"; 

    //Adding an event listener to the button to removeChild card from employeeContainer
    btn.addEventListener("click", () => {employeeContainer.removeChild(card)}); 
    card.appendChild(btn); //Appending the remove button to the card
    
    //Append the employee card to the "employeeContainer" using appendChild.
    employeeContainer.appendChild(card); 
    
   

};

// Test Data - Task 2
createElement('Shaquille Harrigan', 'Chief Technical Officer');
createElement('Myron Williams', 'Operations Analyst');
createElement('Jemella Bascus', 'Logistics & Development');