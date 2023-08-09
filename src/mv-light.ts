import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { getWorld } from "./world";
import { AmbientLight } from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";

@customElement("mv-light")
export class MetaverseLight extends LitElement {
  @property({ type: String, attribute: "type" })
  type = "";

  @property({ type: String, attribute: "color" })
  color = "";

  @property({ type: String, attribute: "intensity" })
  intensity = 1;

  @property({ type: String, attribute: "src" })
  src = "";

  @property({ type: String, attribute: "background" })
  background = "true";

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
    } else if (this.type == "hdri") {
      debugger;
      if (this.src !== "") {
        new RGBELoader().load(this.src, (texture) => {
          getWorld().setHDRITexture(texture, this.background === "true");
        });
      }
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
