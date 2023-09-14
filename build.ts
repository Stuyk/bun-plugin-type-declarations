import BunTypeDeclarations from './src/index';

await Bun.build({
    entrypoints: ['./src/index.ts'],
    outdir: './build',
    plugins: [BunTypeDeclarations('tsconfig.json')],
    target: 'node',
    minify: true,
}).catch((err) => {
    console.log(err);
});
