// define the view that the etch a sketch is going to take place in
const viewport = document.querySelector('#viewport');
const container = document.getElementById('container');
const resetButton = document.getElementById('resetButton');
const enterButton = document.getElementById('enterButton');
const userChoice = document.getElementById('userChoice');
const resolution = document.querySelector('.resolution');

// define regex to check for whole integer in userChoice
let numTest = new RegExp('[+-]?([0-9]*[.])?[0-9]+');

// set default values for numbers of rows and columns
let columns = 0;
let rows = 0;

// create function to create a grid of divs
function createGrid(){
    container.innerHTML = '';
    for (let i = 0; i < columns; i++){
        var column = document.createElement('div'); // create column
        column.className = 'column';
        for (var j = 0; j < rows; ++j) {
            var row = document.createElement('div'); // create row
            row.className = 'row';
            column.appendChild(row); // append row in column
        }
        container.appendChild(column);
        // Logic that allows for a grid element to be black when hovered over
        let rowListen = document.querySelectorAll('.row');
        rowListen.forEach((e) => {
            e.addEventListener('mouseenter', () => {
                e.classList.add('hovered');
                // test for hovered class
                    // if true, add the first filter to darken it
                    // if false, add hovered class
                // switch statement here?
            })
        });
            
    }
}

// function to make the grid blank and remove value from input bar and resolution
function clearGrid(){
    while (container.firstChild){
        container.removeChild(container.firstChild)
    }
    userChoice.value = ""
    userChoice.placeholder = "pixels per side"
    resolution.textContent = 'Current resolution: 0 x 0 pixels'
}

// function to change the resolution of the grid
function newResolution(){
    if (userChoice.value == '' || userChoice.value <= 0 || userChoice.value > 100 || !numTest.test(userChoice.value)){
        container.innerHTML = '<h4 style="margin-top:20px;">Please input a valid number of pixels to draw, between 1 and 100</h4>'
    } else {
        columns = userChoice.value;
        rows = userChoice.value;
        clearGrid()
        resolution.textContent = `Current resolution: ${rows} x ${columns} pixels`
        createGrid()
    }
}

/* resetButton needs changing to resetGrid function that makes all 
existing pixels white but keeps the resolution where is is */
resetButton.onclick = clearGrid;
enterButton.onclick = newResolution;