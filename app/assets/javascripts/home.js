$(window).load(function() {
	console.log('stuff');
	animation = new Animation();
});

function Animation(){
	this.canvas = document.getElementById('scene');
	this.ctx    = this.canvas.getContext('2d');
	console.log('stuff');

	this.Display();
}

Animation.prototype.Display = function(){
	this.ctx.fillStyle = "rgb(200, 0, 0)";
	this.ctx.fillRect(10, 10, 55, 50);

	this.ctx.beginPath();
	this.ctx.moveTo(75,50);
	this.ctx.lineTo(100,75);
	this.ctx.lineTo(100,25);
	this.ctx.fill();
}