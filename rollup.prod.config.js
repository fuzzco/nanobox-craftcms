import json from 'rollup-plugin-json';
import buble from 'rollup-plugin-buble';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import minify from 'rollup-plugin-uglify'

export default {
  input: 'source/js/app.js',
  output: {
    file: 'public/js/bundle.min.js',
    format: 'iife'
  },
  plugins: [
    json(),
    buble(),
    nodeResolve(),
    commonjs(),
    minify()
  ]
};