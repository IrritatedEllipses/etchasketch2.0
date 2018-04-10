var color = document.getElementById('colors').value
var main = document.querySelector('#mainGrid');
var setGridBtn = document.querySelector("#setGridBtn")

// Main Grid Generator
function genDivs(gridSize) {
    clearGrid()

    for (x = 1; x <= gridSize * gridSize; x++) {
        let cell = document.createElement('div');
        cell.className = "gridSquare";
        cell.style.width = (750 / gridSize - 2).toString() + 'px'
        cell.style.height = (750 / gridSize - 2).toString() + 'px'
        main.appendChild(cell);
             
    }
}

// Function for clearing the screen

function clearGrid(){
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
}

// Setting Grid
var setGrid = () => {
    let rowQuery = window.prompt("How many rows would you like to etch in? I think I could do up to 64!");
    if (rowQuery > 64) {
        alert("I'm not really comfortable handling that many rows! How about sixty four instead?")
        
        clearGrid()
        genDivs(64);
    }
    else if (rowQuery < 2) {
        alert("You need at least a couple of squares! Otherwise this would be very boring. Here's four.")
        clearGrid()
        genDivs(2)
    }
    else if (isNaN(rowQuery) == true) {
        alert("I'm sorry, I only understand numerical values. Here's a couple of rows to get you going")
        clearGrid()
        genDivs(8)
    }
    else {
        clearGrid();
        genDivs(rowQuery)
        
    }
}


// Event Listeners

setGridBtn.addEventListener("click", setGrid)

// Color Listener
main.addEventListener('mouseover', function (event) {
    if (event.target.className.toLowerCase() == "gridsquare") {
        event.target.style.backgroundColor = colors.options[colors.selectedIndex].value
    }
})   

window.onload = genDivs(8)

