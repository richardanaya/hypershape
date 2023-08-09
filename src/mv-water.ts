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
import { getParentSpace } from "./utils";

@customElement("mv-water")
export class MetaverseWater extends LitElement {
  @property({ type: String, attribute: "position" })
  positon = "0,0,0";

  @property({ type: Boolean })
  isLoaded = false;

  @property({ type: Object3D })
  space = new Object3D();

  intervalHandle: number | undefined;

  createRenderRoot() {
    return this;
  }

  // connected
  connectedCallback() {
    super.connectedCallback();
    const { space } = this;

    const parentSpace = getParentSpace(this);

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
    this.intervalHandle = window.setInterval(onRender, 1000 / 60);

    space.add(water);

    const [x, y, z] = this.positon.split(",").map((s) => parseFloat(s));

    space.position.x = x;
    space.position.y = y;
    space.position.z = z;

    parentSpace.add(space);
  }

  // disconnected
  disconnectedCallback() {
    super.disconnectedCallback();
    const parentSpace = getParentSpace(this);
    parentSpace.remove(this.space);
    if (this.intervalHandle) {
      window.clearInterval(this.intervalHandle);
    }
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
