import commonjs from '@rollup/plugin-commonjs';
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: './src/js/index.js',
    output: {
      file: './lib/index.js',
      format: 'es'
    },
    plugins: [commonjs()],
    watch: {
      include: 'src/**'
    }
  },
  {
    input: './src/js/index.js',
    output: {
      file: './dist/js/noc-webmidi.min.js',
      format: 'iife',
      name: 'nocWebMidi'
    },
    plugins: [commonjs()],
    watch: {
      include: 'src/**'
    }
  }
];