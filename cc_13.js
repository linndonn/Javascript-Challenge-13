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
//Task 4 - Employee Card Removal with Event Bubbling
//Attach a click event listener to the "Remove" button that removes its parent employee card using removeChild
card.addEventListener("click", () => {console.log(`Clicked ${card.id} - ${name}`)}) 

    deleteBtn = document.createElement("button"); //A "Remove" button for deleting the card.
    deleteBtn.textContent = "Remove Employee"; //Setting the button text
    
    deleteBtn.addEventListener("click", (event) => { 
        employeeContainer.removeChild(card)
//Use stopPropagation() in the "Remove" button’s event handler to prevent the event from bubbling up to the container.
        event.stopPropagation(); 
    });

// Test Data - Task 2
createElement('Shaquille Harrigan', 'Chief Technical Officer');
createElement('Myron Williams', 'Operations Analyst');
createElement('Jemella Bascus', 'Logistics & Development');

//Task 3: Converting NodeLists to Arrays for Bulk Updates

//Use document.querySelectorAll to select all elements with the employee card class.
const nodelistEmployee = document.querySelectorAll(".employeeCard");

//Convert the NodeList into an array using Array.from or the spread operator.
const employeeCardArray = Array.from(nodelistEmployee);

//Use an array method (e.g., .forEach()) to update each card’s style or add a highlighting class.
employeeCardArray.forEach(card => { 
    card.style.backgroundColor = "Crimson";
});



