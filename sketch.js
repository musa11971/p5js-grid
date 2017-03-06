var canvasSize = 600;
var resolution = 2;

var grid = [];
var rows = 0;
var nextRow = 0;
var canvas;

function setup() {
	canvas = createCanvas(canvasSize, canvasSize);	
	canvas.parent('canvas');
	createGrid();
}

function draw() {
	background(51);
	showGrid();
}

function mouseDragged() { triggerMouse(); }
function mousePressed() { triggerMouse(); }

function triggerMouse() {
	if(mouseX <= width && mouseY <= height)
	{
		for(var i = 0; i < grid.length; i++)
		{
			if(mouseX >= grid[i].x && mouseX <= grid[i].x+grid[i].size)
			{
				if(mouseY >= grid[i].y && mouseY <= grid[i].y+grid[i].size)
				{
					grid[i].trigger();
				}
			}
		}
	}
}

function Pixel() {
	this.size = canvasSize / resolution;
	this.color = 255;

	this.x = nextRow * this.size;
	this.y = rows * this.size;

	grid.push(this);

	if(grid.length % resolution == 0) rows++;

	nextRow++;
	if(nextRow == resolution) nextRow = 0;

	this.show = function() {
		stroke(0);
		strokeWeight(2);
		fill(this.color);
		rect(this.x, this.y, this.size, this.size);
	}

	this.trigger = function() {
		console.log('A pixel was triggered');
	}
}

function showGrid() {
	for(var i = 0; i < grid.length; i++)
	{
		grid[i].show();
	}
}

function createGrid() {
	for(var i = 0; i < resolution * resolution; i++)
	{
		new Pixel();
	}
}