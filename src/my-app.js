import { LitElement, html, css } from "lit-element";
import "./a11y-input";

export class MyApp extends LitElement {
  render() {
    return html`
      <h1>My Filter App</h1>
      <a11y-input></a11y-input>
    `;
  }
}

customElements.define("my-app", MyApp);
