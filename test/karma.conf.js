const rollupPlugins = [
	require('rollup-plugin-json')(),
	require('rollup-plugin-node-resolve')({ jsnext: true, main: true }),
	require('rollup-plugin-buble')()
]

if (process.env.COVERAGE) {
	rollupPlugins.push(
		require('rollup-plugin-istanbul')({
			exclude: ['./**/*.spec.js', '**/node_modules/**'],
			instrumenterConfig: {
				embedSource: true // helps with inaccurate line numbers
			}
		})
	)
}

module.exports = karma => {
	karma.set({
		frameworks: ['mocha', 'sinon-chai'],

		preprocessors: {
			'./**/*.spec.js': ['rollup']
		},

		files: [{ pattern: './**/*.spec.js', watched: false }],

		rollupPreprocessor: {
			plugins: rollupPlugins,
			format: 'iife',
			name: 'tealight',
			sourcemap: 'inline'
		},

		colors: true,
		concurrency: 5,
		logLevel: karma.LOG_ERROR,
		singleRun: true,

		browsers: ['ChromeHeadless'],
		browserDisconnectTolerance: 1,
		browserDisconnectTimeout: 60 * 1000,
		browserNoActivityTimeout: 60 * 1000,
		// browserNoActivityTimeout: 60 * 1000 * 10 * 6, // debugging
		captureTimeout: 4 * 60 * 1000
	})

	if (process.env.TRAVIS) {
		karma.set({ autoWatch: false })
		if (process.env.COVERAGE) {
			karma.set({
				coverageReporter: {
					type: 'lcovonly',
					dir: 'coverage/'
				},
				reporters: ['mocha', 'coverage', 'coveralls']
			})
		}
	} else {
		karma.set({
			coverageReporter: {
				type: 'lcov',
				dir: '../.ignore/coverage/'
			},
			reporters: ['dots', 'coverage']
		})
	}
}
