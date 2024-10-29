scene.setBackgroundImage(assets.image`cityscape`)
let mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f e e e e f f . . . . 
    . . . f e e e f f e e e f . . . 
    . . f f f f f 2 2 f f f f f . . 
    . . f f e 2 d 2 2 d 2 e f f . . 
    . f f e 2 f 2 f f 2 f 2 e f f . 
    . f e 2 f f d d d d f f 2 e f . 
    . . f f d d d d d d d d f f . . 
    . . f d f f f f f f f f d f . . 
    . . f f f e e e e e e f f f . . 
    . . . . f e e e e e e f . . . . 
    . . . . e f f f f f f e . . . . 
    . . . . f f f . . f f f . . . . 
    . . f f f f . . . . f f f f . . 
    . . f f f . . . . . . f f f . . 
    `, SpriteKind.Player)
