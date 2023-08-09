import { MetaverseImage } from "./mv-image";
import { MetaverseModel } from "./mv-model";
export declare function findParent(e: HTMLElement, criteria: (e: HTMLElement) => boolean): HTMLElement | null;
export declare function getParentSpace(el: HTMLElement): import("three").Object3D<import("three").Event>;
export declare function isInHudSpace(el: HTMLElement): boolean;
export declare function getInteractableChildren(el: HTMLElement): (MetaverseImage | MetaverseModel)[];
