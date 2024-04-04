
// V2

// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.getElementById('addForm');
let list = document.getElementById('employees');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = list.rows.length -1;
function updateEmployeeCount() {
    count.textContent = `(${count-1})`;
}
console.log(count)
// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    
    // GET THE VALUES FROM THE TEXT BOXES
    let employeeId = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let extension = document.getElementById('extension').value;
    let email = document.getElementById('email').value;
    let department = document.getElementById('department').value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let newRow = list.insertRow();

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    newRow.insertCell(0).textContent = employeeId;
    newRow.insertCell(1).textContent = name;
    newRow.insertCell(2).textContent = extension;
    newRow.insertCell(3).textContent = email;
    newRow.insertCell(4).textContent = department;

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    list.appendChild(newRow)

    // CREATE THE DELETE BUTTON
    let deleteCell = newRow.insertCell(5);
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-end delete';
    // button is displaying with white background for some reason
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function() {
        let confirDelete = confirm('Delete this employee?');
        if (confirDelete) {

            let row = e.target.parentNode.parentNode;
            let rowIndex = row.rowIndex;
            document.getElementById('employees').deleteRow(rowIndex);
            count--;
            updateEmployeeCount();
        }
        
    };

    deleteCell.appendChild(deleteBtn);

    // ADD LI TO UL
    // list.appendChild()

    // RESET THE FORM
    document.getElementById('addForm').reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus();

    // INCREMENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count++;
    updateEmployeeCount();

    // DELETE EMPLOYEE
// for some reason it only works if I keep this right after the CREATE BUTTON
    // deleteBtn.onclick = function() {
    //     newRow.remove();
    //     count--;
    //     updateEmployeeCount();
});

// Function to update the displayed count of employees
function updateEmployeeCount() {
    document.getElementById('empCount').textContent = `(${count})`;
}



//v1


// // GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
// let form = document.getElementById('addForm');
// let list = document.getElementById('employees');
// // SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER


// // ADD EMPLOYEE
// form.addEventListener('submit', (e) => {
//     // PREVENT FORM SUBMISSION
//     e.preventDefault();
        
//     // GET THE VALUES FROM THE TEXT BOXES
//     let employeeId = document.getElementById('id').value
//     let name = document.getElementById('name').value
//     let extension = document.getElementById('extension').value
//     let email = document.getElementById('email').value
//     let department = document.getElementById('department').value


//     // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
//     let table = document.getElementById('employees');
//     let newRow = list.insertRow();


//     // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
//     newRow.insertCell(0).textContent = employeeId;
//     newRow.insertCell(1).textContent = name;
//     newRow.insertCell(2).textContent = extension;
//     newRow.insertCell(3).textContent = email;
//     newRow.insertCell(4).textContent = department;

//     // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
//     th.appendChild(newRow)


//     // CREATE THE DELETE BUTTON
//     let deleteCell = newRow.insertCell(5);
//     let deleteBtn = document.createElement('button');
//     deleteBtn.className = 'btn btn-danger btn-sm float-end delete';
//     deleteBtn.textContent = 'Delete'; // Directly set text content

//         // ADD LI TO UL
//     list.appendChild(li)
//     // RESET THE FORM
//      form.reset();

//     // SET FOCUS BACK TO THE ID TEXT BOX
//     document.getElementById('id').focus();
//     // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE

//     // })

//     // DELETE EMPLOYEE
//     deleteBtn.onclick = function() { // Add click event to delete the current row
//         newRow.remove();
// };
// deleteCell.appendChild(deleteBtn)