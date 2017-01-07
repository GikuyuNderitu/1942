const Enemy = function (ship, health, x, y, ship_id) {
	this.ship = ship
	this.health = health
	this.velocity = 1
	const html_id = 'enemy_'+ship_id
	let pos ={
		x: x,
		y: y
	}

	//Private functions
	const initialize = function () {
		//create the ship
		let enemy = makeEnemy('enemy_'+ship,{
			style: `top: ${pos.y}px; left: ${pos.x}px`,
			id: html_id
		})

		$('#enemies').append(enemy)
	}

	const makeEnemy =  function (tag, attrs) {
		let ele = document.createElement(tag)
		for(let val in attrs){
			ele.setAttribute(val, attrs[val])
		}
		return ele
	}

	//Public functions
	this.update = function (time) {
		let ele = $(('#'+html_id))
		let cur_y = remove_px(ele.css('top'))

		if(cur_y > remove_px($('#container').css('height'))){
			cur_y = 1
		}

		pos.y = cur_y + this.velocity*time

		ele.attr('style', `top: ${pos.y}px; left: ${pos.x}px`)
	}

	initialize()
}
