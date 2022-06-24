import { getInputDirection } from './input.js'

export const SNAKE_SPEED = 5
const snakeBody = [{x: 11, y: 11}] // {11,11} are coordinates of middle of board
let newSegments = 0

export function update() {
    addSegments()

    const inputDirection = getInputDirection()
    // the next part of the snake moves to where the part in front previously was
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }

    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}

export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}

// snake expands
export function expandSnake(amount) {
    newSegments += amount
}

// checks if any part of snake is on food; if it is, returns True
export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => {
        // don't want to return True if the snake head is on the snake head
        if (ignoreHead && index === 0) return false
        return equalPositions(segment, position)
    })
}

export function getSnakeHead() {
    return snakeBody[0]
}

export function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true })
}

// checks whether two positions are equal; if it is, returns True
function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        // take last part of snake, duplicate it, then expand outwards
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
    }

    newSegments = 0
}