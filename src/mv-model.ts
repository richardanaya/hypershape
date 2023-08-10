import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Object3D } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { getParentSpace } from "./utils";

@customElement("mv-model")
export class MetaverseModel extends LitElement {
  @property({ type: String, attribute: "src" })
  src = "";

  @property({ type: String, attribute: "position" })
  positon = "0,0,0";

  @property({ type: String, attribute: "rotation" })
  rotation = "0,0,0";

  @property({ type: String, attribute: "scale" })
  scale = "1,1,1";

  @property({ type: Boolean })
  isLoaded = false;

  @property({ type: Object3D })
  space = new Object3D();

  parentSpace: Object3D | undefined;

  createRenderRoot() {
    return this;
  }

  // connected
  connectedCallback() {
    super.connectedCallback();
    const { space } = this;

    this.parentSpace = getParentSpace(this);

    const loader = new GLTFLoader();
    loader.load(this.src, (gltf) => {
      space.add(gltf.scene);
      this.isLoaded = true;
      // emit loaded event
      this.dispatchEvent(
        new CustomEvent("loaded", {
          detail: { model: gltf.scene },
        })
      );
    });

    const [x, y, z] = this.positon.split(",").map((s) => parseFloat(s));
    const [rx, ry, rz] = this.rotation.split(",").map((s) => parseFloat(s));
    const [sx, sy, sz] = this.scale.split(",").map((s) => parseFloat(s));

    space.position.x = x;
    space.position.y = y;
    space.position.z = z;
    space.rotation.x = rx * (Math.PI / 180);
    space.rotation.y = ry * (Math.PI / 180);
    space.rotation.z = rz * (Math.PI / 180);
    space.scale.x = sx;
    space.scale.y = sy;
    space.scale.z = sz;
    this.parentSpace.add(space);
  }

  // disconnected
  disconnectedCallback() {
    super.disconnectedCallback();
    this.parentSpace?.remove(this.space);
  }

  render() {
    return html``;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "mv-model": MetaverseModel;
  }
}
