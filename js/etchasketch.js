// var color = "black"
// var rainbow = false
var main = document.getElementById('mainGrid');

// Main Grid Generator
function genDivs(gridSize) {
    clearGrid()
    for (i = 0; i < gridSize; i++){
        let row = document.createElement('div');
        row.className = "row";
        row.style.width = (750 / gridSize - 2).toString() + 'px'
        for (x = 1; x <= gridSize; x++){
            let cell = document.createElement('div');
            cell.className = "gridSquare";
            // cell.style.width = (750 / gridSize - 2).toString() + 'px'
            cell.style.height = (750 / gridSize - 2).toString() + 'px'
            row.appendChild(cell);
        
        main.appendChild(row);
            var hoverChange = document.querySelectorAll(".gridSquare")
            hoverChange.forEach(holding => {
                holding.addEventListener('mouseover', function (event) {
                    event.target.style.backgroundColor = 'black'
                })
            })
       
        }
    }
}

// Function for clearing the screen

function clearGrid(){
    for (i =0; i <= 256; i++) {
        while (main.firstChild) {
            main.removeChild(main.firstChild);
        }
    }
}

// Button for setting Grid
var setGrid = () => {
    let rowSize = window.prompt("How many rows would you like the grid to have?");
    clearGrid();
    genDivs(rowSize);
}

// Hover over to change colour


// Button Event Listeners
var setGridBtn = document.querySelector("#setGridBtn")
setGridBtn.addEventListener("click", setGrid)
window.onload = genDivs(8)