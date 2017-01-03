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

const Nineteen42 = function(){
	this.hero = {
		x: 500,
		y: 500
	}

	this.draw_hero = function () {
		let hero = this.hero
		$('#hero').css({top: hero.y+'px', left: hero.y+'px'})
	}
}

$(function(){

})
