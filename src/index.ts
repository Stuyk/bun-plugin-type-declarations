import { BunPlugin } from 'bun';
import { spawn } from 'node:child_process';

/**
 * Emits type declarations to file
 *
 * @export
 * @param {string} tsconfigPath
 * @return {Bun.BunPlugin}
 */
export function bunTypeDeclarations(tsconfigPath: string): BunPlugin {
    return {
        name: 'bun-type-declarations',
        async setup() {
            const prx = spawn('bun', ['x', 'tsc', '-p', tsconfigPath]);

            prx.stderr.on('data', (dat) => {
                console.error(dat.toString());
            });

            prx.stdout.on('data', (dat) => {
                console.log(dat.toString());
            });
        },
    };
}

export default bunTypeDeclarations;
