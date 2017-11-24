import isNode from './is-node'
import isNodeList from './is-node-list'

export default function getNodes(target) {
	if (target instanceof Array) return target
	if (isNode(target)) return [target]
	if (isNodeList(target)) return Array.prototype.slice.call(target)
	if (typeof target === 'string') {
		try {
			const query = document.querySelectorAll(target)
			return Array.prototype.slice.call(query)
		} catch (err) {
			return []
		}
	}
	return []
}
