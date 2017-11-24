import getNode from '../../src/utils/get-node'

describe('Utilities', () => {
	describe('getNode()', () => {
		it('should return the same node when passed a node', () => {
			const div = document.createElement('div')
			expect(getNode(div)).to.equal(div)
		})

		it('should return a node when passed a valid selector', () => {
			expect(getNode('html')).to.equal(document.documentElement)
		})

		it('should return null when no element matches a valid selector', () => {
			expect(getNode('.foo')).to.be.null
		})

		it('should return null when an invalid selector is passed', () => {
			expect(getNode('foo!')).to.be.null
		})
	})
})
