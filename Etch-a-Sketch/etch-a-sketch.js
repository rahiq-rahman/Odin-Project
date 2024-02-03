let container = document.getElementById("container");

function createGrid(){
    let size = prompt("Enter grid size: ");

    while(size > 50){
        size = prompt("Grid Size should be less then 50.Enter grid size: ");
    }
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
    for(let i = 0; i < size*size ; i++){
        container.innerHTML += '<div class="grid" onmouseover="changeBackground(this)"></div>';
    }
}

function changeBackground(x){
    x.style.backgroundColor = 'red';
}
