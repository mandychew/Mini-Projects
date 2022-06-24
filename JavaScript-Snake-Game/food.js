import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

// note that 0 is technically outside our board; coordinates must be 1 <= _ <= 21
let food = getRandomFoodPosition()
const EXPANSION_RATE = 5 // EXPANSION_RATE = how much snake grows every time it eats food

export function update() {
    // if Snake is on food, eat the food
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE)
        food = getRandomFoodPosition()
    }
}

export function draw(gameBoard) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition() {
    let newFoodPosition
    // if newFoodPosition is null or on the snake, get a new position
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}