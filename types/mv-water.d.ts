import { LitElement } from "lit";
import { Object3D } from "three";
export declare class MetaverseWater extends LitElement {
    positon: string;
    isLoaded: boolean;
    space: Object3D<import("three").Event>;
    createRenderRoot(): this;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "mv-water": MetaverseWater;
    }
}
