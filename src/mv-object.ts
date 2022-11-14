import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { BoxGeometry, Mesh, MeshBasicMaterial, Object3D } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { MetaverseSpace } from "./mv-space";
import { addHandMoveHandler, Hand } from "./world";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("mv-object")
export class MetaverseObject extends LitElement {
  @property({ type: String, attribute: "src" })
  src = "";

  @property({ type: Number, attribute: "x" })
  x = 0;

  @property({ type: Number, attribute: "y" })
  y = 0;

  @property({ type: Number, attribute: "z" })
  z = 0;

  @property({ type: Number, attribute: "rx" })
  rx = 0;

  @property({ type: Number, attribute: "ry" })
  ry = 0;

  @property({ type: Number, attribute: "rz" })
  rz = 0;

  @property({ type: Number, attribute: "sx" })
  sx = 1;

  @property({ type: Number, attribute: "sy" })
  sy = 1;

  @property({ type: Number, attribute: "sz" })
  sz = 1;

  root = new Object3D();

  // connected
  connectedCallback() {
    super.connectedCallback();
    const { root } = this;

    // get parent element
    const parent = this.parentElement;
    if (parent === null) {
      console.error("mv-object must be a child of mv-space");
      return;
    }
    if (parent.tagName !== "MV-SPACE") {
      console.error("mv-object must be a child of mv-space");
      return;
    }
    const space = (parent as MetaverseSpace).space;
    if (space === undefined) {
      console.error("mv-space must be defined");
      return;
    }

    const material = new MeshBasicMaterial({ color: Math.random() * 0xffffff });

    if (this.src === "") {
      const geometry = new BoxGeometry();
      const cube = new Mesh(geometry, material);
      root.add(cube);
    } else {
      const loader = new GLTFLoader();
      loader.load(this.src, (gltf) => {
        root.add(gltf.scene);
      });
    }

    root.position.x = this.x;
    root.position.y = this.y;
    root.position.z = this.z;
    root.rotation.x = this.rx;
    root.rotation.y = this.ry;
    root.rotation.z = this.rz;
    root.scale.x = this.sx;
    root.scale.y = this.sy;
    root.scale.z = this.sz;
    space.add(root);

    // if has attribute "post"
    if (this.hasAttribute("post")) {
      const post = this.getAttribute("post");
      if (post !== null) {
        this.addInteractionHandler("post", post);
      }
    }
  }

  interactionHandlers: { method: string; url: string }[] = [];

  isWatchingHands = false;

  addInteractionHandler(httpMethod: string, url: string) {
    this.interactionHandlers.push({ method: httpMethod, url: url });
    if (!this.isWatchingHands) {
      addHandMoveHandler((hands) => {
        if(this.isInteractingWithHands(hands)) {
          this.interactionHandlers.forEach(({method, url}) => {
            fetch(url, {method});
          });
        }
      });
    }
  }

  isInteractingWithHands(_hands: Hand[]) {
    return false;
  }

  render() {
    console.log("object");
    return html``;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "mv-object": MetaverseObject;
  }
}
