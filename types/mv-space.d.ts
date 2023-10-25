import { LitElement } from "lit";
import { Object3D } from "three";
export declare class MetaverseSpace extends LitElement {
    space: Object3D<import("three").Event>;
    createRenderRoot(): this;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "mv-space": MetaverseSpace;
    }
}
