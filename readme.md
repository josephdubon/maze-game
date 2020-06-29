## Assessment: Maze
Today, you will create a JavaScript game that displays a maze, and lets the player use the cursor keys to move through it one step at a time. The maze is a 2D array of cells which are either floors (passable) or walls (impassable).

## GitLab Pages URL
https://josephdubon.gitlab.io/maze-q1

### Assessment Development Plan
    1. Make each cell of the maze a DIV.
        a. Make each row of the maze a DIV using "display: flex;"
        b. Either A) use an absolutely-positioned DIV to represent the player's current position in the maze, or B) have your player DIV appended to a cell DIV for the same reason.
        c.
    2. You need to keep track of (or retrieve on demand) the player's current position in the maze (row index and column index). You could do this one of several ways. You could keep a persistent record of the player's position in, say, a global array or object whose sole job is keeping track of the player's current position. You could constantly update your map array to reflect your player's movement (move the "S" around). You could keep your indexes in data attributes in your HTML and access them through player DIV's "parentElement" property (in the case of 3B). Or you could do a little math on the player DIV's current position on the screen, relative to the start element's current position on the screen and the size of your cells (in the case of 3A).
        a.
        b.
        c.
    3. Movement can be performed a couple different ways: In the case of 3A, change the absolute position of the player DIV. Or, in the case of 3B, append the player DIV to the next cell DIV. (You could use "document.querySelector()", and the CSS selector for attributes to get the next cell element by the indexes you set on it via data attributes.)
        a.
        b.
        c.
### Requirements

    1. The player must start on the start square.
    2. Set up an event handler(s) to move your player DIV around the same way you did for the previous assessment on keyboard events.
    3. Don't allow the player to move into a wall or outside the boundary of the maze.
    4. When the player moves onto the finish square, show the user that they have won (don't use console.log or alert for this).


#### How to Break Down a Project

1. Read the requirements document in detail.
	a. Take notes of important points.
	b. Write down your questions.
2. Answer your questions!
3. Make a development plan.
	a. Describe the entire behavior of the program in 3 (or at most 4) steps. Don't use any JavaScript words!
	b. Break down each item into 4 (or 4) smaller steps by asking the question, "How?".
	c. Repeat until it's obvious how to turn the step into JS code.
4. Write the code!

#### License
MIT License

Copyright (c) [2020] [Joseph Adonay Dubon]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.