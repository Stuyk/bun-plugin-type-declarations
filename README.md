# bun-plugin-type-declarations

Automatically build typings for your source code while bundling with Bun.

**Note: Currently Bun related API functionality cannot generate Typings with TSC**

## TSConfig Setup

If your source files are located in `src/index.ts` your `tsconfig.json` should reflect the following:

```json
    "outDir": "build",
    "composite": false,
    "rootDir": "./src",
```

**At the minimum `composite` must be set to false.**

## Bundling

Install this package with `bun`.

```bash
bun install -d bun-plugin-type-declarations
```

Create a `build.ts` file that bundles your source code.

`BunTypeDeclarations` takes a `tsconfig.json` absolute path to generate your typings.

```ts
import BunTypeDeclarations from 'bun-plugin-type-declarations';

await Bun.build({
    entrypoints: ['./src/index.ts'],
    outdir: './build',
    plugins: [BunTypeDeclarations('tsconfig.json')],
    target: 'node',
    minify: true,
}).catch((err) => {
    console.log(err);
});
```

## Bundling Issues

If you run into the following error:

```
src/index.ts(10,60): error TS4060: Return type of exported function has or is using private name 'BunPlugin'.
```

There is currently nothing that can be done about this other than not using `Bun` related functionality directly. This means we can't really have Typings exported for Bun related functionality.

This message will be removed if it ever gets fixed.