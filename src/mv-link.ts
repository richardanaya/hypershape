import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Group } from "three";
import { getWorld } from "./world";
import { getInteractableChildren, isInHudSpace } from "./utils";

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
    const isHUD = isInHudSpace(this);
    const world = getWorld();
    const interactables = getInteractableChildren(this);
    interactables.forEach((child) => {
      child.addEventListener("loaded", (e) => {
        const g: Group = (e as any).detail.model;
        if (isHUD) {
          world.registerInteractiveHudObject(g, this.onNavigate);
        } else {
          world.registerInteractiveObject(g, this.onNavigate);
        }
      });
    });
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
