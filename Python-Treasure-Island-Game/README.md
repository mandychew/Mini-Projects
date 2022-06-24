# Python-Treasure-Island-Game
This project is inspired by a question in the Hwa Chong Institution Computing Higher 2 Preliminary Examination 2018 Paper 1 (9597/01).

## Details
A programmer is writing a treasure island game to be played on the computer.  

The island is a rectangular grid, 30 squares by 10 squares. Each square of the island is represented by an element in a 2D array. The top left square of the island is represented by the array element [0, 0].  

There are 30 squares across and 10 squares down.
The computer will:  
- generate three random locations where treasure will be buried
- prompt the player for the location of one square where the player choose to dig
- display the contents of the array by outputting for each square:
    - '.' for only sand in this square
    - 'T' for treasure still hidden in sand
    - 'X' for a hole dug where treasure was found
    - 'O' for a hole dug where no treasure was found.
    
Here is an example display after the player has chosen to dig at location [9, 3]:  

. . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  
. . . . . . . . . . . . . . . . . .T. . . . . . . . . . .  
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  
. . .T. . . . . . . . . . . . . . . . . . . . . . . . . .  
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  
. . .X . . . . . . . . . . . . . . . . . . . . . . . . . .  

The game is to be implemented using object oriented programming.  

The programmer has designed the class `IslandClass`. The identifier table for this class is:  
**Identifier** | **Data Type** | **Description**
--- | --- | ---
`Grid` | ARRAY[0:9, 0:29] OF CHAR | 2D array to represent the squares of the island
`Constructor()` | | instantiates an object of class `IslandClass` and initialises all squares to sand
`HideTreasure()` | | generates a pair of random numbers used as the grid location of treasure and marks the square with 'T'
`DigHole(Row, Column)` | | takes as parameter a valid grid location and marks the square with 'X' or 'O' as appropriate
`GetSquare(Row, Column)` | CHAR | takes as parameter a valid grid location and returns the grid value for that square from the `IslandClass` object
`DisplayGrid()` | | shows the current grid data. `DisplayGrid` should make use of the getter method `GetSquare` of the `IslandClass` class

## Task 1.1  
Write program code for the class `IslandClass` including the `Constructor`, `GetSquare` and `DisplayGrid` methods. The code should follow the specification given.  

The value to represent sand should be declared as a constant.  

Do not attempt to write the methods `HideTreasure` or `DigHole` at this stage.  

### Evidence 1
Program code for Task 1.1 [5 marks]  

## Task 1.2
Write program code for the `HideTreasure` method. Your method should check that the random location generated does not already contain treasure.  

The value to represent treasure should be declared as a constant.  

### Evidence 2
Your program code for Task 1.2 [3 marks]

## Task 1.3
Write a main program to:
- create an `IslandClass` object
- generate three random locations where treasures will be buried
- your program will then call the `DisplayGrid` method.  

### Evidence 3
The program code for Task 1.3 [3 marks]

### Evidence 4
Screenshot showing the output from running the program in Task 1.3 [1 mark]  

## Task 1.4
Write program code for the `DigHole` method. This method takes two integers as parameters. These parameters form a valid grid location. The location is marked with 'X' or 'O' as appropriate.  

The values to represent treasure, found treasure and hole should be declared as constants.  

### Evidence 5
Program code for Task 1.4. [3 marks]

## Task 1.5
Add code to the main program in Task 1.3.  

The program is to:
- prompt the player for a location to dig
- validate the user input
- call the `DigHole` method and then the `DisplayGrid` method.  

### Evidence 6
The program code. [3 marks]

## Task 1.6
Run the program by inputting a location where:
- the treasure is not found
- the treasure is found.

### Evidence 7
Screenshot evidence similar to that shown which shows:  

- The player has chosen to dig at location [2, 25] where no treasure was found  
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  
. . . .T . . . . . . . . . . . . . . . . . . . . . . . . .  
. . . . . . . . . . . . . . . . . . . . . . . . . O. . . .  
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  
. . . . . . . . . .T . . . . . . . . . . . . . . . . . . .  
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  
. . . . . . . . . . . . . . . . . .T . . . . . . . . . . .  
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  

- The player has chosen to dig at location [5, 3] where treasure was found  
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  
. . . . . . . . . . . . . . . T. . . . . . . . . . . . . .  
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  
. . . . . . . . . . . . . . . . . . . . . . . . . T. . . .  
. . . X. . . . . . . . . . . . . . . . . . . . . . . . . .  
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  

[2 marks]  

## Room for Improvement
- Edit error message when user inputs a non-integer (e.g. a float or a word)
- Allow users to input repeatedly until all the treasure is found
