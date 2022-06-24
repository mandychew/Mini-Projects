function Stopwatch() {
    let startTime, endTime
    let state = 0
    let duration = 0

    this.start = function() {
        if(state == 1) {
            throw new Error('Stopwatch has already started.')
        }
        state = 1
        startTime = performance.now() // can also use startTime = new Date()
    }

    this.stop = function() {
        if(state == 0) {
            throw new Error('Stopwatch is not started.')
        }
        state = 0
        endTime = performance.now()

        const seconds = (endTime - startTime) / 1000 // divided by 1000 to get seconds
        duration += seconds
    }

    this.reset = function() {
        startTime = null
        endTime = null
        state = 0
        duration = 0
    }

    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration
        }
    })
}