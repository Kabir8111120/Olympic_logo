canvas= document.getElementById("canvas_hello");
ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle= "grey";
ctx.lineWidht= 4;
ctx.rect(150,143,430,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "blue";
ctx.lineWidht= 10;
ctx.arc(250,210,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "black";
ctx.lineWidht= 10;
ctx.arc(370,210,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "red";
ctx.lineWidht= 10;
ctx.arc(490,210,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "yellow";
ctx.lineWidht= 10;
ctx.arc(310,250,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "green";
ctx.lineWidht= 10;
ctx.arc(430,250,40,0,2*Math.PI);
ctx.stroke();