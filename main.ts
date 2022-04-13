input.onButtonPressed(Button.A, function () {
    Player.move(-1)
})
input.onPinPressed(TouchPin.P2, function () {
    game.pause()
    basic.showNumber(Points)
    basic.pause(2000)
    game.resume()
})
input.onButtonPressed(Button.B, function () {
    Player.move(1)
})
input.onPinPressed(TouchPin.P1, function () {
    if (Pause == 0) {
        game.pause()
        Pause = 1
    } else if (Pause == 1) {
        game.resume()
        Pause = 0
    }
})
input.onGesture(Gesture.Shake, function () {
    Enemy_Variable = 1
    if (Enemy_Variable == 1) {
        Enemy = game.createSprite(randint(1, 4), 0)
        while (true) {
            basic.pause(300)
            Enemy.change(LedSpriteProperty.Y, 1)
            basic.pause(300)
            if (Player.isTouching(Enemy)) {
                Points += 1
                Enemy.set(LedSpriteProperty.X, randint(1, 4))
                Enemy.set(LedSpriteProperty.Y, 0)
            } else if (Enemy.get(LedSpriteProperty.Y) == 4) {
                Enemy.set(LedSpriteProperty.X, randint(1, 4))
                Enemy.set(LedSpriteProperty.Y, 0)
            }
        }
    }
})
let Enemy: game.LedSprite = null
let Pause = 0
let Points = 0
let Enemy_Variable = 0
let Player: game.LedSprite = null
Player = game.createSprite(2, 4)
Enemy_Variable = 0
Points = 0
Pause = 0
