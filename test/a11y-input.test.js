import { html, fixture, expect } from "@open-wc/testing";
import sinon from "sinon";
import "../src/a11y-input.js";

describe("A11yInput", () => {
  it("has by default an empty string as label", async () => {
    const el = await fixture("<a11y-input></a11y-input");
    expect(el.label).to.equal("");
  });

  it("has a static shadowDom", async () => {
    const el = await fixture(html` <a11y-input></a11y-input>`);

    // expect(el).shadowDom.to.equal(`
    //   <slot name="label"></slot>
    //   <slot name="input"></slot>
    // `);
    expect(el).shadowDom.to.equalSnapshot();
  });
  it("has 1 input and 1 label in light-dom", async () => {
    const el = /** @type {A11yInput} */ (await fixture(html`
      <a11y-input .label=${"foo"}></a11y-input>
    `));
    expect(el).lightDom.to.equal(`
    <label slot="label">foo</label>
    <input slot="input">
  `);
  });

  it("it can set/get the value property directly via the custom element", async () => {
    const el = await fixture(html` <a11y-input .value=${"foo"}></a11y-input> `);
    expect(el.value).to.equal("foo");
  });

  it('logs "we also like cats" if property value is "cat"', async () => {
    const el = await fixture(html` <a11y-input></a11y-input> `);
    const logSpy = sinon.spy(el, "log");

    el.value = "cat";
    expect(logSpy.callCount).to.equal(1);
    expect(logSpy.calledWith("we also like cats")).to.be.true;

    el.value = "dog";
    expect(logSpy.callCount).to.equal(1);

    el.value = "cat";
    expect(logSpy.callCount).to.equal(2);
  });

  it("can update its label", async () => {
    const el = /** @type {A11yInput} */ (await fixture(
      '<a11y-input label="foo"></a11y-input>'
    ));
    expect(el.label).to.equal("foo");
    el.label = "bar";
    expect(el.label).to.equal("bar");
  });
});
