import isNodeList from '../../src/utils/is-node-list'

describe('Utilities', () => {
	describe('isNodeList()', () => {
		it('should return true when passed a DOM node list', () => {
			const result = isNodeList(document.querySelectorAll('script'))
			expect(result).to.be.true
		})

		it('should return false when passed an array of HTML elements', () => {
			const elements = document.querySelectorAll('body')
			const result = isNodeList(Array.prototype.slice.call(elements))
			expect(result).to.be.false
		})

		it('should return false when passed anything else', () => {
			expect(isNodeList(null)).to.be.false
			expect(isNodeList()).to.be.false
			expect(isNodeList({})).to.be.false
			expect(isNodeList('!')).to.be.false
		})
	})
})
