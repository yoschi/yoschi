function Animation(renderArea, renderAreaParent){
	this.canvas       = renderArea;
	this.canvasParent = renderAreaParent;
	this.ctx          = this.canvas.getContext('2d');
	this.gridSize     = 1000;
	t                 = this;

	console.log('starting animation');
	console.log(this.canvas.width);
	console.log(this.canvas.height);
	this.canvas.width  = this.canvasParent.offsetWidth;
	this.canvas.height = this.canvasParent.offsetHeight;
	console.log(this.canvasParent.offsetWidth);
	console.log(this.canvasParent.offsetHeight);
	//console.log(this.canvas[0].style.width);
	//console.log(this.canvas[0].style.height);
	//this.ctx.translate(0.5, 0.5);

	t.unsmoothCanvas();

	t.x = 0;
	t.y = 0;
}


// That's how you define the value of a pixel //
Animation.prototype.drawPixel = function(x, y, r, g, b, a) {

	// see: https://hacks.mozilla.org/2009/06/pushing-pixels-with-canvas/
	// copy out all the canvas pixels
	var canvasData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
	//console.log('drawing pixel');

	//x = x / this.gridSize * this.canvas.width;
	

	// Index of the pixel in the array
	var index = (x + y * this.canvas.width) * 4;
	
	// If you want to know the values of the pixel
	canvasData.data[index + 0] = r;
	canvasData.data[index + 1] = g;
	canvasData.data[index + 2] = b;
	canvasData.data[index + 3] = a;

	this.ctx.putImageData(canvasData, 0, 0);
}

Animation.prototype.render = function(){
	this.checkDimensions();

  //t.ctx.fillStyle = 'black';
  //t.ctx.lineWidth = 1;
  t.drawPixel(0+t.x, 10, 0, 0, 0, 255);
  t.x++;

  t.drawPixel(0+t.x, 10, 0, 0, 0, 255);
  t.x++;
  t.drawPixel(0+t.x, 10, 0, 0, 0, 255);
  t.x++;
  t.drawPixel(0+t.x, 10, 0, 0, 0, 255);
  t.x++;
  /*
  t.drawPixel(10,0+t.x, 0, 0, 0, 255);
  t.x++;
  t.drawPixel(10,0+t.x, 0, 0, 0, 255);
  t.x++;
  t.drawPixel(10,0+t.x, 0, 0, 0, 255);
  t.x++;
  t.drawPixel(10,0+t.x, 0, 0, 0, 255);
  t.x++;
  */
	//console.log(this.canvasParent.offsetWidth);
}










Animation.prototype.unsmoothCanvas = function(){
	// about scaling and interpolation:
	// http://stackoverflow.com/questions/7615009/disable-interpolation-when-scaling-a-canvas
	this.ctx.imageSmoothingEnabled = false;
	this.ctx.webkitImageSmoothingEnabled = false;
	this.ctx.mozImageSmoothingEnabled = false;
}

Animation.prototype.checkDimensions = function(){
	if (this.canvas.width !== this.canvas.offsetWidth)
		this.canvas.width  = this.canvas.offsetWidth;
	if (this.canvas.height !== this.canvas.offsetHeight)
		this.canvas.height = this.canvas.offsetHeight;

}