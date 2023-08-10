import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { getWorld } from "./world";
import { AmbientLight, Object3D } from "three";
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

  light: Object3D | undefined;

  // connected
  connectedCallback() {
    super.connectedCallback();
    if (this.type === "ambient") {
      const scene = getWorld().scene;
      // set ambient light
      this.light = new AmbientLight(this.color, this.intensity);
      scene.add(this.light);
      getWorld().removeDefaultLight();
    } else if (this.type == "hdri") {
      if (this.src !== "") {
        new RGBELoader().load(this.src, (texture) => {
          getWorld().setHDRITexture(texture, this.background === "true");
          getWorld().removeDefaultLight();
        });
      }
    }
  }

  // disconnected
  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.light) {
      getWorld().scene.remove(this.light);
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
