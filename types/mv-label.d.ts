import { LitElement } from "lit";
import { Object3D } from "three";
export declare class MetaverseLabel extends LitElement {
    for: string;
    text: string;
    src: string;
    positon: string;
    rotation: string;
    scale: string;
    isLoaded: boolean;
    space: Object3D<import("three").Event>;
    createRenderRoot(): this;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "mv-label": MetaverseLabel;
    }
}
