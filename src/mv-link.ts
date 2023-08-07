import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { MetaverseModel } from "./mv-model";
import { Group } from "three";
import { getWorld } from "./world";

@customElement("mv-link")
export class MetaverseLink extends LitElement {
  @property({ type: String, attribute: "href" })
  href = "";

  createRenderRoot() {
    return this;
  }

  // connected
  connectedCallback() {
    super.connectedCallback();
    const children = this.children;
    const world = getWorld();
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child instanceof MetaverseModel) {
        child.addEventListener("loaded", (e) => {
          const g: Group = (e as any).detail.model;
          world.registerInteractiveObject(g, this.onNavigate);
        });
      }
    }
  }

  onNavigate = () => {
    window.location.href = this.href;
  };

  render() {
    return html``;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "mv-link": MetaverseLink;
  }
}
