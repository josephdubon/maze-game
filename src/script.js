const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

// Main function, create game grid
const displayBlock = function (blockChar, rowDiv, player) {
    let blockDiv = document.createElement("div")
    blockDiv.classList.add("block")
    // Create walls
    if (blockChar === "W") {
        blockDiv.classList.add("wall")
    }
    // Create floor 
    else if (blockChar === " ") {
        blockDiv.classList.add("floor")
    } else if (blockChar === "S") {
        // Create start
        blockDiv.classList.add("start")
        blockDiv.id = "start"
    } else if
    // Create finish 
    (blockChar === "F") {
        blockDiv.classList.add("finish")
        blockDiv.id = "finish"
    }
    // Output
    rowDiv.appendChild(blockDiv)
}

// Get maze output area
const displayRow = function (rowStr, index) {
    // Create and display a row div
    const maze = document.querySelector("#maze")
    let rowDiv = document.createElement("div")
    maze.appendChild(rowDiv)
    for (let columnNum = 0; columnNum < rowStr.length; columnNum++) {
        displayBlock(rowStr.charAt(columnNum), rowDiv)
    }
}
// Output
map.forEach(displayRow)
let startSpace = document.getElementById("start");
player.id = "player"
// Start position clear
startSpace.appendChild(player);
let playerTop = 0;
let playerLeft = 0;
let playerActive = document.getElementById("player");
let playerRow = 9;
let playerColumn = 0;

// Event listener for keys
document.addEventListener("keydown", (event) => {
    // Left and right
    if (event.keyCode === 37) {
        // Don't run into a wall
        if (map[playerRow][playerColumn - 1] !== "W") {
            if (playerLeft > 0) {
                playerLeft -= 20;
                playerActive.style.left = playerLeft + "px";
                playerColumn -= 1;
            }
        }
    } else if (event.keyCode === 38) {
        // Don't run into a wall
        if (map[playerRow - 1][playerColumn] !== "W") {
            playerTop -= 24;
            playerActive.style.top = playerTop + "px";
            playerRow -= 1;
        }
    } // Up and down
    else if (event.keyCode === 39) {
        // Don't run into a wall
        if (map[playerRow][playerColumn + 1] !== "W") {
            playerLeft += 20;
            playerActive.style.left = playerLeft + "px";
            playerColumn += 1;
        }
    } else if (event.keyCode === 40) {
        // Don't run into a wall
        if (map[playerRow + 1][playerColumn] !== "W") {
            playerTop += 24;
            playerActive.style.top = playerTop + "px";
            playerRow += 1;
        }
    }
    finishMaze()
})

function finishMaze() {
    // Finish position
    if (map[playerRow][playerColumn] === "F") {
        // Open new window
        var myWindow = window.open("", "", "width=200, height=50");
        myWindow.document.write("<p>Congratulations, you have completed the maze!</p>");
        // Close window after a short moment
        setTimeout(function () {
            myWindow.close()
        }, 2000);
        location.reload()
    }
}