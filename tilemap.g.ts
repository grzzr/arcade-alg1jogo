// Auto-generated code. Do not edit.
namespace myImages {

    helpers._registerFactory("image", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "myTiles.transparency16":return img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`;
        }
        return null;
    })

    helpers._registerFactory("animation", function(name: string) {
        switch(helpers.stringTrim(name)) {

        }
        return null;
    })

    helpers._registerFactory("song", function(name: string) {
        switch(helpers.stringTrim(name)) {

        }
        return null;
    })

}
// Auto-generated code. Do not edit.

// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level":
            case "level1":return tiles.createTilemap(hex`1000100001020202020202030000000000000000000000000000000400000000000000000a00000000000004000000000000000000000009000000040000000000000000000000080000000400000000000000000000000706060605000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
2 2 2 2 2 2 2 2 . . . . . . . . 
. . . . . . . 2 . . . . . . . . 
. . . . . . . 2 . . . . . . . . 
. . . 2 . . . 2 . . . . . . . . 
. . . 2 . . . 2 . . . . . . . . 
. . . 2 2 2 2 2 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.stairWest], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return myTiles.transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
