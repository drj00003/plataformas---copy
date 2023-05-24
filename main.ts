enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const estrella = SpriteKind.create()
    export const Seta = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.estrella, function (sprite, otherSprite) {
    info.changeScoreBy(100)
    sprites.destroy(otherSprite, effects.clouds, 500)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    player_1.setImage(img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . f f e e d f d d f d c . 
        . . . f d d e e d f d d f d c . 
        . . . c d b e e d d d d e e d c 
        f f . c d b e e d d c d d d d c 
        f e f . c f e e d d d c c c c c 
        f e f . . f f e e d d d d d f . 
        f e f . f e e e e f f f f f . . 
        f e f f e e e e e e e f . . . . 
        . f f e e e e f e f f e f . . . 
        . . f e e e e f e f f e f . . . 
        . . . f e f f b d f b d f . . . 
        . . . f d b b d d c d d f . . . 
        . . . f f f f f f f f f . . . . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    player_1.setImage(img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . f f 
        c c c c c d d d e e f c . f e f 
        . f d d d d d e e f f . . f e f 
        . . f f f f f e e e e f . f e f 
        . . . . f e e e e e e e f f e f 
        . . . f e f f e f e e e e f f . 
        . . . f e f f e f e e e e f . . 
        . . . f d b f d b f f e f . . . 
        . . . f d d c d d b b d f . . . 
        . . . . f f f f f f f f f . . . 
        `)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (player_1.isHittingTile(CollisionDirection.Bottom)) {
        player_1.vy = -150
    }
    animation.runImageAnimation(
    player_1,
    [img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . f f e e d f d d f d c . 
        . . . f d d e e d f d d f d c . 
        . . . c d b e e d d d d e e d c 
        f f . c d b e e d d c d d d d c 
        f e f . c f e e d d d c c c c c 
        f e f . . f f e e d d d d d f . 
        f e f . f e e e e f f f f f . . 
        f e f f e e e e e e e f . . . . 
        . f f e e e e f e f f e f . . . 
        . . f e e e e f e f f e f . . . 
        . . . f e f f b d f b d f . . . 
        . . . f d b b d d c d d f . . . 
        . . . f f f f f f f f f . . . . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . . f e e d f d d f d c . 
        . . . . f f e e d f d d f d c . 
        . . . f d d e e d d d d e e d c 
        . . . c d b e e d d c d d d d c 
        f f . c d b e e e d d c c c c c 
        f e f . c f f e e e d d d d f . 
        f e f . f e e e e f f f f f f . 
        f e f f e e e e e e e f f f f . 
        . f f e e e e f e f d d f d d f 
        . . f e e e e f e f b d f b d f 
        . . f e f f f f f f f f f f f f 
        . . f d d c f . . . . . . . . . 
        . . f f f f . . . . . . . . . . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . f f e e e d d d d f . . 
        . . . f d d e e d d d d d d c . 
        . . . c d b e e d f d d f d c . 
        f f . c d b e e d f d d f d d c 
        f e f . c f e e d d d d e e d c 
        f e f . . f e e e d c d d d d c 
        f e f . . f f e e e d c c c f . 
        f e f . f e e e e f f f f f . . 
        . f f f e e e e e e e f . . . . 
        . . f e e e e f e e f e f f . . 
        . . f e e e f f f e e f f e f . 
        . f b f f f f f f c d d b d d f 
        . f d d c f . . f d d d c d d f 
        . . f f f . . . f f f f f f f . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . f f f e e e e e f . . . 
        . . . f d d e e e e d d d f . . 
        . . . c d b e e e d d d d d c . 
        . . . c d b e e d d d d d d c . 
        . f f . c f e e d f d d f d d c 
        f e f . . f e e d f d d f d d c 
        f e f . . f e e d d d d e e d c 
        f e f . . f f e e d c d d d f . 
        f e f . f e e e e e d f f f . . 
        . f f f e e e e e e e f . . . . 
        . . f f b e e e e e f f . . . . 
        . . f f d d c e e f f e f . . . 
        . . . . f f f c d d b d d f . . 
        . . . . . f f d d d c d d f . . 
        . . . . . . f f f f f f f . . . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . f f e e d f d d f d c . 
        . . . f d d e e d f d d f d c . 
        . . . c d b e e d d d d e e d c 
        . . . c d b e e d d c d d d d c 
        . . . . c f e e e d d c c c c c 
        . . . . . f f e e e d d d d f . 
        . . . . f e e e e f f f f f . . 
        f f . f e e e e e e f f . . . . 
        f e . f e e f e e f e e f . . . 
        f e . f e e e f e e f e e f . . 
        f e f f e f b b f b d f d b f . 
        f f f f e b d d f d d f d d f . 
        . f f f f f f f f f f f f f . . 
        `],
    100,
    false
    )
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f e e e e e e f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f e e e e f f e e e e f . . 
        . . f e f f e e e e e e e f . . 
        . . f e f f e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . . f e e e f f e e e e e f . . 
        . . f e e e f f e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . . . f e e e e e e f . . . . 
        . . . . . f f f f f f . . . . . 
        `, player_1, 75, 0)
    pause(2000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Seta, function (sprite, otherSprite) {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(50)
    sprites.destroy(otherSprite, effects.fire, 500)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.confetti, 200)
    info.changeScoreBy(25)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.gameOver(false)
    info.changeScoreBy(0)
})
let projectile: Sprite = null
let player_1: Sprite = null
info.setScore(0)
tiles.setCurrentTilemap(tilemap`nivel1`)
player_1 = sprites.create(img`
    . . . . . . . f f f f f . . . . 
    . . . . . . f e e e e e f . . . 
    . . . . . f e e e d d d d f . . 
    . . . . f f e e d f d d f d c . 
    . . . f d d e e d f d d f d c . 
    . . . c d b e e d d d d e e d c 
    f f . c d b e e d d c d d d d c 
    f e f . c f e e d d d c c c c c 
    f e f . . f f e e d d d d d f . 
    f e f . f e e e e f f f f f . . 
    f e f f e e e e e e e f . . . . 
    . f f e e e e f e f f e f . . . 
    . . f e e e e f e f f e f . . . 
    . . . f e f f b d f b d f . . . 
    . . . f d b b d d c d d f . . . 
    . . . f f f f f f f f f . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(player_1, tiles.getTileLocation(0, 9))
scene.cameraFollowSprite(player_1)
player_1.ay = 280
controller.moveSprite(player_1, 100, 0)
let cubo_1 = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
    f 5 f 5 5 5 5 5 5 5 5 5 5 f 5 f 
    f 5 5 5 5 5 f f f f 5 5 5 5 5 f 
    f 5 5 5 5 f 1 1 1 1 f 5 5 5 5 f 
    f 5 5 5 f 1 1 1 1 1 1 f 5 5 5 f 
    f 5 5 5 f 1 1 f f 1 1 f 5 5 5 f 
    f 5 5 5 f f f f 1 1 1 f 5 5 5 f 
    f 5 5 5 5 5 f 1 1 f f 5 5 5 5 f 
    f 5 5 5 5 5 f f f f 5 5 5 5 5 f 
    f 5 5 5 5 5 f 1 1 f 5 5 5 5 5 f 
    f 5 5 5 5 5 f 1 1 f 5 5 5 5 5 f 
    f 5 5 5 5 5 f f f f 5 5 5 5 5 f 
    f 5 f 5 5 5 5 5 5 5 5 5 5 f 5 f 
    f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Food)
tiles.placeOnTile(cubo_1, tiles.getTileLocation(2, 3))
let cubo_2 = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
    f 5 f 5 5 5 5 5 5 5 5 5 5 f 5 f 
    f 5 5 5 5 5 f f f f 5 5 5 5 5 f 
    f 5 5 5 5 f 1 1 1 1 f 5 5 5 5 f 
    f 5 5 5 f 1 1 1 1 1 1 f 5 5 5 f 
    f 5 5 5 f 1 1 f f 1 1 f 5 5 5 f 
    f 5 5 5 f f f f 1 1 1 f 5 5 5 f 
    f 5 5 5 5 5 f 1 1 f f 5 5 5 5 f 
    f 5 5 5 5 5 f f f f 5 5 5 5 5 f 
    f 5 5 5 5 5 f 1 1 f 5 5 5 5 5 f 
    f 5 5 5 5 5 f 1 1 f 5 5 5 5 5 f 
    f 5 5 5 5 5 f f f f 5 5 5 5 5 f 
    f 5 f 5 5 5 5 5 5 5 5 5 5 f 5 f 
    f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Food)
tiles.placeOnTile(cubo_2, tiles.getTileLocation(19, 0))
let cubo_3 = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
    f 5 f 5 5 5 5 5 5 5 5 5 5 f 5 f 
    f 5 5 5 5 5 f f f f 5 5 5 5 5 f 
    f 5 5 5 5 f 1 1 1 1 f 5 5 5 5 f 
    f 5 5 5 f 1 1 1 1 1 1 f 5 5 5 f 
    f 5 5 5 f 1 1 f f 1 1 f 5 5 5 f 
    f 5 5 5 f f f f 1 1 1 f 5 5 5 f 
    f 5 5 5 5 5 f 1 1 f f 5 5 5 5 f 
    f 5 5 5 5 5 f f f f 5 5 5 5 5 f 
    f 5 5 5 5 5 f 1 1 f 5 5 5 5 5 f 
    f 5 5 5 5 5 f 1 1 f 5 5 5 5 5 f 
    f 5 5 5 5 5 f f f f 5 5 5 5 5 f 
    f 5 f 5 5 5 5 5 5 5 5 5 5 f 5 f 
    f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Food)
tiles.placeOnTile(cubo_3, tiles.getTileLocation(31, 4))
let star1 = sprites.create(img`
    . . . . . . . b b . . . . . . . 
    . . . . . . b d d b . . . . . . 
    . . . . . b d 5 5 d b . . . . . 
    . . . . b b 5 5 5 5 b b . . . . 
    . . . . b 5 5 5 5 5 5 b . . . . 
    b b b b b 5 5 5 5 1 1 d b b b b 
    b 5 5 5 5 5 5 5 5 1 1 1 5 5 5 b 
    b d d 5 5 5 5 5 5 1 1 1 5 d d b 
    . b d d 5 5 5 5 5 5 5 5 d d b . 
    . . b b 5 5 5 5 5 5 5 5 b b . . 
    . . c b 5 5 5 5 5 5 5 5 b c . . 
    . . c 5 5 5 5 d d 5 5 5 5 c . . 
    . . c 5 5 d b b b b d 5 5 c . . 
    . . c 5 d b c c c c b d 5 c . . 
    . . c c c c . . . . c c c c . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.estrella)
tiles.placeOnTile(star1, tiles.getTileLocation(23, 8))
let star2 = sprites.create(img`
    . . . . . . . b b . . . . . . . 
    . . . . . . b d d b . . . . . . 
    . . . . . b d 5 5 d b . . . . . 
    . . . . b b 5 5 5 5 b b . . . . 
    . . . . b 5 5 5 5 5 5 b . . . . 
    b b b b b 5 5 5 5 1 1 d b b b b 
    b 5 5 5 5 5 5 5 5 1 1 1 5 5 5 b 
    b d d 5 5 5 5 5 5 1 1 1 5 d d b 
    . b d d 5 5 5 5 5 5 5 5 d d b . 
    . . b b 5 5 5 5 5 5 5 5 b b . . 
    . . c b 5 5 5 5 5 5 5 5 b c . . 
    . . c 5 5 5 5 d d 5 5 5 5 c . . 
    . . c 5 5 d b b b b d 5 5 c . . 
    . . c 5 d b c c c c b d 5 c . . 
    . . c c c c . . . . c c c c . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.estrella)
tiles.placeOnTile(star2, tiles.getTileLocation(31, 0))
let setaa = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . f f f f . . . . . 
    . . . . . . f 1 2 1 2 f f . . . 
    . . . . . f f 1 2 2 1 2 2 f . . 
    . . . . f 2 1 2 2 2 2 2 f . . . 
    . . . f 1 2 2 2 1 1 2 2 f . . . 
    . . . . f f f f f f f f . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Seta)
setaa.setScale(6, ScaleAnchor.Middle)
tiles.placeOnTile(setaa, tiles.getTileLocation(42, 7))
let enemy1 = sprites.create(img`
    . . . . . . . . . . . c c . . . 
    . . . . . . . c c c c 6 3 c . . 
    . . . . . . c 6 3 3 3 3 6 c . . 
    . . c c . c 6 c c 3 3 3 3 3 c . 
    . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
    . f f 5 c 6 c 5 f f 3 3 3 3 3 c 
    . f f 5 c 6 c 5 f f 6 3 3 3 c c 
    . b 5 5 3 c 3 5 5 c 6 6 6 6 c c 
    . . b 5 5 3 5 5 c 3 3 3 3 3 3 c 
    . c c 5 5 5 5 5 b c c 3 3 3 3 c 
    c 5 5 4 5 5 5 4 b 5 5 c 3 3 c . 
    b 5 4 b 4 4 4 4 b b 5 c b b . . 
    c 4 5 5 b 4 b 5 5 5 4 c 4 5 b . 
    c 5 5 5 c 4 c 5 5 5 c 4 c 5 c . 
    c 5 5 5 5 c 5 5 5 5 c 4 c 5 c . 
    . c c c c c c c c c . . c c c . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(enemy1, tiles.getTileLocation(23, 9))
enemy1.setVelocity(50, 0)
enemy1.setBounceOnWall(true)
animation.runImageAnimation(
enemy1,
[img`
    . . . . . . . . . . . c c . . . 
    . . . . . . . c c c c 6 3 c . . 
    . . . . . . c 6 3 3 3 3 6 c . . 
    . . c c . c 6 c c 3 3 3 3 3 c . 
    . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
    . f f 5 c 6 c 5 f f 3 3 3 3 3 c 
    . f f 5 c 6 c 5 f f 6 3 3 3 c c 
    . b 5 5 3 c 3 5 5 c 6 6 6 6 c c 
    . . b 5 5 3 5 5 c 3 3 3 3 3 3 c 
    . . c 5 5 5 5 b c c 3 3 3 3 3 c 
    . . c 4 5 5 4 b 5 5 c 3 3 3 c . 
    . c 5 b 4 4 b b 5 c c b b b . . 
    . c 4 4 b 5 5 5 4 c 4 4 4 5 b . 
    . c 5 4 c 5 5 5 c 4 4 4 c 5 c . 
    . c 5 c 5 5 5 5 c 4 4 4 c c c . 
    . . c c c c c c c . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . c c . . . . 
    . . . . . . c c c c 6 3 c . . . 
    . . . . . c 6 6 3 3 3 6 c . . . 
    . . . . c 6 6 3 3 3 3 3 3 c . . 
    b c c c 6 6 c c 3 3 3 3 3 3 c . 
    b 5 5 c 6 c 5 5 c 3 3 3 3 3 c . 
    f f 5 c 6 c 5 f f 6 3 3 3 c c . 
    f f 5 c c c 5 f f 6 6 6 6 c c . 
    . b 5 5 3 5 5 c 3 3 3 3 3 3 c . 
    . c 5 5 5 5 4 c c c 3 3 3 3 c . 
    . c 4 5 5 4 4 b 5 5 c 3 3 c . . 
    . c 5 b 4 4 b b 5 c b b c . . . 
    . c c 5 4 c 5 5 5 c c 5 c . . . 
    . . . c c 5 5 5 5 c c c c . . . 
    . . . . c c c c c c . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . c c . . . 
    . . . . . . . c c c c 6 3 c . . 
    . . . . . . c 6 6 3 3 3 6 c . . 
    . . . . . c 6 6 3 3 3 3 3 3 c . 
    . b c c c 6 6 c c 3 3 3 3 3 3 c 
    . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
    . f f 5 c 6 c 5 f f 6 3 3 3 c c 
    . f f 5 c c c 5 f f 6 6 6 6 c c 
    . . b 5 5 3 5 5 c c c 3 3 3 3 c 
    . . c 5 5 5 5 5 b 5 5 c 3 3 3 c 
    . c 4 4 5 5 4 4 b b 5 c 3 3 c . 
    . c 5 5 b 4 4 4 b 5 5 5 b c . . 
    . c 5 5 5 4 4 4 c 5 5 5 c b . . 
    . . c c c c 4 c 5 5 5 5 c c . . 
    . . . . c c c c c c c c c c . . 
    `,img`
    . . . . . . . . . . . c c . . . 
    . . . . . . . c c c c 6 3 c . . 
    . . . . . . c 6 3 3 3 3 6 c . . 
    . . c c . c 6 c c 3 3 3 3 3 c . 
    . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
    . f f 5 c 6 c 5 f f 3 3 3 3 3 c 
    . f f 5 c 6 c 5 f f 6 3 3 3 c c 
    . b 5 5 3 c 3 5 5 c 6 6 6 6 c c 
    . . b 5 5 3 5 5 c 3 3 3 3 3 3 c 
    . c c 5 5 5 5 4 c c 3 3 3 3 3 c 
    c 5 5 4 5 5 4 c 5 5 c 3 3 3 c . 
    b 5 4 b 4 4 4 c 5 5 5 b c c . . 
    c 4 5 5 b 4 4 c 5 5 5 c b b . . 
    c 5 5 5 c 4 c 5 5 5 5 c c 5 b . 
    c 5 5 5 5 c 4 c c c c c c 5 c . 
    . c c c c c c . . . . . c c c . 
    `],
500,
true
)
let ENEMY_2 = sprites.create(img`
    . . . . . . . . . . . c c . . . 
    . . . . . . . c c c c 6 3 c . . 
    . . . . . . c 6 3 3 3 3 6 c . . 
    . . c c . c 6 c c 3 3 3 3 3 c . 
    . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
    . f f 5 c 6 c 5 f f 3 3 3 3 3 c 
    . f f 5 c 6 c 5 f f 6 3 3 3 c c 
    . b 5 5 3 c 3 5 5 c 6 6 6 6 c c 
    . . b 5 5 3 5 5 c 3 3 3 3 3 3 c 
    . c c 5 5 5 5 5 b c c 3 3 3 3 c 
    c 5 5 4 5 5 5 4 b 5 5 c 3 3 c . 
    b 5 4 b 4 4 4 4 b b 5 c b b . . 
    c 4 5 5 b 4 b 5 5 5 4 c 4 5 b . 
    c 5 5 5 c 4 c 5 5 5 c 4 c 5 c . 
    c 5 5 5 5 c 5 5 5 5 c 4 c 5 c . 
    . c c c c c c c c c . . c c c . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(ENEMY_2, tiles.getTileLocation(14, 9))
ENEMY_2.setVelocity(50, 0)
ENEMY_2.setBounceOnWall(true)
animation.runImageAnimation(
ENEMY_2,
[img`
    . . . . . . . . . . . c c . . . 
    . . . . . . . c c c c 6 3 c . . 
    . . . . . . c 6 3 3 3 3 6 c . . 
    . . c c . c 6 c c 3 3 3 3 3 c . 
    . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
    . f f 5 c 6 c 5 f f 3 3 3 3 3 c 
    . f f 5 c 6 c 5 f f 6 3 3 3 c c 
    . b 5 5 3 c 3 5 5 c 6 6 6 6 c c 
    . . b 5 5 3 5 5 c 3 3 3 3 3 3 c 
    . . c 5 5 5 5 b c c 3 3 3 3 3 c 
    . . c 4 5 5 4 b 5 5 c 3 3 3 c . 
    . c 5 b 4 4 b b 5 c c b b b . . 
    . c 4 4 b 5 5 5 4 c 4 4 4 5 b . 
    . c 5 4 c 5 5 5 c 4 4 4 c 5 c . 
    . c 5 c 5 5 5 5 c 4 4 4 c c c . 
    . . c c c c c c c . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . c c . . . . 
    . . . . . . c c c c 6 3 c . . . 
    . . . . . c 6 6 3 3 3 6 c . . . 
    . . . . c 6 6 3 3 3 3 3 3 c . . 
    b c c c 6 6 c c 3 3 3 3 3 3 c . 
    b 5 5 c 6 c 5 5 c 3 3 3 3 3 c . 
    f f 5 c 6 c 5 f f 6 3 3 3 c c . 
    f f 5 c c c 5 f f 6 6 6 6 c c . 
    . b 5 5 3 5 5 c 3 3 3 3 3 3 c . 
    . c 5 5 5 5 4 c c c 3 3 3 3 c . 
    . c 4 5 5 4 4 b 5 5 c 3 3 c . . 
    . c 5 b 4 4 b b 5 c b b c . . . 
    . c c 5 4 c 5 5 5 c c 5 c . . . 
    . . . c c 5 5 5 5 c c c c . . . 
    . . . . c c c c c c . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . c c . . . 
    . . . . . . . c c c c 6 3 c . . 
    . . . . . . c 6 6 3 3 3 6 c . . 
    . . . . . c 6 6 3 3 3 3 3 3 c . 
    . b c c c 6 6 c c 3 3 3 3 3 3 c 
    . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
    . f f 5 c 6 c 5 f f 6 3 3 3 c c 
    . f f 5 c c c 5 f f 6 6 6 6 c c 
    . . b 5 5 3 5 5 c c c 3 3 3 3 c 
    . . c 5 5 5 5 5 b 5 5 c 3 3 3 c 
    . c 4 4 5 5 4 4 b b 5 c 3 3 c . 
    . c 5 5 b 4 4 4 b 5 5 5 b c . . 
    . c 5 5 5 4 4 4 c 5 5 5 c b . . 
    . . c c c c 4 c 5 5 5 5 c c . . 
    . . . . c c c c c c c c c c . . 
    `,img`
    . . . . . . . . . . . c c . . . 
    . . . . . . . c c c c 6 3 c . . 
    . . . . . . c 6 3 3 3 3 6 c . . 
    . . c c . c 6 c c 3 3 3 3 3 c . 
    . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
    . f f 5 c 6 c 5 f f 3 3 3 3 3 c 
    . f f 5 c 6 c 5 f f 6 3 3 3 c c 
    . b 5 5 3 c 3 5 5 c 6 6 6 6 c c 
    . . b 5 5 3 5 5 c 3 3 3 3 3 3 c 
    . c c 5 5 5 5 4 c c 3 3 3 3 3 c 
    c 5 5 4 5 5 4 c 5 5 c 3 3 3 c . 
    b 5 4 b 4 4 4 c 5 5 5 b c c . . 
    c 4 5 5 b 4 4 c 5 5 5 c b b . . 
    c 5 5 5 c 4 c 5 5 5 5 c c 5 b . 
    c 5 5 5 5 c 4 c c c c c c 5 c . 
    . c c c c c c . . . . . c c c . 
    `],
500,
true
)
