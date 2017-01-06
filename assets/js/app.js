// TODO: Display the hero
// TODO: Make the hero move up/down/left/right
// TODO: Display all of the enemies
// TODO: Make the enemies move
// TODO: When spacebar is pressed, have the hero shoot a bullet
// TODO: Animate the background of the Game
// TODO: Get 7 enemies to show up instead of 4 at a time
// TODO: Get additional types of enemies to show up
// TODO: (Advanced) Collision Detection for the airplanes - when the hero collides with the enemy, have your score go down by 500
// TODO: (Advanced) Collision Detection for the bullet - Have the score go up by 10 when an enem is struck down.
// TODO: (Advanced) Get the enemy to explode - (HINT: Look at the sprite for explosion animations)
// TODO: (Advanced) When the bullet hits, make a sound

const remove_px = function (str) {
	let num = parseInt(str.substring(0,str.length-2))
	return num
}

const Bullet = function (x, y, velocity, type, bull_id) {
	const make_bullet = function (tag, attr) {
		let ele = document.createElement(tag)
		for(let val in attrs){
			ele.setAttribute(val, attrs[val])
		}
		return ele
	}
	this.pos = {
		x: x,
		y: y
	}
	this.velocity = velocity
	this.type = type || 1
	this.velocity = 7

	const html_id = bull_id

	this.initialize = function () {
		let bullet = make_bullet('bullet_'+this.type,{
			style: `top: ${this.pos.y}px; left: ${this.pos.x}px`,
			id: html_id
		})

		$('#container').append(bullet)
	}

	this.update = function (time) {
		let ele = $(('#'+html_id))
		let cur_y = remove_px(ele.css('top'))
	}


	this.initialize()
}

const Enemy = function (ship, health, x, y, ship_id) {
	this.ship = ship
	this.health = health
	let pos ={
		x: x,
		y: y
	}
	this.velocity = 2.5

	const html_id = ship_id

	const initialize = function () {
		console.log(`top: ${pos.y}px`)
		//create the ship
		let enemy = makeEnemy('enemy_'+ship,{
			style: `top: ${pos.y}px; left: ${pos.x}px`,
			id: html_id
		})

		$('#enemies').append(enemy)
	}

	this.update = function (time) {
		let ele = $(('#'+html_id))
		let cur_y = remove_px(ele.css('top'))

		pos.y = cur_y + this.velocity*time

		ele.attr('style', `top: ${pos.y}px; left: ${pos.x}px`)
	}

	const makeEnemy =  function (tag, attrs) {
		let ele = document.createElement(tag)
		for(let val in attrs){
			ele.setAttribute(val, attrs[val])
		}
		return ele
	}

	initialize()
}

const Hero = function () {

}

const Nineteen42 = function(){
	let enemy_counter = 0
	let hero_counter = 0
	let enemies = []
	let hero_bullets = []

	this.hero = {
		x: 500,
		y: 500
	}


	this.getHero = function () {
		return this.hero
	}

	this.sethero_X = function (val) {
		this.hero.x += val
	}

	this.sethero_Y = function (val) {
		this.hero.y += val
	}

	this.initialize = function () {
		this.draw_hero()
		this.create_enemy_0()
	}

	this.heroShot = function () {
		let new_bullet = new Bullet(1)
		hero_bullets.push(new_bullet)
	}


	this.draw_hero = function () {
		let hero = this.hero
		$('#hero').css({top: (hero.y)+'px', left: hero.x+'px'})
	}

	this.draw_enemy = function () {

	}

	this.move_enemies = function (speed = 1) {
		for(let enemy in enemies){
			enemies[enemy].update(speed)
		}
	}

	this.create_enemy_0 = function () {
		let container_width = remove_px($('#container').css('width'))
		let pos = {
			x: container_width/5, //The position of the first plane is decided by the number of planes in each row
			y: 50
		}

		for (var i = 0; i < 5; i++) {
			pos.x += 100
			let enemy = new Enemy(0, 50, pos.x, pos.y,'enemy_'+(enemy_counter++))
			enemies.push(enemy)
		}
	}

	this.initialize()
}

$(function(){
	const game = new Nineteen42()

	setInterval(game.move_enemies, 1000)


	//Manipulate Hero's position
	$(document).on('keydown',function(e){
		if(e.key === 'ArrowLeft'){
			game.sethero_X(-3)
			game.draw_hero()
		}else if(e.key === 'ArrowRight'){
			game.sethero_X(3)
			game.draw_hero()
		}else if (e.key === 'ArrowUp') {
			game.sethero_Y(-3)
			game.draw_hero()
		}else if(e.key === 'ArrowDown'){
			game.sethero_Y(3)
			game.draw_hero()
		}

		if(e.key === ' '){
			game.heroShot()
		}
	})
})
