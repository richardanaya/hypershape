import { Object3D, Scene, Vector3, XRHandSpace } from "three";
export declare class MetaverseWorld {
    scene: Scene;
    registeredListeners: Map<Object3D, () => void>;
    constructor(scene: Scene);
    moveCameraAndLook(position: Vector3, lookAt: Vector3): void;
    addWorldInfoToForm(nameToValue: any): void;
    registerInteractiveObject(obj: Object3D, onInteract: () => void): void;
}
export declare function getWorld(): MetaverseWorld;
export declare type Hand = XRHandSpace;
export declare type HandMoveHandler = (hands: Hand[]) => void;
export declare function addHandMoveHandler(onHandMove: HandMoveHandler): void;
