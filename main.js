/**to access the canvas of HTML in JS */
canvas = document.getElementById("myCanvas");
/** get context in 2d */
ctx= canvas.getContext("2d");
/**variable color to red */
color = "red"; 

//Begins a path, or resets the current path for drawinganything. 
//It tells the canvas to start drawing the shape/object.
ctx.beginPath();
//Sets the color for the drawing object.
ctx.strokeStyle = color;
//Sets width for the drawing object
ctx.lineWidth = 2;
//arc(x, y, radius, startAngle, endAngle)
ctx.arc(200, 200, 40 ,0 , 2*Math.PI);
ctx.stroke();


//addEventListener is attached with an element, and when the event occurs it runs the function written inside it.
//element.addEventListener(“event”, my_function);
//my_function(e)
//{
//any code
//}


canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    //taking color from input box
    //additional activity start
    color = document.getElementById("color").value;
    console.log(color);
    //addition activity ends
    
     mouse_x = e.clientX - canvas.offsetLeft;
     mouse_y = e.clientY - canvas.offsetTop;

    console.log("X = " + mouse_x + " ,Y =  " + mouse_y);
    
    circle(mouse_x , mouse_y);    
}

function circle(mouse_x , mouse_y)
{
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(mouse_x, mouse_y, 40 ,0 , 2*Math.PI);
ctx.stroke();
}

//additional activity

function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

	
