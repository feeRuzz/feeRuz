function disegna(){

	var canv = document.getElementById('canv1');
	var ctx = canv.getContext('2d');

	var x = canv.width/2;
	var y = canv.height/2;
	var u = 20;
	var xInput = 0;
	var yInput = 0;

	ctx.strokeStyle = 'black';
	ctx.fillStyle = 'black';


	ctx.moveTo(x+50, 20);
	ctx.lineTo(x+50+u, 20);


	//disegno la retta X
	ctx.moveTo(20, y);
	ctx.lineTo(canv.width-20, y);



	//disegno la freccia X
	ctx.moveTo(canv.width-20, y-4);
	ctx.lineTo(canv.width-20, y+4);
	ctx.lineTo(canv.width-12, y);
	ctx.lineTo(canv.width-20, y-4);



	//disegno la retta Y
	ctx.moveTo(x, 20);
	ctx.lineTo(x, canv.height-20);

	//disegno la freccia Y
	ctx.moveTo(x-4, 20);
	ctx.lineTo(x+4, 20);
	ctx.lineTo(x, 12);
	ctx.lineTo(x-4, 20);

	ctx.stroke();
	ctx.fill();

	ctx.fillText('X', canv.width-20, y+15);
	ctx.fillText('Y', x+10, 20);
	ctx.fillText('0', x+5, y+10);
	ctx.fillText('u = 20', x+50+u, 40);
	ctx.translate(x,y);

	//Punto
	xInput = document.getElementById('x').value;
	yInput = document.getElementById('y').value;
	ctx.fillRect(xInput*u, -yInput*u, 2, 2);
	ctx.fillText('P', xInput*u+2, -yInput*u);

	
}