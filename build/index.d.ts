/// <reference types="bun-types" />
import { BunPlugin } from 'bun';
/**
 * Emits type declarations to file
 *
 * @export
 * @param {string} tsconfigPath
 * @return {Bun.BunPlugin}
 */
export declare function bunTypeDeclarations(tsconfigPath: string): BunPlugin;
export default bunTypeDeclarations;
