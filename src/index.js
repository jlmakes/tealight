import isNode from './utils/is-node'
import isNodeList from './utils/is-node-list'

export default function index(target, context = document) {
	if (target instanceof Array) return target.filter(isNode)
	if (isNode(target)) return [target]
	if (isNodeList(target)) return Array.prototype.slice.call(target)
	if (typeof target === 'string') {
		try {
			const query = context.querySelectorAll(target)
			return Array.prototype.slice.call(query)
		} catch (err) {
			return []
		}
	}
	return []
}
