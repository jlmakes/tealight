import getNodes from '../../src/utils/get-nodes'

describe('Utilities', () => {
	describe('getNodes()', () => {
		it('should return the same array of nodes when passed an array of nodes', () => {
			const actual = [].concat(document.querySelectorAll('html, body, script'))
			const result = getNodes(actual)
			expect(result).to.equal(actual)
		})

		it('should return an array containing the same node when passed a node', () => {
			const element = document.documentElement
			const actual = [element]
			const result = getNodes(element)
			expect(result).to.deep.equal(actual)
		})

		it('should return an array of nodes when passed a node list', () => {
			const elements = document.querySelectorAll('body')
			const actual = Array.prototype.slice.call(elements)
			const result = getNodes(elements)
			expect(result).to.deep.equal(actual)
		})

		it('should return an array of nodes when passed a valid selector', () => {
			const actual = [document.documentElement]
			const result = getNodes('html')
			expect(result).to.deep.equal(actual)
		})

		it('should return an empty array when no element matches a valid selector', () => {
			const result = getNodes('.foo')
			expect(result).to.deep.equal([])
		})

		it('should return an empty array when passed an invalid selector', () => {
			const result = getNodes('foo!')
			expect(result).to.deep.equal([])
		})

		it('should return an empty array when passed undefined', () => {
			const result = getNodes()
			expect(result).to.deep.equal([])
		})

		it('should return an empty array when passed an unrecognized target', () => {
			const result = getNodes(null)
			expect(result).to.deep.equal([])
		})
	})
})
