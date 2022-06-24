let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }

window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            // if lastInputDirection is going down, cannot go up (game doesn't allow reversing of direction)
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: -1 } // y-- moves snake upwards
            break
        case 'ArrowDown':
            // if lastInputDirection is going up, cannot go down
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: 1 } // y++ moves snake down
            break
        case 'ArrowLeft':
            // if lastInputDirection is going right, cannot go left
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: -1, y: 0 } // x-- moves snake left
            break
        case 'ArrowRight':
            // if lastInputDirection is going left, cannot go right
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: 1, y: 0 } // x++ moves snake right
            break
    }
})

export function getInputDirection() {
    lastInputDirection = inputDirection
    return inputDirection
}