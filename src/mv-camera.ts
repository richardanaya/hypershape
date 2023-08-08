import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { getWorld } from "./world";
import { Vector3 } from "three";

@customElement("mv-camera")
export class MetaverseCamera extends LitElement {
  @property({ type: String, attribute: "lookat" })
  lookat = "";

  @property({ type: String, attribute: "position" })
  position = "";

  createRenderRoot() {
    return this;
  }

  // connected
  connectedCallback() {
    super.connectedCallback();
    let pos: Vector3 = new Vector3(0, 0, 0);
    let lookAt: Vector3 = new Vector3(0, 0, 0);
    if (this.position !== "") {
      const [x, y, z] = this.position.split(",").map((n) => parseFloat(n));
      pos = new Vector3(x, y, z);
    }
    if (this.lookat !== "") {
      const [x, y, z] = this.lookat.split(",").map((n) => parseFloat(n));
      lookAt = new Vector3(x, y, z);
    }
    getWorld().moveCameraAndLook(pos, lookAt);
  }

  render() {
    return html``;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "mv-camera": MetaverseCamera;
  }
}
