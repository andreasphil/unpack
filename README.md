<h1 align="center">
  Unpack 📦
</h1>

<p align="center">
  <strong>A minimal template for JavaScript modules</strong>
</p>

- 🚀 Unopinionated starter kit for backend and frontend modules
- 🍦 Vanilla JS first + TypeScript-friendly
- ✅ Tests powered by Node's test runner
- 🌎 Preconfigured with JSDOM for browser library testing

## Usage

The easiest way to start a new project is to fetch the template folder using [degit](https://github.com/Rich-Harris/degit):

```sh
mkdir lib-name
cd lib-name
npx degit https://github.com/andreasphil/unpack
```

You'll need [Node.js](https://nodejs.org/en) with [Corepack](https://nodejs.org/api/corepack.html) enabled to install dependencies and run tests.

### Files & folders

| Name                         | Notes                                                                                                                                                                                                                                              |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dist/`                      | This is where your bundled + minified library, as well as type definitions will appear.                                                                                                                                                            |
| `src/`                       | Keep your library code and tests here. You can put it all into the `lib.js` file or break it down into smaller files. Just make sure to keep `lib.js` and import/export all relevant stuff there, as this will be the entry point for the library. |
| `index.html`                 | You can use this file as a playground for anything that happens clientside. Feel free to delete if this is not needed by your library.                                                                                                             |
| `LICENSE.md` and `README.md` | Replace these with your stuff.                                                                                                                                                                                                                     |
| `package.json`               | Update your dependencides and package metadata here.                                                                                                                                                                                               |

## Development

This template is built with [esbuild](https://esbuild.github.io). Packages are managed by [pnpm](https://pnpm.io). Tests are powered by [Node.js' test runner](https://nodejs.org/en/learn/test-runner/). The following commands are available:

```sh
pnpm test         # Run tests once
pnpm test:watch   # Run tests in watch mode
pnpm build        # Typecheck, emit declarations and bundle
```

For a demo, open [index.html](./index.html) in a browser.

## Credits

This template uses a number of open source packages listed in [package.json](./package.json).

Thanks 🙏
