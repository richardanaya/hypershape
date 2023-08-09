import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Mesh, MeshStandardMaterial, Object3D } from "three";
import { getParentSpace } from "./utils";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { Font, FontLoader } from "three/examples/jsm/loaders/FontLoader";

@customElement("mv-label")
export class MetaverseLabel extends LitElement {
  @property({ type: String, attribute: "for" })
  for = "";

  @property({ type: String, attribute: "text" })
  text = "";

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

    const parentSpace = getParentSpace(this);

    // created 3D text mesh with Threejs
    const fontLoader = new FontLoader();
    fontLoader.load(
      "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
      (font: Font) => {
        const textGeometry = new TextGeometry(this.text, {
          font,
          size: 1,
          height: 0.01,
        });
        const textMaterial = new MeshStandardMaterial({
          color: 0xffffff,
        });
        const text = new Mesh(textGeometry, textMaterial);
        text.position.y = -0.5;
        space.add(text);
      }
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
    "mv-label": MetaverseLabel;
  }
}
