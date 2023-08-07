import { LitElement } from "lit";
import { Object3D } from "three";
import { Hand } from "./world";
export declare class MetaverseModel extends LitElement {
    src: string;
    positon: string;
    rotation: string;
    scale: string;
    isLoaded: boolean;
    space: Object3D<import("three").Event>;
    createRenderRoot(): this;
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
        "mv-model": MetaverseModel;
    }
}
