let item = SpriteKind.create()

let imgPato = assets.image`pato`
let martelo = sprites.create(assets.image`martelo`, SpriteKind.Food)
let pato = sprites.create(imgPato, SpriteKind.Player)
let bau = sprites.create(assets.image`bau_dourado`, item)
let imgBauAberto = assets.image`bau_dourado_aberto`

let objetos = [
    assets.image`chave_prata`,
    assets.image`coracao`,
    assets.image`cadeado_dourado`,
    assets.image`arco`,
    assets.image`martelo`,
    assets.image`anel_agua_marinha`,
    assets.image`anel_pedra_solar`,
    assets.image`ASAS`,
    assets.image`espada`,
    assets.image`flecha`,

]


pato.setPosition(120, 50)
martelo.setPosition(100,108)
controller.moveSprite(pato)


info.setLife(2)
info.setScore(0)
scene.setTileMapLevel(assets.tilemap`level`)
tiles.placeOnTile(pato, tiles.getTileLocation(0,2))
pato.setStayInScreen(true)
scene.cameraFollowSprite(pato)

sprites.onOverlap(SpriteKind.Player, item, function (jogador, umItem) {
    if (umItem.image != imgBauAberto) {
        let surpresa = sprites.create(Math.pickRandom(objetos), SpriteKind.Food)
        surpresa.setPosition(32, 64)
    }
    
    umItem.setImage(imgBauAberto)
    
    
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (jogador, ferramenta) {
    ferramenta.destroy()
    info.changeLifeBy(1)
})