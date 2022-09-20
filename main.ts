input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
    bullet.set(LedSpriteProperty.Y, 3)
    bullet.set(LedSpriteProperty.X, BOB.get(LedSpriteProperty.X))
})
let bullet: game.LedSprite = null
let BOB: game.LedSprite = null
BOB = game.createSprite(2, 4)
bullet = game.createSprite(BOB.get(LedSpriteProperty.X), 10)
basic.forever(function () {
    BOB.set(LedSpriteProperty.X, Math.map(input.rotation(Rotation.Roll), -45, 30, 0, 4))
    bullet.change(LedSpriteProperty.Y, -1)
})
