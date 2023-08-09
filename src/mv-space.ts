import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Object3D } from "three";
import { getWorld } from "./world";

@customElement("mv-space")
export class MetaverseSpace extends LitElement {
  @property({ type: Object3D })
  space = new Object3D();

  createRenderRoot() {
    return this;
  }

  // connected
  connectedCallback() {
    super.connectedCallback();
    const world = getWorld();
    world.scene.add(this.space);
  }

  // disconnected
  disconnectedCallback() {
    super.disconnectedCallback();
    const world = getWorld();
    world.scene.remove(this.space);
  }

  render() {
    getWorld();
    return html``;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "mv-space": MetaverseSpace;
  }
}
