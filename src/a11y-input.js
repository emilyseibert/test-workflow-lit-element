import { LitElement, html, css } from "lit-element";

export class A11yInput extends LitElement {
  static get properties() {
    return {
      label: { type: String },
      value: { type: String },
    };
  }

  log(msg) {
    console.log(msg);
  }

  set value(newValue) {
    const oldValue = this.value;
    if (newValue === "cat") {
      this.log("we also like cats");
    } else {
      // must set to a different variable name (as compared to property), or it will trigger the setter function to fire repeatedly
      this.__value = newValue;

      // this line is required when overwriting setter for property
      this.requestUpdate("value", oldValue);
    }
  }

  get value() {
    // write a getter to access the secret value required to manually set/get "value"
    return this.__value;
  }

  constructor() {
    super();
    this.label = "";
    this.value = "";
  }

  updated(changedProperties) {
    // NOTE: no logic here like in the tutorial.
    // fires after property has been updated.
    changedProperties.forEach((oldValue, propName) => {
      console.log(
        `${propName} changed. oldValue: ${oldValue}. newValue: ${this.value}`
      );
    });
  }

  connectedCallback() {
    super.connectedCallback();
    this.labelEl = document.createElement("label");
    this.labelEl.innerText = this.label;
    this.labelEl.setAttribute("slot", "label");
    this.appendChild(this.labelEl);

    this.inputEl = document.createElement("input");
    this.inputEl.setAttribute("slot", "input");
    this.appendChild(this.inputEl);
  }

  render() {
    return html`
      <slot name="label"></slot>
      <slot name="input"></slot>
    `;
  }
}

window.customElements.define("a11y-input", A11yInput);
