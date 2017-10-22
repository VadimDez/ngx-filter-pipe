/**
 * Created by Vadym Yatsyuk on 22.06.17
 */
import uglify from 'rollup-plugin-uglify';
import nodeResolve from 'rollup-plugin-node-resolve';

let outputFileName = 'ngx-filter-pipe.umd.js';
const plugins = [
  nodeResolve({
    jsnext: true,  module: true,  extensions: ['.js']
  })
];

if (process.env.MINIFY === 'true') {
  outputFileName = 'ngx-filter-pipe.min.umd.js';
  plugins.push(uglify());
}

export default {
  input: './dist/index.js',
  output: {
    file: `./dist/bundles/${ outputFileName }`,
    format: 'umd',
  },
  name: 'ngx-filter-pipe',
  exports: 'named',
  external: [
    '@angular/core'
  ],
  plugins: plugins,
  onwarn: ( warning ) => {
    const skip_codes = [
      'THIS_IS_UNDEFINED',
      'MISSING_GLOBAL_NAME'
    ];
    if (skip_codes.indexOf(warning.code) !== -1) {
      return;
    }
    console.error(warning);
  }
};
