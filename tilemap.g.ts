// Código generado automáticamente. No editar.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "nivel1":
            case "nivel1":return tiles.createTilemap(hex`2d000c00020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202060202020202060202020202020602020202020202020202020202060602020202020606060602020202020206060606020206060202020206060606070702020606060202020202060202020202020202060202020202020202020202020202020202020202020202020202020202060202070202020202020707070202020202020202020202020202020202020202020202070707070202020707070202020202020202020202020202020202020202020202020202020202020202020202070202020202020202020202020202020207020202020207020202020202020207070202020202020707070202070202020202070202020202020202020202020207020202020202020202020202020202020202020202020202070202070707020202020702020202070202020207020202020202020202020202070707070202020202020202070207070707020202020702020207070202020207020202020202020202020202020202020202020202020202070202020202020202020702020202020202020207020202020202020202040301040401030304040401030303010404010301040401030104010404010301040401040304040404040304050505050505050505050505050505050505050505050505050505050505050505050505050505050505050404`, img`
.............................................
..............................22.....2222....
..................22.........................
...........................2......222........
...............2222...222....................
...............2................2.....2......
..22......222..2.....2.............2.........
...............2..222....2....2....2.........
...2222........2.2222....2...2.....2.........
...............2.........2.........2.........
222222222222222222222222222222222222222222222
222222222222222222222222222222222222222222222
`, [myTiles.transparency16,sprites.castle.tileGrass2,myTiles.tile1,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.castle.tilePath5,myTiles.tile4,myTiles.tile8], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile":
            case "tile1":return tile1;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile6":
            case "tile8":return tile8;
        }
        return null;
    })

}
// Código generado automáticamente. No editar.
