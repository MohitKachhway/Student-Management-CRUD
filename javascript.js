const students = [
    {
      ID: 1,
      name: 'Alice',
      age: 21,
      grade: 'A',
      degree: 'Btech',
      email: 'alice@example.com'
    },
    {
      ID: 2,
      name: 'Bob',
      age: 22,
      grade: 'B',
      degree: 'MBA',
      email: 'bob@example.com'
    },
    {
      ID: 3,
      name: 'Charlie',
      age: 20,
      grade: 'C',
      degree:'Arts',
      email: 'charlie@example.com'
    }
  ]; 
  // collect data from form .
  let count=4;
  let form = document.getElementsByClassName("form")[0];
  let inputs = form.elements;

  function removeDataListener(){
    removeEventListener("submit",collectData);
  }
  
  let collectData =(e)=>{

    e.preventDefault();
    let obj = {ID: count};
    for ( let i=0 ; i< inputs.length ; ++i){
        obj[inputs[i].name]= inputs[i].value;
    }
    ++count;
    addRowNode(obj);
    removeDataListener();
    
  };

  form.addEventListener("submit", collectData);
  

  // add student data into table from array
  for(let i=0; i<students.length;++i){
    addRowNode(students[i]);
  }
 // function to add row node in table
 function addRowNode(newObj){

    let row = document.createElement("tr");
    row.id= newObj.ID;
    row.innerHTML = ` <th>${newObj.ID}</th>
                    <th>${newObj.name}</th>
                    <th>${newObj.email}</th>
                    <th>${newObj.age}</th>
                    <th>${newObj.grade}</th>
                    <th id="deg">${newObj.degree}<span class="fun-btn fun-btn-ed"><img src="./image/edit 1.png" alt="edit" id="edit"></span><span class="fun-btn fun-btn-del"><img src="./image/trash-2 1.png" alt="delete" id="delete"></span></th>`

    let table = document.getElementById("table");
    table.appendChild(row);
 };

// // Now we delete row .....
let deleteButtons = document.getElementsByClassName("fun-btn-del") ; // array of all span ele of delete button.
for(let i=0;i<deleteButtons.length;++i){
    deleteButtons[i].addEventListener("click",(e)=>{
        let delRow = deleteButtons[i].parentNode.parentNode;
        delRow.remove();
    })
}

// let editButton = document.getElementsByClassName("fun-btn-ed");
// for(let i=0; i<editButton.length;++i){

//     editButton[i].addEventListener("click",(e)=>{
//         let editRow = editButton[i].parentNode.parentNode; //<tr>
//         let rowChild =editRow.children;
//         // console.log(editRow);
        
//         for (let i=0; i<inputs.length;++i){
//             inputs[i].value = rowChild[i].textContent;
//         }
//     // console.log(inputs[0].value="mohit")
       
//         console.log(c[1].innerHTML)
//     })
// }

//-----------------------------filter apply-----------------------------------
// let table = document.getElementById("table");
// let rowObj = table.children[0].children[0]; 

// for( let i=0; i<rowObj.length;++i){
//     console.log(rowObj[i]);
// }