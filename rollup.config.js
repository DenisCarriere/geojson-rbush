const path = require('path')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const builtins = require('rollup-plugin-node-builtins')
const globals = require('rollup-plugin-node-globals')
const json = require('rollup-plugin-json')

module.exports = {
  entry: path.join(__dirname, 'index.js'),
  dest: path.join(__dirname, 'docs', 'geojson-rbush.js'),
  format: 'umd',
  plugins: [
    json(),
    resolve(),
    commonjs(),
    globals(),
    builtins()
  ],
  useStrict: false,
  moduleName: 'rbush'
}