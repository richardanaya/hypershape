import { LitElement } from "lit";
export declare class MetaverseLink extends LitElement {
    href: string;
    createRenderRoot(): this;
    connectedCallback(): void;
    onNavigate: () => void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "mv-link": MetaverseLink;
    }
}
