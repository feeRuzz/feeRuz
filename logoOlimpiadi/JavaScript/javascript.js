function creaLogo(){

    var mioCanvas = document.getElementById("canvas1");
	var ctx= mioCanvas.getContext("2d");


    //rosso
	ctx.beginPath();
	ctx.arc(100,100,50,0,2*Math.PI,true);
	ctx.lineWidth=7;
	ctx.strokeStyle= "rgba(2,133,200,1)"; 
	ctx.stroke();
	ctx.closePath();

    ctx.beginPath();
	ctx.arc(150,150,50,0,2*Math.PI,true);
	ctx.lineWidth=7;
	ctx.strokeStyle= "rgba(244,194,0,1)"; 
	ctx.stroke();
	ctx.closePath();

    ctx.beginPath();
	ctx.arc(220,100,50,0,2*Math.PI,true);
	ctx.lineWidth=7;
	ctx.strokeStyle= "rgba(0,0,0,1)"; 
	ctx.stroke();
	ctx.closePath();

    ctx.beginPath();
	ctx.arc(270,150,50,0,2*Math.PI,true);
	ctx.lineWidth=7;
	ctx.strokeStyle= "rgba(21,158,61,1)"; 
	ctx.stroke();
	ctx.closePath();

    ctx.beginPath();
	ctx.arc(340,100,50,0,2*Math.PI,true);
	ctx.lineWidth=7;
	ctx.strokeStyle= "rgba(214,5,36,1)"; 
	ctx.stroke();
	ctx.closePath();
	

	

}