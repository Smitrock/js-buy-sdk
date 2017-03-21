/* eslint-env node */
import {readFileSync} from 'fs';
import babel from 'rollup-plugin-babel';
import remap from '@shopify/rollup-plugin-remap';
import npm from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

const plugins = [babel()];
const targets = [];
let pkg = JSON.parse(readFileSync('./package.json')),
    external = Object.keys(pkg.dependencies || {}),
    babelRc = pkg.babel || JSON.parse(readFileSync('./.babelrc'));
// eslint-disable-next-line no-process-env
if (process.env.BUILD_MODE === 'production') {
  plugins.push(remap({
    originalPath: './src-graphql/graphl-client',
    targetPath: './src-graphql/graphl-client-dev'
  }));

//////

  plugins.push(npm({
    jsnext: true,
    main: true,
    skip: external
  }));

  plugins.push(commonjs({
    include: 'node_modules/**',
    exclude: '**/*.css'
  }));

//////

  targets.push(
    {dest: 'index.js', format: 'cjs'},
    {dest: 'index.amd.js', format: 'amd'}
  );
} else {
  targets.push(
    {dest: 'dev.js', format: 'cjs'},
    {dest: 'dev.es.js', format: 'es'}
  );
}

const banner = `/*
${readFileSync('./LICENSE.md')}
*/`;

export default {
  plugins,
  targets,
  banner,
  entry: 'src-graphql/client.js',
  moduleName: 'ShopifyBuy',
  sourceMap: true
};
