import { LitElement } from "lit";
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
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "mv-object": MetaverseObject;
    }
}
