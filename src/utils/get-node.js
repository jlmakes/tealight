import isNode from './is-node'

export default function getNode(target, container = document) {
	if (typeof target === 'string') {
		try {
			return container.querySelector(target)
		} catch (e) {
			return null
		}
	}
	return isNode(target) ? target : null
}
