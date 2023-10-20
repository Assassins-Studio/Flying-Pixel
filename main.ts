input.onButtonPressed(Button.A, function () {
    bird.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.AB, function () {
    game.pause()
})
input.onButtonPressed(Button.B, function () {
    bird.change(LedSpriteProperty.Y, -1)
})
let empty_obstacle = 0
let ticks = 0
let bird: game.LedSprite = null
bird = game.createSprite(0, 2)
bird.set(LedSpriteProperty.Blink, 300)
let obstacles: game.LedSprite[] = []
let index = 0
basic.forever(function () {
    while (obstacles.length > 0 && obstacles[0].get(LedSpriteProperty.X) == 0) {
        obstacles.removeAt(0).delete()
    }
    for (let obstacle of obstacles) {
        obstacle.change(LedSpriteProperty.X, -1)
    }
    if (ticks % 3 == 0) {
        empty_obstacle = randint(0, 4)
        for (let index = 0; index <= 4; index++) {
            if (index != empty_obstacle) {
                obstacles.push(game.createSprite(4, index))
            }
        }
    }
    for (let obstacle of obstacles) {
        if (obstacle.get(LedSpriteProperty.X) == bird.get(LedSpriteProperty.X) && obstacle.get(LedSpriteProperty.Y) == bird.get(LedSpriteProperty.Y)) {
            game.gameOver()
        }
    }
    ticks += 1
    basic.pause(1000)
})