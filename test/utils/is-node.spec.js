import isNode from '../../src/utils/is-node'

describe('/utils/', () => {
	describe('isNode(target)', () => {
		it('— should return true when passed a Node', () => {
			const result = isNode(document.querySelector('body'))
			expect(result).to.be.true
		})

		it('— should return false when passed HTML as a string', () => {
			const result = isNode('<div class="foo"></div>')
			expect(result).to.be.false
		})

		it('— should return false when passed an invalid target', () => {
			expect(isNode(null)).to.be.false
			expect(isNode()).to.be.false
			expect(isNode({})).to.be.false
			expect(isNode('!')).to.be.false
		})
	})
})
