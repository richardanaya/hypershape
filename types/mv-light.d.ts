import { LitElement } from "lit";
export declare class MetaverseLight extends LitElement {
    type: string;
    color: string;
    intensity: number;
    createRenderRoot(): this;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "mv-light": MetaverseLight;
    }
}