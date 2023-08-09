import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { BoxGeometry, Mesh, MeshStandardMaterial, Object3D } from "three";
import { findParent, getParentSpace, isInHudSpace } from "./utils";
import { MetaverseForm } from "./mv-form";
import { getWorld } from "./world";

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

  @property({ type: String, attribute: "type" })
  type = "submit";

  @property({ type: String, attribute: "name" })
  name = "";

  @property({ type: String, attribute: "value" })
  value = "";

  createRenderRoot() {
    return this;
  }

  // connected
  connectedCallback() {
    super.connectedCallback();
    const { space } = this;

    let parentSpace = getParentSpace(this);
    const isHud = isInHudSpace(this);
    const world = getWorld();
    const registerFn = isHud
      ? getWorld().registerInteractiveHudObject.bind(world)
      : getWorld().registerInteractiveObject.bind(world);

    const cube = new Mesh(
      new BoxGeometry(1, 1, 1),
      new MeshStandardMaterial({
        color: this.value === "true" ? 0xfffffff : 0x666666,
      })
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

    const parentForm = findParent(
      this,
      (e) => e instanceof MetaverseForm
    ) as MetaverseForm;
    if (parentForm === null) {
      throw new Error("No parent form found for mv-model");
    }

    if (this.type === "submit") {
      registerFn.call(undefined, cube, () => {
        parentForm.submit();
      });
    } else if (this.type === "checkbox") {
      if (this.value === "") {
        this.value = "false";
      }
      registerFn.call(undefined, cube, () => {
        if (this.value === "true") {
          this.value = "false";
          cube.material.color.setHex(0x666666);
        } else {
          this.value = "true";
          cube.material.color.setHex(0xffffff);
        }
      });
      parentForm.registerInput(this);
    } else if (this.type === "text") {
      registerFn.call(undefined, cube, () => {
        this.value = window.prompt("Enter text", this.value) ?? "";
        if (this.value === "") {
          cube.material.color.setHex(0x666666);
        } else {
          cube.material.color.setHex(0xffffff);
        }
      });
      parentForm.registerInput(this);
    }
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
