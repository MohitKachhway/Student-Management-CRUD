//create modal to confirm deletion.
let delModalStr = `
<div class="delete-modal">
  <p>Do you really want to delete ?</details></p>
  <div class="Y-N-btn">
   <button id="Yes">Yes</button>
   <button id="No">No</button>
  </div>
 </div>`
let deleteModalContainer = document.createElement("div");
deleteModalContainer.className="delete-modal-container";
deleteModalContainer.innerHTML= delModalStr;
let mainContainer = document.getElementsByClassName("main-container")[0];
//modal end..



// Add a click event listener to the parent element that contains all the delete icon and edit icon
document.getElementById("table-body").addEventListener("click", (e) => {

   // --------------------deletion of row start---------------
  if (e.target && e.target.id==="delete") {              // This code will run when a delete button is clicked

        mainContainer.appendChild(deleteModalContainer)  // append modal to confirm deletion
        let delRow= e.target;
        let yesBtn = document.getElementById("Yes");
        let noBtn=document.getElementById("No");
        yesBtn.addEventListener("click",()=>{
          deleteModalContainer.remove();
          delRow.parentNode.parentNode.parentNode.remove();
        })
        noBtn.addEventListener("click",(e)=>{
               deleteModalContainer.remove(); 
                  return;
        })
  }
  // --------------------deletion of row end ---------------

  // ----------------------edit the row --------------------
  if(e.target && e.target.id==="edit"){
    
    let editRow= e.target.parentNode.parentNode.parentNode;
   
    // read data form row to edit and assinged into variable.
    inputs[0].value = editRow.children[1].innerText ;       
    inputs[1].value = editRow.children[2].innerText;
    inputs[2].value = editRow.children[4].innerText;
    inputs[3].value = editRow.children[3].innerText;
    inputs[4].value = editRow.children[5].innerText;
    inputs[5].style.display="none"                           // remove add button 

    let formContainer = document.getElementsByClassName("form-container")[0];
    let editButton = document.createElement("button");
    editButton.className="btn-edit";
    editButton.innerHTML="Edit"
    formContainer.appendChild(editButton);
    
  
     editButton.addEventListener("click",(e)=>{
      
      editRow.children[1].innerText = inputs[0].value;      //name
      editRow.children[2].innerText = inputs[1].value;      //email
      editRow.children[3].innerText =  inputs[3].value ;    //age
      editRow.children[4].innerText =  inputs[2].value ;    // grade
      editRow.children[5].innerText =  inputs[4].value ;    //degree
     
      for(let i=0;i<inputs.length;++i){                     //make empty inputs
        inputs[i].value="";
      }
      editButton.remove();                                   // after edit, delete the button
      inputs[5].style.display="block" ;                      // enable add button

      })
   
    
  }

});





