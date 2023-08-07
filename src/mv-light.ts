import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { getWorld } from "./world";
import { AmbientLight } from "three";

@customElement("mv-light")
export class MetaverseLight extends LitElement {
  @property({ type: String, attribute: "type" })
  type = "";

  @property({ type: String, attribute: "color" })
  color = "";

  @property({ type: String, attribute: "intensity" })
  intensity = 1;

  createRenderRoot() {
    return this;
  }

  // connected
  connectedCallback() {
    super.connectedCallback();
    if (this.type === "ambient") {
      const scene = getWorld().scene;
      // set ambient light
      const light = new AmbientLight(this.color, this.intensity);
      scene.add(light);
    }
  }

  render() {
    return html``;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "mv-light": MetaverseLight;
  }
}
