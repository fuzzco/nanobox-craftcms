import json from 'rollup-plugin-json';
import buble from 'rollup-plugin-buble';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'source/js/app.js',
  output: {
    file: 'public/js/bundle.js',
    format: 'iife'
  },
  plugins: [
    json(),
    buble(),
    nodeResolve(),
    commonjs()
  ]
};