import { html, fixture, expect } from '@open-wc/testing';

import { PlutoniumCore } from '../src/PlutoniumCore.js';
import '../plutonium-core.js';

describe('PlutoniumCore', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el: PlutoniumCore = await fixture(html`
      <plutonium-core></plutonium-core>
    `);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el: PlutoniumCore = await fixture(html`
      <plutonium-core></plutonium-core>
    `);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el: PlutoniumCore = await fixture(html`
      <plutonium-core title="attribute title"></plutonium-core>
    `);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el: PlutoniumCore = await fixture(html`
      <plutonium-core></plutonium-core>
    `);

    await expect(el).shadowDom.to.be.accessible();
  });
});
