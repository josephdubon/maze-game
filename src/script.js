// Test connection to index.html
// console.log("Get script-y wit it. Na-Na Na Na N-Na Na.")

// Main project structure and flow influenced by 
// Randy 's demos and reference code. Thank you Randy.

// Maze ASCII intro from 
// https://ascii.co.uk/art/maze

// 88,dPYba,,adPYba,  ,adPPYYba, 888888888  ,adPPYba,  
// 88P'   "88"    "8a ""     `Y8      a8P" a8P_____88  
// 88      88      88 ,adPPPPP88   ,d8P'   8PP"""""""  
// 88      88      88 88,    ,88 ,d8"      "8b,   ,aa  
// 88      88      88 `"8bbdP"Y8 888888888  `"Ybbd8"'  

// MAZE CODE STARTS HERE!!

// Declare maze and DOM reference point for the maze in index.html
const mainMazeEl = document.getElementById('maze')

// Declare variables
let x, y

const blueprint = mapFromDemo

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
                blockDivs += '<div id="startChar" class="block start"></div>'
                x = colPos
                y = rowPos
            }

            // Finish block / Create the blocks
            else if (blockType === 'F') {
                blockDivs += '<div class="block finish"></div>'
                x = colPos
                y = rowPos
            }
            // Normal block
            else if (blockType === ' ') {
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

// Tell me what key was pushed and then make that the function
document.onkeydown = logKey

// Start keyboard arrow keys code
function logKey(e) {
    // Test
    // log.textContent += ` ${e.code}`
    console.log(e.keyCode)

    // let ArrowDown key add 10 to the x variable
    if (e.keyCode === 40) {
        // Test
        console.log("arrow down")
        x += 10
        console.log(x)
    }
    // let ArrowUp key remove 10 to the x variable
    else if (e.keyCode === 38) {
        // Test
        console.log("arrow up")
        x += -10
        // Test
        console.log(x)
    }
    // let ArrowLeft key add 10 to the y variable
    else if (e.keyCode === 37) {
        // Test
        console.log("arrow left")
        y = y - 10
        // Test
        console.log(y)
    }
    // let ArrowRight key remove 10 to the y variable
    else if (e.keyCode === 39) {
        // Test
        console.log("arrow right")
        y = y + 10
        // Test
        console.log(y)
    }
    // Update attributes function
    document.getElementById("startChar").style.top = x + "px"
    document.getElementById("startChar").style.left = y + "px"
}

// End keyboard arrow keys code