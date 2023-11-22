namespace sprites {
    /**
     * End creation event handlers for the specified SpriteKind
     * @param kind
     */

    //% weight=2
    //% block="end created events for kind $kind=spritekind"
    //% blockId=spritesoncreatedend 
    //% group=Lifecycle
    export function onCreatedEnd(kind: number): void {
        const sc = game.currentScene();
        const createdHandlers = sc.createdHandlers;

        sc.createdHandlers = createdHandlers.filter(handler =>
            !(handler.kind == kind)
        );
    }

    /**
     * End destroyed event handlers for the specified SpriteKind
     * @param kind
     */
    //% weight=1
    //% block="end destroyed events for kind $kind=spritekind"
    //% blockId=spritesondestroyedend 
    //% group=Lifecycle
    export function onDestroyedEnd(kind: number) {
        const sc = game.currentScene();
        const destroyedHandlers = sc.destroyedHandlers;

        sc.destroyedHandlers = destroyedHandlers.filter(handler =>
            !(handler.kind == kind)
        );
    }

    /**
     * End overlap event handlers between a pair of SpriteKinds
     * @param kind
     * @param otherKind
     */
    //% weight=1
    //% block="end overlap events between kind $kind=spritekind and kind $otherKind=spritekind"
    //% blockId=spritesonoverlapend
    //% group=Overlaps
    export function onOverlapEnd(kind: number, otherKind: number) {
        const sc = game.currentScene();
        const overlapHandlers = sc.overlapHandlers;

        sc.overlapHandlers = overlapHandlers.filter(handler =>
            !(handler.kind === kind && handler.otherKind === otherKind) &&
            !(handler.kind === otherKind && handler.otherKind === kind)
        );
    }
}

namespace scene {
    /**
     * End overlap event handlers between a SpriteKind and tile
     * @param kind
     * @param tile
     */
    //% weight=2
    //% block="end overlap events between kind $kind=spritekind and $tile"
    //% blockId= spriteshittileend
    //% group=Tilemaps
    //% tile.shadow=tileset_tile_picker
    export function onOverlapTileEnd(kind: number, tile: Image) {
        const sc = game.currentScene();
        const tileOverlapHandlers = sc.tileOverlapHandlers

        sc.tileOverlapHandlers = tileOverlapHandlers.filter(handler =>
            !(handler.spriteKind === kind && handler.tileKind === tile) &&
            !(handler.tileKind === tile && handler.spriteKind === kind)
        );
    }

    /**
     * End overlap event handlers between a SpriteKind and walls
     * @param kind
     */
    //% weight=1
    //% block="end wall collision events for kind $kind=spritekind"
    //% blockId= spriteshitwallend
    //% group=Tilemaps
    export function onHitWallEnd(kind: number) {
        const sc = game.currentScene();
        const wallCollisionHandlers = sc.wallCollisionHandlers

        sc.wallCollisionHandlers = wallCollisionHandlers.filter(handler =>
            !(handler.spriteKind === kind)
        );
    }
}
