import isDomNode from 'is-dom-node'
import isDomNodeList from 'is-dom-node-list'

export default function tealight(target, context = document) {
	if (target instanceof Array) return target.filter(isDomNode)
	if (isDomNode(target)) return [target]
	if (isDomNodeList(target)) return Array.prototype.slice.call(target)
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
