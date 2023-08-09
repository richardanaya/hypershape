import { Object3D, Scene, Texture, Vector3, XRHandSpace } from "three";
export declare class MetaverseWorld {
    scene: Scene;
    hudScene: Scene;
    registeredListeners: Map<Object3D, () => void>;
    registeredHudListeners: Map<Object3D, () => void>;
    constructor(scene: Scene, hudScene: Scene);
    moveCameraAndLook(position: Vector3, lookAt: Vector3): void;
    addWorldInfoToForm(nameToValue: any): void;
    registerInteractiveObject(obj: Object3D, onInteract: () => void): void;
    registerInteractiveHudObject(obj: Object3D, onInteract: () => void): void;
    setHDRITexture(texture: Texture, background: boolean): void;
}
export declare function getWorld(): MetaverseWorld;
export declare type Hand = XRHandSpace;
export declare type HandMoveHandler = (hands: Hand[]) => void;
export declare function addHandMoveHandler(onHandMove: HandMoveHandler): void;
