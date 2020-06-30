## Assessment: Maze
Today, you will create a JavaScript game that displays a maze, and lets the player use the cursor keys to move through it one step at a time. The maze is a 2D array of cells which are either floors (passable) or walls (impassable).

## GitLab Pages URL
https://josephdubon.gitlab.io/maze-q1

### Assessment Development Plan
    1. Initiate / draw maze

    2. Allow the user to move thorugh the maze, blocked by walls

    3. Game is won when the player reaches the finish block
    if currentBlock === finishBlock
    or
    if locationOfCurrentBlock === finishBLock


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