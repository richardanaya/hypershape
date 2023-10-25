import { LitElement } from "lit";
export declare class MetaverseCamera extends LitElement {
    lookat: string;
    position: string;
    createRenderRoot(): this;
    connectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "mv-camera": MetaverseCamera;
    }
}
