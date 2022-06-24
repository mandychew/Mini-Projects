import random

class IslandClass:

    Island = None
    sand = '.'
    treasure = 'T'
    found_treasure = 'X'
    hole = 'O'

    def Constructor(self):
        # create Island that is a rectangular grid, 30 squares by 10 squares
        self.Island = [[self.sand for x in range(30)] for y in range(10)]

    def GetSquare(self, Row, Column):
        # return character at certain row and column number
        return self.Island[Row][Column]

    def DisplayGrid(self):
        # iterate through and print entire Island (30 sqaures by 10 squares)
        for row in range(10):
            for col in range(30):
                print(self.GetSquare(row, col), end="")
            print('\n')

    def HideTreasure(self):
        # hide treasure at a random location on Island
        is_treasure_hidden = False
        while is_treasure_hidden == False:
            row = random.randint(0, 9)
            col = random.randint(0, 29)

            # check if this location on the island doesn't have treasure
            if self.GetSquare(row, col) == self.sand:
                self.Island[row][col] = self.treasure
                is_treasure_hidden = True

    def DigHole(self, Row, Column):
        # dig a hole at the specified row and column. If there is no treasure, replace sand with 'O'.
        # If there is treasure, replace sand with 'X'.
        square = self.GetSquare(Row, Column)
        if square == self.sand:
            self.Island[Row][Column] = self.hole
        if square == self.treasure:
            self.Island[Row][Column] = self.found_treasure
        return

def main():
    i = IslandClass()
    i.Constructor()
    for x in range(3):
        i.HideTreasure()
    i.DisplayGrid()
    need_input = True
    while need_input == True:
        row = int(input("Choose a row to dig for treasure (any integer from 1 to 10): ")) - 1
        col = int(input("Choose a column to dig for treasure (any integer from 1 to 30): ")) - 1
        if 0 <= row <= 9 and 0 <= col <= 29:
            need_input = False
        else:
            row = int(input("Choose a row to dig for treasure (from 1 to 10): ")) - 1
            col = int(input("Choose a column to dig for treasure (from 1 to 30): ")) - 1
    i.DigHole(row, col)
    i.DisplayGrid()

if __name__ == "__main__":
    main()