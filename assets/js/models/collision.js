const Collision = function (x, y, type, col_id) {
	const html_id = `collision_${col_id}`
	const initialize = function () {
		let collide = make_collision('collision_'+type,{
			style: `top: ${y}px; left: ${x}px`,
			id: html_id
		})

		$('#container').append(collide)
	}

	const make_collision = function (tag, attrs) {
		let ele = createElement(tag)
		for(let val in attrs)
			ele.setAttribute(val, attrs[val])
		return ele
	}
	initialize()
}
