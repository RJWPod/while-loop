input.onPinPressed(TouchPin.P0, function () {
    if (Enemy.isDeleted()) {
        game.pause()
    }
    Pause = 1
})
input.onButtonPressed(Button.A, function () {
    Player.move(-1)
})
input.onButtonPressed(Button.B, function () {
    Player.move(1)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showNumber(Points)
})
input.onGesture(Gesture.Shake, function () {
    game.resume()
    Pause = 0
    Enemy = game.createSprite(randint(0, 4), 0)
    while (true) {
        basic.pause(150)
        Enemy.change(LedSpriteProperty.Y, 1)
        basic.pause(150)
        if (Enemy.get(LedSpriteProperty.Y) == 4 && Pause == 1 || Enemy.get(LedSpriteProperty.Y) == 4 && Pause == 1) {
            Enemy.delete()
            game.pause()
            break;
        }
        if (Player.isTouching(Enemy)) {
            Points += 1
            Enemy.set(LedSpriteProperty.X, randint(0, 4))
            Enemy.set(LedSpriteProperty.Y, 0)
        } else if (Enemy.get(LedSpriteProperty.Y) == 4) {
            Enemy.set(LedSpriteProperty.X, randint(0, 4))
            Enemy.set(LedSpriteProperty.Y, 0)
        }
    }
})
let Points = 0
let Pause = 0
let Enemy: game.LedSprite = null
let Player: game.LedSprite = null
Player = game.createSprite(2, 4)
let Enemy_Variable = true
Enemy = game.createSprite(randint(0, 4), 0)
Enemy.delete()
Pause = 0
Points = 0
