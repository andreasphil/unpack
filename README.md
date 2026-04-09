<h1 align="center">
  Unpack 📦
</h1>

<p align="center">
  <strong>A minimal template for JavaScript modules</strong>
</p>

- 🚀 No-build starter kit for backend and frontend modules
- 🍦 Vanilla JS first + TypeScript-friendly
- ✅ Tests powered by Node.js' test runner
- 🌎 Preconfigured with JSDOM for browser library testing

## Usage

The easiest way to start a new project is to fetch the template folder using [giget](https://github.com/unjs/giget):

```sh
pnpx giget gh:andreasphil/unpack your-project-name
```

You'll need [Node.js](https://nodejs.org/en) with [pnpm](https://pnpm.io) to install dependencies and run tests.

### Files & folders

| Name                         | Notes                                                                                                                                  |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `index.html`                 | You can use this file as a playground for anything that happens clientside. Feel free to delete if this is not needed by your library. |
| `mod.js` + `mod.test.js`     | Entry point for your library                                                                                                           |
| `LICENSE.md` and `README.md` | Replace these with your stuff.                                                                                                         |
| `package.json`               | Update your dependencides and package metadata here.                                                                                   |
| `tsconfig.json`              | Configuration for TypeScript support.                                                                                                  |

## Development

Packages are managed by [pnpm](https://pnpm.io). Tests are powered by [Node.js' test runner](https://nodejs.org/en/learn/test-runner/introduction). The following commands are available:

```sh
node --run test         # Run tests once
node --run test:watch   # Run tests in watch mode
node --run build        # Typecheck and emit declarations
```

For a demo, open [index.html](./index.html) in a browser.

## Credits

This template uses a number of open source packages listed in [package.json](./package.json).

Thanks 🙏
