export default function isNode(x) {
	return typeof window.Node === 'object'
		? x instanceof window.Node
		: x !== null &&
			typeof x === 'object' &&
			typeof x.nodeType === 'number' &&
			typeof x.nodeName === 'string'
}
