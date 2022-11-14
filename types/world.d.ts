import { Scene, XRHandSpace } from "three";
export declare function getWorld(): Scene;
export declare type Hand = XRHandSpace;
export declare type HandMoveHandler = (hands: Hand[]) => void;
export declare function addHandMoveHandler(onHandMove: HandMoveHandler): void;
