// Test connection to index.html
// console.log("Get script-y wit it. Na-Na Na Na N-Na Na.")

// Main project structure and flow influenced by 
// Randy 's demos and reference code. Thank you Randy.

// Model view

// Declare variables
let x, y

// Declare maze and DOM reference point for the maze in index.html
const mainMazeEl = document.getElementById('maze')

// Create main maze function
const initMaze = function (blueprint) {

    // For loop - row
    for (let rowPos = 0; rowPos < blueprint.length; rowPos++) {

        // rowString will be an element from blueprint
        const rowString = blueprint[rowPos]

        // Declare blockDivs outside for loops
        let blockDivs = ''

        // For loop - col
        for (let colPos = 0; colPos < rowString.length; colPos++) {

            const blockType = rowString[colPos]

            // Test
            // console.log(mapFromDemo[i])

            // If block type is a wall do something
            if (blockType === 'W') {
                blockDivs += '<div class="block wall"></div>'
            }

            // Start block / loop through each row
            else if (blockType === 'S') {
                blockDivs += '<div class="block start"></div>'
                y = rowPos
                x = colPos
            }

            // Finish block / Create the blocks
            else if (blockType === 'F') {
                blockDivs += '<div class="block finish"></div>'
                y = rowPos
                x = colPos
            }
            // Normal block
            else {
                blockDivs += '<div class="block"></div>'
            }
        }

        // Output to index.html as a 'real' thing - rows
        // Using innerHTML replaces everything in maze html area with += stuff
        mainMazeEl.innerHTML += '<div class="row">' + blockDivs + '</div>'
    }
}

// Initiate AKA create maze
// Test with mapFromDemo for simplicity
initMaze(mapFromDemo)