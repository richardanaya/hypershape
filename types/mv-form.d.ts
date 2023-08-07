import { LitElement } from "lit";
export declare class MetaverseForm extends LitElement {
    action: string;
    createRenderRoot(): this;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "mv-form": MetaverseForm;
    }
}
