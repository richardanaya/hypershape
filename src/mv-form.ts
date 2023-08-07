import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { MetaverseInput } from "./mv-input";

@customElement("mv-form")
export class MetaverseForm extends LitElement {
  @property({ type: String, attribute: "action" })
  action = "";

  @property({ type: String, attribute: "method" })
  method = "";

  inputs: MetaverseInput[] = [];

  createRenderRoot() {
    return this;
  }

  // connected
  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html``;
  }

  registerInput(input: MetaverseInput) {
    this.inputs.push(input);
  }

  submit() {
    const nameToValue = this.inputs.reduce((acc, input) => {
      if (input.name === "") return acc;
      acc[input.name] = input.value;
      return acc;
    }, {} as any);
    // create a new invisible form and submit it
    const form = document.createElement("form");
    form.style.display = "none";
    form.method = this.method;
    form.action = this.action;
    for (const name in nameToValue) {
      const value = nameToValue[name];
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value;
      form.appendChild(input);
    }
    document.body.appendChild(form);
    form.submit();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "mv-form": MetaverseForm;
  }
}
