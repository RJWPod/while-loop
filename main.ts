input.onPinPressed(TouchPin.P0, function () {
    while (Pause == 2) {
        if (Enemy_Variable == true) {
            if (Player.isTouching(Enemy)) {
                game.addScore(1)
                Enemy.delete()
                Pause = 1
                Enemy_Variable = true
            } else if (Enemy.get(LedSpriteProperty.Y) == 4) {
                Enemy.delete()
                Pause = 1
                Enemy_Variable = true
            }
        }
    }
    Pause = 0
})
input.onButtonPressed(Button.A, function () {
    Player.move(-1)
})
input.onButtonPressed(Button.B, function () {
    Player.move(1)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showNumber(game.score())
})
input.onGesture(Gesture.Shake, function () {
    Pause = 1
    Enemy_Variable = true
    Enemy = game.createSprite(randint(0, 4), 0)
    while (Enemy_Variable == true) {
        basic.pause(150)
        Enemy.change(LedSpriteProperty.Y, 1)
        basic.pause(150)
        if (Enemy.get(LedSpriteProperty.Y) == 4 && Pause == 2) {
            Enemy.delete()
            game.pause()
            break;
        } else if (Player.isTouching(Enemy)) {
            game.addScore(1)
            Enemy.set(LedSpriteProperty.X, randint(0, 4))
            Enemy.set(LedSpriteProperty.Y, 0)
        } else if (Enemy.get(LedSpriteProperty.Y) == 4) {
            Enemy.set(LedSpriteProperty.X, randint(0, 4))
            Enemy.set(LedSpriteProperty.Y, 0)
        }
    }
})
let Enemy: game.LedSprite = null
let Enemy_Variable = false
let Pause = 0
let Player: game.LedSprite = null
Player = game.createSprite(2, 4)
game.setScore(0)
