let container = document.getElementById("container");


function createGrid(){
    const size = prompt("Enter grid size: ");
    if(size < 101){

        for(let i = 0; i < size*size ; i++){
            container.innerHTML += '<div class="grid"></div>';
        }
    }
    else 
        size = prompt("Grid Size should be less then 100.Enter grid size: ");
}
