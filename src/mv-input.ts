import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { BoxGeometry, Mesh, MeshStandardMaterial, Object3D } from "three";
import { MetaverseSpace } from "./mv-space";

@customElement("mv-input")
export class MetaverseInput extends LitElement {
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

  createRenderRoot() {
    return this;
  }

  // connected
  connectedCallback() {
    super.connectedCallback();
    const { space } = this;

    // iterate through parents to find the nearest element with ".space"
    let parentSpace: Object3D | null = null;
    let parent = this.parentElement;
    while (parent !== null) {
      if (parent instanceof MetaverseSpace) {
        parentSpace = parent.space;
        break;
      }
      parent = parent.parentElement;
    }
    if (parentSpace === null) {
      throw new Error("No parent space found for mv-model");
    }

    const cube = new Mesh(
      new BoxGeometry(1, 1, 1),
      new MeshStandardMaterial({ color: 0xfffffff })
    );

    space.add(cube);
    this.isLoaded = true;
    // emit loaded event
    this.dispatchEvent(
      new CustomEvent("loaded", {
        detail: { model: cube },
      })
    );

    const [x, y, z] = this.positon.split(",").map((s) => parseFloat(s));
    const [rx, ry, rz] = this.rotation.split(",").map((s) => parseFloat(s));
    const [sx, sy, sz] = this.scale.split(",").map((s) => parseFloat(s));

    space.position.x = x;
    space.position.y = y;
    space.position.z = z;
    space.rotation.x = rx;
    space.rotation.y = ry;
    space.rotation.z = rz;
    space.scale.x = sx;
    space.scale.y = sy;
    space.scale.z = sz;
    parentSpace.add(space);
  }

  render() {
    return html``;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "mv-input": MetaverseInput;
  }
}
