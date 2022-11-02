import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { BoxGeometry, Mesh, MeshBasicMaterial, Object3D } from 'three'
import { getWorld } from './world'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('mv-space')
export class MetaverseSpace extends LitElement {
  /**
   * Copy for the read the docs hint.
   */
  @property()
  docsHint = 'Click on the Vite and Lit logos to learn more'

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Object3D })
  space = new Object3D()

  // connected
  connectedCallback() {
    super.connectedCallback();
    const world = getWorld();
    world.add(this.space);
  }

  render() {
    console.log("space")
    getWorld()
    return html`
    `
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'mv-space': MetaverseSpace
  }
}
