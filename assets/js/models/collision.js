const Collision = function (x, y, type, col_id=1) {
	const html_id = `collision_${col_id}`
	const initialize = function () {
		let collide = make_collision('collision_'+type,{
			style: `top: ${y}px; left: ${x}px`,
			id: html_id
		})
		play_sound()
		$('#container').append(collide)
	}

	const play_sound = function () {
		const explode = document.createElement('audio')
		explode.setAttribute('src','assets/media/explosion.mp3')
		explode.play()
	}

	const make_collision = function (tag, attrs) {
		let ele = document.createElement(tag)
		for(let val in attrs)
			ele.setAttribute(val, attrs[val])
		return ele
	}
	initialize()
}
