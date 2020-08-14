```js script
import { html } from '@open-wc/demoing-storybook';
import '../dist/plutonium-core.js';

export default {
  title: 'PlutoniumCore',
  component: 'plutonium-core',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# PlutoniumCore

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add plutonium-core
```

```js
import 'plutonium-core/plutonium-core.js';
```

```js preview-story
export const Simple = () => html`
  <plutonium-core></plutonium-core>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <plutonium-core title="Hello World"></plutonium-core>
`;
```
