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
    row.innerHTML = ` <th>${newObj.ID}</th>
                    <th>${newObj.name}</th>
                    <th>${newObj.email}</th>
                    <th>${newObj.age}</th>
                    <th>${newObj.grade}</th>
                    <th>${newObj.degree}</th>`

    let table = document.getElementById("table");
    table.appendChild(row);
 };
  

 