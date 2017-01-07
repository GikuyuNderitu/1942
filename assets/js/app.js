/* TODO: Display the hero*/
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

	const html_id = 'bullet_'+bull_id

	this.velocity = velocity
	this.type = type || 1

	this.update = function (time) {
		let ele = $(('#'+html_id))
		let cur_y = remove_px(ele.css('top'))
		if(cur_y < 0 || cur_y > remove_px($('#container').css('height'))){
				return html_id
		}
		pos.y = cur_y + this.velocity * time

		ele.attr('style', `top: ${pos.y}px; left: ${pos.x}px`)
	}

	this.change_velocity = function (velocity) {
		this.velocity = velocity
	}

	initialize()
}

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

const Nineteen42 = function(){
	let enemy_counter = 0
	let hero_counter = 0
	let bullet_counter = 0
	let heroes = []
	let hero_bullets = []
	let enemies = []
	let enemy_bullets = []

	const initialize = function () {
		draw_hero()
		create_enemy_0()
	}

	this.heroShot = function () {
		//Get positions of all existing heroes
		let positions = get_hero_positions()

		//Create bullets with initial positions gotten from the heroes
		for(let i = 0; i<positions.length;i++){
			let new_bullet = new Bullet(positions[i].x+8.5,positions[i].y-8, -3, 0, bullet_counter++)
			hero_bullets.push(new_bullet)
		}
	}

	this.move_hero = function (direction) {
		switch (direction) {
			case 'LEFT':
				for(hero in heroes){
					heroes[hero].sethero_X(-1.5)
				}
				break;
			case 'RIGHT':
				for(hero in heroes){
					heroes[hero].sethero_X(1.5)
				}
				break;
			case 'UP':
				for(hero in heroes){
					heroes[hero].sethero_Y(-1.5)
				}
				break;
			case 'DOWN':
				for(hero in heroes){
					heroes[hero].sethero_Y(1.5)
				}
				break;
		}
	}


	this.draw_enemy = function () {

	}

	this.move_enemies = function (speed = 1) {
		for(let enemy in enemies){
			enemies[enemy].update(speed)
		}
	}

	this.move_bullets = function () {
		if(hero_bullets.length > 0){
			for(let bullet in hero_bullets){
				let to_delete = hero_bullets[bullet].update(1)
				if(to_delete){
					hero_bullets.splice(bullet,1)
					$('#'+to_delete).remove()
				}
			}
		}
		if(enemy_bullets.length > 0);
	}

	const get_hero_positions = function () {
		let arr = []
		for(hero in heroes)
			arr.push(heroes[hero].getHero())
		return arr
	}

	const draw_hero = function (pos) {
		let hero = new Hero(0, hero_counter++)
		heroes.push(hero)
	}

	const create_enemy_0 = function () {
		let container_width = remove_px($('#container').css('width'))
		let pos = {
			x: container_width/5, //The position of the first plane is decided by the number of planes in each row
			y: -20
		}

		for (var i = 0; i < 5; i++) {
			pos.x += 100
			let enemy = new Enemy(0, 50, pos.x, pos.y,'enemy_'+(enemy_counter++))
			enemies.push(enemy)
		}
	}

	initialize()
}

$(function(){
	const game = new Nineteen42()

	setInterval(game.move_enemies, 100)
	setInterval(game.move_bullets, 40)


	//Manipulate Hero's position
	$(document).on('keydown',function(e){
		if(e.key === 'ArrowLeft'){
			game.move_hero('LEFT')
		}else if(e.key === 'ArrowRight'){
			game.move_hero('RIGHT')
		}else if (e.key === 'ArrowUp') {
			game.move_hero('UP')
		}else if(e.key === 'ArrowDown'){
			game.move_hero('DOWN')
		}

		if(e.key === ' '){
			game.heroShot()
		}
	})
})
