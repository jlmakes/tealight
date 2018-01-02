import Tealight from '../src/index'

describe('/', () => {
	describe('index(target)', () => {
		it('— should return an Array<Node> when passed an Array<Node>', () => {
			const target = document.documentElement
			const actual = [document.documentElement]
			const result = Tealight(target)
			expect(result).to.deep.equal(actual)
		})

		it('— should return an Array<Node> when passed an Array<Any>', () => {
			const target = [document.documentElement, 'cookie', null]
			const actual = [document.documentElement]
			const result = Tealight(target)
			expect(result).to.deep.equal(actual)
		})

		it('— should return an Array<Node> when passed a NodeList', () => {
			const target = document.querySelectorAll('body')
			const actual = Array.prototype.slice.call(target)
			const result = Tealight(target)
			expect(result).to.deep.equal(actual)
		})

		it('— should return an Array<Node> when passed a valid selector', () => {
			const actual = [document.documentElement]
			const result = Tealight('html')
			expect(result).to.deep.equal(actual)
		})

		it('— should return an empty Array when nothing matches the selector', () => {
			const result = Tealight('.foo')
			expect(result).to.deep.equal([])
		})

		it('— should return an empty Array when passed an invalid selector', () => {
			const result = Tealight('foo!')
			expect(result).to.deep.equal([])
		})
		it('— should return an empty Array when passed an invalid target', () => {
			const result = Tealight(null)
			expect(result).to.deep.equal([])
		})

		it('— should return an empty Array when invoked without a target', () => {
			const result = Tealight()
			expect(result).to.deep.equal([])
		})
	})
})
