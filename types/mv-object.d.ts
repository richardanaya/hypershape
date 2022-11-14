import { LitElement } from "lit";
import { Object3D } from "three";
import { Hand } from "./world";
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class MetaverseObject extends LitElement {
    src: string;
    x: number;
    y: number;
    z: number;
    rx: number;
    ry: number;
    rz: number;
    sx: number;
    sy: number;
    sz: number;
    root: Object3D<import("three").Event>;
    connectedCallback(): void;
    interactionHandlers: {
        method: string;
        url: string;
    }[];
    isWatchingHands: boolean;
    addInteractionHandler(httpMethod: string, url: string): void;
    isInteractingWithHands(_hands: Hand[]): boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "mv-object": MetaverseObject;
    }
}
