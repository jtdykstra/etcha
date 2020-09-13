const GRID_SIZE = 64;
console.log("starting loop!");

// todo: pull style out of this file
mainElement = document.querySelector("#content");
clearBtn = document.createElement('button');
clearBtn.innerText = "Clear";
clearBtn.style.width = '5vw';
clearBtn.style.margin = '5vh';
mainElement.appendChild(clearBtn);

for (let outerGridInd = 0; outerGridInd < GRID_SIZE*GRID_SIZE; ++outerGridInd) {
    mainElement = document.querySelector("#pad");
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

clearBtn.addEventListener('click', clearColoring);

function clearColoring(e) {
    
    gridNodes = document.querySelectorAll('.grid-node');

    [...gridNodes].forEach((node) => {
        node.style.backgroundColor = 'white';
    });
}

