const Hero = function (type, hero_id) {
	let pos = {
		x: 500,
		y: 500
	}
	const html_id = 'hero_'+hero_id

	const make_hero = function (tag, attrs) {
		let ele = document.createElement(tag)
		for(let val in attrs){
			ele.setAttribute(val, attrs[val])
		}
		return ele
	}

	const draw_hero = function () {
		$('#'+html_id).attr('style', `top: ${pos.y}px; left: ${pos.x}px`)
	}

	const initialize = function () {
		let hero = make_hero('hero_'+type,{
			style: `top: ${pos.y}px; left: ${pos.x}px`,
			id: html_id
		})

		$('#heroes').append(hero)
	}

	this.getHero = function () {
		return pos
	}

	this.sethero_X = function (val) {
		pos.x += val
		draw_hero()
	}

	this.sethero_Y = function (val) {
		pos.y += val
		draw_hero()
	}


	initialize()
}
