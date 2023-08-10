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

  parentSpace: Object3D | undefined;

  createRenderRoot() {
    return this;
  }

  // connected
  connectedCallback() {
    super.connectedCallback();
    const { space } = this;

    this.parentSpace = getParentSpace(this);

    // created 3D text mesh with Threejs
    const fontLoader = new FontLoader();
    const baseScale = 0.05;
    fontLoader.load(
      "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
      (font: Font) => {
        const textGeometry = new TextGeometry(this.text, {
          font,
          size: baseScale,
          height: 0.01 * baseScale,
        });
        const textMaterial = new MeshStandardMaterial({
          color: 0xffffff,
        });
        const text = new Mesh(textGeometry, textMaterial);
        text.position.y = -0.5 * baseScale;
        space.add(text);
      }
    );

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
    space.scale.y = sy === undefined ? sx : sy;
    space.scale.z = sz === undefined ? sx : sz;
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
    "mv-label": MetaverseLabel;
  }
}
