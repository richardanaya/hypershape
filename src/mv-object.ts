import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { BoxGeometry, Mesh, MeshBasicMaterial } from 'three';
import litLogo from './assets/lit.svg'
import { MetaverseSpace } from './mv-space';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('mv-object')
export class MetaverseObject extends LitElement {

  // connected
  connectedCallback() {
    super.connectedCallback();

    // get parent element
    const parent = this.parentElement;
    if(parent === null) {
      console.error("mv-object must be a child of mv-space");
      return;
    }
    if(parent.tagName !== "MV-SPACE") {
      console.error("mv-object must be a child of mv-space");
      return;
    }
    const space = (parent as MetaverseSpace).space;
    if(space === undefined) {
      console.error("mv-space must be defined");
      return;
    }

    // add random cubes with random color
    const material = new MeshBasicMaterial({ color: Math.random() * 0xffffff })
      
    for (let i = 0; i < 100; i++) {
      const geometry = new BoxGeometry()
      const cube = new Mesh(geometry, material)
      cube.position.x = Math.random() * 10 - 5
      cube.position.y = Math.random() * 10 - 5
      cube.position.z = Math.random() * 10 - 5
      space.add(cube)
    }
  }

  render() {
    console.log("object")
    return html`
      
    `
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'mv-object': MetaverseObject
  }
}
