import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import {
  Object3D,
  PlaneGeometry,
  RepeatWrapping,
  TextureLoader,
  Vector3,
} from "three";
import { Water } from "three/examples/jsm/objects/Water.js";
import { MetaverseSpace } from "./mv-space";
import { findParent } from "./utils";

@customElement("mv-water")
export class MetaverseWater extends LitElement {
  @property({ type: String, attribute: "position" })
  positon = "0,0,0";

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

    const parentSpaceEl = findParent(
      this,
      (e) => e instanceof MetaverseSpace
    ) as MetaverseSpace;
    if (parentSpaceEl === null) {
      throw new Error("No parent space found for mv-model");
    }
    const parentSpace = parentSpaceEl.space;

    const waterGeometry = new PlaneGeometry(10000, 10000);

    const water = new Water(waterGeometry, {
      textureWidth: 512,
      textureHeight: 512,
      waterNormals: new TextureLoader().load(
        "https://richardanaya.github.io/hypershape/dist/assets/waternormals.jpg",
        function (texture) {
          texture.wrapS = texture.wrapT = RepeatWrapping;
        }
      ),
      sunDirection: new Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x001e0f,
      distortionScale: 3.7,
    });

    water.rotation.x = -Math.PI / 2;

    water.material.uniforms["distortionScale"].value = 0.1;
    water.material.uniforms["size"].value = 10;
    // on each render tick
    const onRender = () => {
      water.material.uniforms["time"].value += 0.0003;
    };
    window.setInterval(onRender, 1000 / 60);

    space.add(water);

    const [x, y, z] = this.positon.split(",").map((s) => parseFloat(s));

    space.position.x = x;
    space.position.y = y;
    space.position.z = z;

    parentSpace.add(space);
  }

  render() {
    return html``;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "mv-water": MetaverseWater;
  }
}
