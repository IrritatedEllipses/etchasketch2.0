// var color = "black"
// var rainbow = false
var main = document.querySelector('#mainGrid');

// Main Grid Generator
function genDivs(gridSize) {
    clearGrid()

    for (x = 1; x <= gridSize * gridSize; x++) {
        let cell = document.createElement('div');
        cell.className = "gridSquare";
        cell.style.width = (750 / gridSize - 2).toString() + 'px'
        cell.style.height = (750 / gridSize - 2).toString() + 'px'
        main.appendChild(cell);
        main.addEventListener('mouseover', function (event) {
           if (event.target.className.toLowerCase() == "gridsquare") {
                event.target.style.backgroundColor = 'black'
            }
        })
        

    }
}

// Function for clearing the screen

function clearGrid(){
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
}

// Button for setting Grid
var setGrid = () => {
    let rowSize = window.prompt("How many squares dost thou need? (Don't go above 128, bad things happen)");
    clearGrid();
    genDivs(rowSize);
}

// Button Event Listeners
var setGridBtn = document.querySelector("#setGridBtn")
setGridBtn.addEventListener("click", setGrid)
window.onload = genDivs(8)