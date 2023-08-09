import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { MetaverseInput } from "./mv-input";
import { getWorld } from "./world";

@customElement("mv-form")
export class MetaverseForm extends LitElement {
  @property({ type: String, attribute: "action" })
  action = "";

  @property({ type: String, attribute: "method" })
  method = "";

  @property({ type: String, attribute: "target" })
  target = "";

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

  async submit() {
    const nameToValue = this.inputs.reduce((acc, input) => {
      if (input.name === "") return acc;
      acc[input.name] = input.value;
      return acc;
    }, {} as any);
    getWorld().addWorldInfoToForm(nameToValue);
    if (this.target === "") {
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
    } else {
      const formData = new FormData();
      for (const name in nameToValue) {
        const value = nameToValue[name];
        formData.append(name, value);
      }

      const r = await fetch(this.action, {
        method: this.method,
        body: formData,
      });
      const text = await r.text();
      const target = document.body.querySelector("#" + this.target);
      if (target) {
        target.innerHTML = text;
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "mv-form": MetaverseForm;
  }
}
