import { html, css, LitElement, property } from 'lit-element';

/**
 * Core panel for Plutonium Framework.
 *
 * @element plutonium-core
 *
 * @prop {String} title - Application title.
 *
 */
export class PlutoniumCore extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--plutonium-core-text-color, #000);
    }
  `;

  @property({ type: String }) title = 'Hey there';

  @property({ type: Number }) counter = 5;

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
