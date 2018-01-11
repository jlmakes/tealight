import buble from 'rollup-plugin-buble'
import json from 'rollup-plugin-json'
import pkg from '../package.json'
import nodeResolve from 'rollup-plugin-node-resolve'
import { standard as banner } from './rollup.conf.banner'

const base = {
	banner,
	input: './src/index.js',
	plugins: [json(), nodeResolve(), buble()],
	output: []
}

const es = Object.assign({}, base, {
	external: [...Object.keys(pkg.dependencies || {})],
	output: { format: 'es', file: './dist/tealight.es.js' }
})

const umd = Object.assign({}, base, {
	output: { format: 'umd', file: './dist/tealight.js', name: 'tealight' }
})

export default [es, umd]
