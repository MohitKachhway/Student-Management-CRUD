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


 /* collect data from form .*/
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
    students.push(obj);
    
    

    removeDataListener();
    
  };

  form.addEventListener("submit", collectData);
  

  // add student data into table from array
  for(let i=0; i<students.length;++i){
   
    addRowNode(students[i]);
  }

 //--------- function to add row node in table------------
 function addRowNode(newObj){

    let row = document.createElement("tr");
    row.id= newObj.ID;
    row.innerHTML = ` <td>${newObj.ID}</td>
                    <td>${newObj.name}</td>
                    <td>${newObj.email}</td>
                    <td>${newObj.age}</td>
                    <td>${newObj.grade}</td>
                    <td id="deg">${newObj.degree}</td>
                    <td>
                    <span class="fun-btn fun-btn-ed"><img src="./image/edit 1.png" alt="edit" id="edit"></span>
                    </td>
                    <td>
                    <span class="fun-btn fun-btn-del"><img src="./image/trash-2 1.png" alt="delete" id="delete"></span>
                    </td>`

    let tableBody = document.getElementById("table-body");
    tableBody.appendChild(row);

    for(let i=0;i<inputs.length;++i){    // make empty inputs after adding row.
      inputs[i].value="";
    }
 };

