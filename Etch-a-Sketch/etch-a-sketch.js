let container = document.getElementById("container");


function createGrid(){
    let size = prompt("Enter grid size: ");
    while(size > 101){
        size = prompt("Grid Size should be less then 100.Enter grid size: ");
    }

    for(let i = 0; i < size*size ; i++){
        container.innerHTML += '<div class="grid"></div>';
    }
}
