import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import {
  Mesh,
  MeshStandardMaterial,
  Object3D,
  PlaneGeometry,
  TextureLoader,
} from "three";
import { getParentSpace } from "./utils";

@customElement("mv-image")
export class MetaverseImage extends LitElement {
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

    new TextureLoader().load(this.src, (texture) => {
      // create a plane for an image that is always 1 meter wide, account for aspect ratio in height
      const aspectRatio = texture.image.width / texture.image.height;
      const plane = new Mesh(
        new PlaneGeometry(1, 1 / aspectRatio),
        new MeshStandardMaterial({
          map: texture,
          transparent: true,
        })
      );
      space.add(plane);
      this.isLoaded = true;
      // emit loaded event
      this.dispatchEvent(
        new CustomEvent("loaded", {
          detail: { model: plane },
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
    space.scale.y = sy === undefined ? sx : sy;
    space.scale.z = sz === undefined ? sx : sz;
    parentSpace.add(space);
  }

  // disconnected
  disconnectedCallback() {
    super.disconnectedCallback();
    const parentSpace = getParentSpace(this);
    parentSpace.remove(this.space);
  }

  render() {
    return html``;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "mv-image": MetaverseImage;
  }
}
