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
			let new_bullet = new Bullet(positions[i].x+8.5,positions[i].y-8, -3, 0, ('hero_bullet'+bullet_counter++))
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
			let targets = get_enemy_positions()
			for(let bullet in hero_bullets){
				let to_delete = hero_bullets[bullet].update(1, enemies)
				if(to_delete){
					hero_bullets.splice(bullet,1)
					$('#'+to_delete[0]).remove()
					if(to_delete[1]){
						for(let enemy in enemies){
							if(enemies[enemy].getId()=== to_delete[1])
								enemies.splice(enemy, 1)
						}
						$('#'+to_delete[1]).remove()
					}
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

	const get_enemy_positions = function () {
		let arr = []
		for(enemy in enemies)
			arr.push(enemies[enemy].getEnemy())
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
