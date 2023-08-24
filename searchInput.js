let searchInput = document.querySelector('.search input');

let rows = document.querySelectorAll('tbody tr')
// console.log(rows[1].children[2].textContent)


searchInput.addEventListener("input",(e)=>{
    // console.log(rows.cells[0].innerText)
    for(let i=1;i<rows.length;++i){
        let row = rows[i];
        let name = row.children[1].textContent.toLowerCase();
        let email = row.children[2].textContent.toLowerCase();
        let degree = row.children[5].textContent.toLowerCase();
        let search = searchInput.value.toLowerCase();
    
         if(name.includes(search)||email.includes(search)||degree.includes(search)){
            row.style.display='';
        }
        else{
            row.style.display='none';
        }
        
    }


})