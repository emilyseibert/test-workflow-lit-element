# test-workflow-lit-element - \<a11y-input>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendations, which links to [this tutorial](https://dev.to/open-wc/testing-workflow-for-web-components-g73). This project follows the tutorial and also provides modern revisions based on recent changes in LitElement rendering of LifeCycle. 

Somethings of note:
* testing uses open-wc/testing lib _heavily_, but also incorporates Mocha,Chai and renders with Karma. 
* browser inspections with `debugger` is available at "http://localhost:9876/debug.html" when running `npm run test:watch` with karma
* coverage recommendations with Karma are generated when you run `npm run test`. In the terminal, you can see a quick summary of coverage of your components. In the browser, you can see recommendations for where to add additional tests by running `open coverage/index.html` (the file is generated when running `npm run test`). 

## Installation
```bash
npm i a11y-input
```

## Usage
```html
<script type="module">
  import 'a11y-input/a11y-input.js';
</script>

<a11y-input></a11y-input>
```

## Testing with Karma
To run the suite of karma tests, run
```bash
npm run test
```

To run the tests in watch mode (for <abbr title="test driven development">TDD</abbr>, for example), run

```bash
npm run test:watch
```


## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `es-dev-server`
```bash
npm start
```
To run a local development server that serves the basic demo located in `demo/index.html`
