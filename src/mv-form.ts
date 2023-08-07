import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("mv-form")
export class MetaverseForm extends LitElement {
  @property({ type: String, attribute: "action" })
  action = "";

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
}

declare global {
  interface HTMLElementTagNameMap {
    "mv-form": MetaverseForm;
  }
}
