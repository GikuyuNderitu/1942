const Collision = function (x, y, html_id) {
	const initialize = function () {

	}
	const make_collision = function (tag, attrs) {
		let ele = createElement(tag)
		for(let val in attrs)
			ele.setAttribute(val, attrs[val])
		return ele
	}
	initialize()
}
