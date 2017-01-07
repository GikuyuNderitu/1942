const Bullet = function (x, y, velocity = 1, type, bull_id) {
	const make_bullet = function (tag, attrs) {
		let ele = document.createElement(tag)
		for(let val in attrs){
			ele.setAttribute(val, attrs[val])
		}
		return ele
	}

	const initialize = function () {
		let bullet = make_bullet('bullet_'+type,{
			style: `top: ${pos.y}px; left: ${pos.x}px`,
			id: html_id
		})

		$('#bullets').append(bullet)
	}

	let pos = {
		x: x,
		y: y
	}

	const html_id = bull_id

	this.velocity = velocity
	this.type = type || 1

	this.update = function (time, targets) {
		let ele = $(('#'+html_id))
		let cur_y = remove_px(ele.css('top')), cur_x = remove_px(ele.css('left'))

		//Determines if Bullet has left the page.
		if(cur_y < 0 || cur_y > remove_px($('#container').css('height'))){
				return [html_id, null]
		}

		//Determines if there has been a collision with enemy ship
		for(let target in targets){
			let targ = targets[target].getEnemy()
			if((cur_y >= targ.y && cur_y <= targ.y+17) && (cur_x >= targ.x && cur_x <=targ.x+26)){
				let collide = new Collision(cur_x, cur_y, 0)
				return [html_id, targets[target].getId()]
			}
		}
		pos.y = cur_y + this.velocity * time

		ele.attr('style', `top: ${pos.y}px; left: ${pos.x}px`)
	}

	this.change_velocity = function (velocity) {
		this.velocity = velocity
	}

	initialize()
}
