import { Object3D, Scene, XRHandSpace } from "three";
export declare class MetaverseWorld {
    scene: Scene;
    registeredListeners: Map<Object3D, () => void>;
    constructor(scene: Scene);
    registerInteractiveObject(obj: Object3D, onInteract: () => void): void;
}
export declare function getWorld(): MetaverseWorld;
export declare type Hand = XRHandSpace;
export declare type HandMoveHandler = (hands: Hand[]) => void;
export declare function addHandMoveHandler(onHandMove: HandMoveHandler): void;
