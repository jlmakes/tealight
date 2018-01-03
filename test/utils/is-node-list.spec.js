import isNodeList from '../../src/utils/is-node-list'

describe('/utils/', () => {
	describe('isNodeList(target)', () => {
		it('should return true when passed a NodeList', () => {
			const result = isNodeList(document.querySelectorAll('script'))
			expect(result).to.be.true
		})

		it('should return false when passed an Array<Node>', () => {
			const elements = document.querySelectorAll('body')
			const result = isNodeList(Array.prototype.slice.call(elements))
			expect(result).to.be.false
		})

		it('should return false when passed an invalid target', () => {
			expect(isNodeList(null)).to.be.false
			expect(isNodeList()).to.be.false
			expect(isNodeList({})).to.be.false
			expect(isNodeList('!')).to.be.false
		})
	})
})
