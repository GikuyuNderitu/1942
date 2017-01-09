// TODO: Display the hero  --- DONE
// TODO: Make the hero move up/down/left/right --- DONE
// TODO: Display all of the enemies --- DONE
// TODO: Make the enemies move --- DONE
// TODO: When spacebar is pressed, have the hero shoot a bullet --- DONE
// TODO: Animate the background of the Game
// TODO: Get 7 enemies to show up instead of 4 at a time --- DONE
// TODO: Get additional types of enemies to show up
// TODO: (Advanced) Collision Detection for the airplanes - when the hero collides with the enemy, have your score go down by 500
// TODO: (Advanced) Collision Detection for the bullet - Have the score go up by 10 when an enem is struck down. --- DONE
// TODO: (Advanced) Get the enemy to explode - (HINT: Look at the sprite for explosion animations) --- DONE
// TODO: (Advanced) When the bullet hits, make a sound --- DONE

const remove_px = function (str) {
	let num = parseInt(str.substring(0,str.length-2))
	return num
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
