controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.reset()
})
info.onScore(10, function () {
    pause(700)
    game.gameOver(true)
    music.play(music.createSong(assets.song`vitoria`), music.PlaybackMode.InBackground)
})
info.onLifeZero(function () {
    acabo = false
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(-1)
    music.play(music.createSong(assets.song`damageSong`), music.PlaybackMode.UntilDone)
})
let passo1fase = false
let Virus: Sprite = null
let acabo = false
music.setVolume(6)
music.play(music.createSong(assets.song`song0`), music.PlaybackMode.LoopingInBackground)
scene.setBackgroundImage(assets.image`myImage`)
info.setLife(3)
acabo = true
let Player = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 8 8 8 8 . . . . . . . 
    . . . . 8 8 8 8 8 8 . . . . . . 
    . . . 8 8 1 1 1 1 8 8 . . . . . 
    . . . 8 8 1 e e 1 8 8 . . . . . 
    . . . 8 8 1 e e 1 8 8 . . . . . 
    . . . . 8 8 8 8 8 8 . . . . . . 
    . . . 8 8 8 8 8 8 8 8 . . . . . 
    . . 8 8 . 8 3 3 8 . 8 8 . . . . 
    . . . . . 8 3 3 8 . . . . . . . 
    . . . . . 8 8 8 8 . . . . . . . 
    . . . . . 8 . . 8 . . . . . . . 
    . . . . 8 8 . . 8 8 . . . . . . 
    . . . 8 8 . . . . 8 8 . . . . . 
    . . . 8 8 . . . . 8 8 . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Player, 50, 0)
Player.setPosition(80, 95)
forever(function () {
    Virus = sprites.create(img`
        . . f . . . . . . . . . . f . . 
        . f a f f . . . . . . f f a f . 
        . . f a a f . . . . f a a f . . 
        . . f a f f f f f f f f a f . . 
        . . f f a a a a a a a a f f . . 
        . . . f a f f a a f f a f . . . 
        . . . f a f f a a f f a f . . . 
        . . f a a a a a a a a a a f . . 
        . f a a a f a f f a f a a a f . 
        f a a f a a f a a f a a f a a f 
        f a f f a a a a a a a a f f a f 
        . f . . f a f f f f a f . . f . 
        . . . f a a f . . f a a f . . . 
        . . f a a f . . . . f a a f . . 
        . f a a f . . . . . . f a a f . 
        . . f f . . . . . . . . f f . . 
        `, SpriteKind.Enemy)
    Virus.x = randint(0, 160)
    Virus.y = -10
    Virus.setVelocity(0, 60)
    info.changeScoreBy(1)
    pause(700)
    passo1fase = true
    Virus = sprites.create(img`
        . . f . . . . . . . . . . f . . 
        . f a f f . . . . . . f f a f . 
        . . f a a f . . . . f a a f . . 
        . . f a f f f f f f f f a f . . 
        . . f f a a a a a a a a f f . . 
        . . . f a f f a a f f a f . . . 
        . . . f a f f a a f f a f . . . 
        . . f a a a a a a a a a a f . . 
        . f a a a f a f f a f a a a f . 
        f a a f a a f a a f a a f a a f 
        f a f f a a a a a a a a f f a f 
        . f . . f a f f f f a f . . f . 
        . . . f a a f . . f a a f . . . 
        . . f a a f . . . . f a a f . . 
        . f a a f . . . . . . f a a f . 
        . . f f . . . . . . . . f f . . 
        `, SpriteKind.Enemy)
    Virus.x = randint(5, 155)
    Virus.y = -10
    Virus.setVelocity(0, 60)
    pause(700)
})
