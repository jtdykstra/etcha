let GRID_SIZE = 64;
let size = window.matchMedia("(max-width: 600px)");
if(size.matches) {
    GRID_SIZE = 32;
    console.log("matches");
}

console.log(GRID_SIZE);

let coordX = 0;
let coordY = GRID_SIZE - 1;

mainElement = document.querySelector("#content");
clearBtn = document.createElement('button');
clearBtn.id = 'clear-btn';
clearBtn.innerText = "Clear";
mainElement.appendChild(clearBtn);

for (let outerGridInd = 0; outerGridInd < GRID_SIZE*GRID_SIZE; ++outerGridInd) {
    mainElement = document.querySelector("#pad");
    newElement = document.createElement('div');
    newElement.classList.add('grid-node');
    newElement.id = `grid-node-x${outerGridInd % GRID_SIZE}y${Math.floor(GRID_SIZE - (outerGridInd / GRID_SIZE))}`;
    mainElement.appendChild(newElement);
}

let gridNodes = document.querySelectorAll('.grid-node');

gridNodes.forEach((n) => {
    n.addEventListener('mouseenter', colorSquare);
});

window.addEventListener('keydown', keyDownHandler);
window.addEventListener('keyup', keyUpHandler);

let keyHandlers = {68: () => { move(1, 0) }, 
                   87: () => { move(0, 1) },
                   83: () => { move(0, -1) },
                   65: () => { move(-1, 0) }};
let timers = {};
const REPEAT_INTERVAL = 50;

function move(x, y) {
    coordX = coordX + x;
    coordY = coordY + y;

    if (coordX < 0) {
        coordX = 0;
    }
    if (coordY < 0) {
        coordY = 0;
    }
    if (coordX > GRID_SIZE) {
        coordX = GRID_SIZE;
    }
    if (coordY > GRID_SIZE) {
        coordY = GRID_SIZE;
    }
    console.log("x " + coordX);
    console.log("y " + coordY);

    query = `#grid-node-x${coordX}y${coordY}`;
    console.log("query is " + query);
    square = document.querySelector(query);
    console.log(square);

    if (square != null) {
        square.style.backgroundColor = 'black';
    }
}

function keyDownHandler(e) {
    console.log("key down " + e.keyCode);

    if (!(e.keyCode in keyHandlers))
        return true;
    if (!(e.keyCode in timers)) {
        timers[e.keyCode] = null;
        keyHandlers[e.keyCode]();
        timers[e.keyCode] = setInterval(keyHandlers[e.keyCode], REPEAT_INTERVAL);
    }
}

function keyUpHandler(e) {
    console.log("key up " + e.keyCode);
    if (e.keyCode in timers) {
        clearInterval(timers[e.keyCode]);
        delete timers[e.keyCode];
    }
}

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

