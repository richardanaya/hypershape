import { LitElement } from "lit";
export declare class MetaverseLink extends LitElement {
    href: string;
    unregisters: (() => void)[];
    createRenderRoot(): this;
    connectedCallback(): void;
    disconnectedCallback(): void;
    onNavigate: () => void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "mv-link": MetaverseLink;
    }
}
