const GRID_SIZE = 64;
console.log("starting loop!");

for (let outerGridInd = 0; outerGridInd < GRID_SIZE*GRID_SIZE; ++outerGridInd) {
    mainElement = document.querySelector("#content");
    newElement = document.createElement('div');
    newElement.classList.add('grid-node');
    newElement.style.backgroundColor = 'white';
    newElement.style.borderColor = '#f0e6e6';
    newElement.style.borderWidth = 'thin';
    newElement.style.borderStyle = 'solid';
    mainElement.appendChild(newElement);
}

let gridNodes = document.querySelectorAll('.grid-node');

gridNodes.forEach((n) => {
    n.addEventListener('mouseenter', colorSquare);
});

function colorSquare(e) {
    console.log(e);
    e.srcElement.style.backgroundColor = 'black';
}

