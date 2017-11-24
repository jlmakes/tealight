import isNode from '../../src/utils/is-node'

describe('Utilities', () => {
	describe('isNode()', () => {
		it('should return true when passed a DOM node', () => {
			const result = isNode(document.querySelector('body'))
			expect(result).to.be.true
		})

		it('should return false when passed HTML as a string', () => {
			const result = isNode('<div class="foo"></div>')
			expect(result).to.be.false
		})
	})
})
