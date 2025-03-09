//Task 2: Adding Employee Cards Dynamically

 //Write a function that uses createElement to build an employee card.
function createElement(name, position) { 
    
    const employeeContainer = document.getElementById("employeeContainer"); 
    let card = document.createElement("div"); 

    // Set attributes (such as class and id) using setAttribute as needed.
    card.setAttribute("class", "employeeCard"); 
    card.setAttribute("id", `employee`); 
    card.innerHTML = `<h3>${name}</h3><p>${position}</p>`;
    
    card.addEventListener("click", () => {console.log(`Clicked ${card.id} - ${name}`)}) 
    
//Task 4 - Employee Card Removal with Event Bubbling
//Attach a click event listener to the "Remove" button that removes its parent employee card using removeChild


    deleteBtn = document.createElement("button"); //A "Remove" button for deleting the card.
    deleteBtn.textContent = "Remove Employee"; //Setting the button text
    
    deleteBtn.addEventListener("click", (event) => { 
        employeeContainer.removeChild(card)
//Use stopPropagation() in the "Remove" button’s event handler to prevent the event from bubbling up to the container.
        event.stopPropagation(); 
    });

    //Task 5 - Inline Editing for Employee Cards
    editBtn = document.createElement("button"); 
    editBtn.textContent = "Edit Data"; 

    editBtn.addEventListener("click", (event) => { 
        svBtn = document.createElement("button"); 
        svBtn.textContent = "Save"; 
        card.replaceChild(svBtn, card.children[2]); //Appending the save button to the card
        card.children[1].outerHTML += `<input value="${name}"><input value="${position}">`

        //Add an event listener to each employee card's edit button that, on click, swaps static content with input fields
        svBtn.addEventListener("click", (event) => { 
            card.children[0].textContent = card.children[2].value 
            card.children[1].textContent = card.children[3].value 
            event.stopPropagation();
        });
        event.stopPropagation();
    });

    card.appendChild(editBtn);
    card.appendChild(deleteBtn); 

    employeeContainer.appendChild(card); 

};

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



