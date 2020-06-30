// Test connection to index.html
// console.log("Get script-y wit it. Na-Na Na Na N-Na Na.")

// Main project structure and flow influenced by 
// Randy 's demos and reference code. Thank you Randy.

// Declare variables
let x, y

// Declare maze and DOM reference point for the maze in index.html
const mainMazeEl = document.getElementById('maze')

// Create main maze function
const initMaze = function (blueprint) {

    // Main for loop - rows
    for (let rowNum = 0; rowNum < blueprint.length; rowNum++) {

        // rowString will be an element from blueprint
        const rowString = blueprint[rowNum]
        let blockDivs = ''

        // Columns for loop
        for (let colNum = 0; colNum < rowString.length; colNum++) {
            const blockType = rowString[colNum]

            // If block type is a wall do something
            if (blockType === 'W') {
                blockDivs += '<div class="block wall"></div>'
            }

            // Start block
            else if (blockType === 'S') {
                blockDivs += '<div class="block start"></div>'
                y = rowNum
                x = colNum
            }

            // Finish block
            else if (blockType === 'F') {
                blockDivs += '<div class="block finish"></div>'
                y = rowNum
                x = colNum
            } else {
                blockDivs += '<div class="block"></div>'
            }
        }

        // Output to index.html as a real thing - rows
        mainMazeEl.innerHTML += '<div class="row">' + blockDivs + '</div>'
    }
}

// Initiate AKA create maze
initMaze(mapFromDemo)