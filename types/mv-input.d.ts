import { LitElement } from "lit";
import { Object3D } from "three";
export declare class MetaverseInput extends LitElement {
    src: string;
    positon: string;
    rotation: string;
    scale: string;
    isLoaded: boolean;
    space: Object3D<import("three").Event>;
    type: string;
    name: string;
    value: string;
    unregisters: (() => void)[];
    parentSpace: Object3D | undefined;
    createRenderRoot(): this;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "mv-input": MetaverseInput;
    }
}
