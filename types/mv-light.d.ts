import { LitElement } from "lit";
import { Object3D } from "three";
export declare class MetaverseLight extends LitElement {
    type: string;
    color: string;
    intensity: number;
    src: string;
    background: string;
    createRenderRoot(): this;
    light: Object3D | undefined;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "mv-light": MetaverseLight;
    }
}
