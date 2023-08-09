import { LitElement } from "lit";
import { MetaverseInput } from "./mv-input";
export declare class MetaverseForm extends LitElement {
    action: string;
    method: string;
    target: string;
    timeout: string;
    timer: string;
    inputs: MetaverseInput[];
    timerHandle: number | undefined;
    createRenderRoot(): this;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    registerInput(input: MetaverseInput): void;
    submit(): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        "mv-form": MetaverseForm;
    }
}
