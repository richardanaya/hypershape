import { LitElement } from 'lit';
import { Object3D } from 'three';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class MetaverseSpace extends LitElement {
    /**
     * Copy for the read the docs hint.
     */
    docsHint: string;
    /**
     * The number of times the button has been clicked.
     */
    space: Object3D<import("three").Event>;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mv-space': MetaverseSpace;
    }
}
