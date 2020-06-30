// Test connection to index.html
console.log("Get script-y wit it. Na-Na Na Na N-Na Na.")

// Maze maps here AKA 'models'

// Maze ASCII intro from 
// https://ascii.co.uk/art/maze

// 88,dPYba,,adPYba,  ,adPPYYba, 888888888  ,adPPYba,  
// 88P'   "88"    "8a ""     `Y8      a8P" a8P_____88  
// 88      88      88 ,adPPPPP88   ,d8P'   8PP"""""""  
// 88      88      88 88,    ,88 ,d8"      "8b,   ,aa  
// 88      88      88 `"8bbdP"Y8 888888888  `"Ybbd8"'  

// This map borrowed from the maze assessment map example in myKenzie
const mapFromDemo = [
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
]

// ASCII maze art from
// https://www.asciiart.eu/art-and-design/mazes
// Nveilleu@emr1.emr.ca (Normand Veilleux)
const mazeFromAAA = [
    "WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWFFFW",
    "W   W               W               W           W                   W   W",
    "W   W   WWWWWWWWW   W   WWWWW   WWWWWWWWW   WWWWW   WWWWW   WWWWW   W   W",
    "W               W       W   W           W           W   W   W       W   W",
    "WWWWWWWWW   W   WWWWWWWWW   WWWWWWWWW   WWWWW   W   W   W   WWWWWWWWW   W",
    "W       W   W               W           W   W   W   W   W           W   W",
    "W   W   WWWWWWWWWWWWW   W   W   WWWWWWWWW   WWWWW   W   WWWWWWWWW   W   W",
    "W   W               W   W   W       W           W           W       W   W",
    "W   WWWWWWWWWWWWW   WWWWW   WWWWW   W   WWWWW   WWWWWWWWW   W   WWWWW   W",
    "W           W       W   W       W   W       W           W   W           W",
    "W   WWWWW   WWWWW   W   WWWWW   W   WWWWWWWWW   W   W   W   WWWWWWWWWWWWW",
    "W       W       W   W   W       W       W       W   W   W       W       W",
    "WWWWWWWWWWWWW   W   W   W   WWWWWWWWW   W   WWWWW   W   WWWWW   WWWWW   W",
    "W           W   W           W       W   W       W   W       W           W",
    "W   WWWWW   W   WWWWWWWWW   WWWWW   W   WWWWW   WWWWW   WWWWWWWWWWWWW   W",
    "W   W       W           W           W       W   W   W               W   W",
    "W   W   WWWWWWWWW   W   WWWWW   WWWWWWWWW   W   W   WWWWWWWWWWWWW   W   W",
    "W   W           W   W   W   W   W           W               W   W       W",
    "W   WWWWWWWWW   W   W   W   WWWWW   WWWWWWWWW   WWWWWWWWW   W   WWWWWWWWW",
    "W   W       W   W   W           W           W   W       W               W",
    "W   W   WWWWW   WWWWW   WWWWW   WWWWWWWWW   WWWWW   W   WWWWWWWWW   W   W",
    "W   W                   W           W               W               W   W",
    "WSSSWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW",
]

// How to create a maze
// from https://ascii.co.uk/art/maze
/*
"If you wish to create your own mazes use the following grid and
replicate the bottom two lines as many times as you need to make a
large rectangle of little squares."

aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
8   8   8   8   8   8   8   8   8   8   8   8   8   8   8   8   8   8   8
8aaa8aaa8aaa8aaa8aaa8aaa8aaa8aaa8aaa8aaa8aaa8aaa8aaa8aaa8aaa8aaa8aaa8aaa8

"Then, all you have to do is knock down walls.  As a finishing
touch, replace by an 'a' all the 8's that are on top of a vertical
line or that show through a line of a's."

From me: 
Then replace 'a's and '8's with 'W' and add an 'S' and 'F' for start and finish positions, respectably.

*/