import isNode from './is-node'

export default function isNodeList(x) {
	const prototypeToString = Object.prototype.toString.call(x)
	const regex = /^\[object (HTMLCollection|NodeList|Object)\]$/

	return typeof window.NodeList === 'object'
		? x instanceof window.NodeList
		: x !== null &&
			typeof x === 'object' &&
			typeof x.length === 'number' &&
			regex.test(prototypeToString) &&
			(x.length === 0 || isNode(x[0]))
}
