var startXValue = 0;
var startYValue = 0;
var endXValue = 0;
var endYValue = 0;
var leftMouseValue = 0;
var topMouseValue = 0;
var rightMouseValue = 0;
var bottomMouseValue = 0;
var box = document.getElementById("box");
var container = document.getElementById("container");

window.onload = function(){
    box.addEventListener("mousedown",function(event){
        var boxCoord = event.target.getBoundingClientRect();
        var containerCoord = container.getBoundingClientRect();
        var boxMidWidth = box.offsetWidth/2;
        var boxMidHeight = box.offsetHeight/2;

        startXValue = boxCoord.x + boxMidWidth;
        startYValue = boxCoord.y + boxMidHeight;

        leftMouseValue = containerCoord.x + boxMidWidth;
        rightMouseValue = containerCoord.x+containerCoord.width - boxMidWidth;
        topMouseValue = containerCoord.y + boxMidHeight;
        bottomMouseValue = containerCoord.y+containerCoord.height - boxMidHeight;

        container.addEventListener("mousemove",dragBox);
        container.addEventListener("mouseup",stopDrag);
        document.addEventListener("mouseup",stopDrag);
    });
}

function dragBox(event){
    
    if(event.clientX >= leftMouseValue && event.clientY >= topMouseValue && event.clientX<=rightMouseValue && event.clientY <= bottomMouseValue){
        box.style.left = `${endXValue + (event.clientX - startXValue)}px`;
        box.style.top = `${endYValue + (event.clientY - startYValue)}px`;
    }
    else if(event.clientX <= leftMouseValue && event.clientY >= topMouseValue && event.clientY <= bottomMouseValue){
        box.style.left = "0px";
        box.style.top = `${endYValue + (event.clientY - startYValue)}px`;
    }
    else if(event.clientX >= rightMouseValue && event.clientY >= topMouseValue && event.clientY <= bottomMouseValue){
        box.style.right = "0px";
        box.style.top = `${endYValue + (event.clientY - startYValue)}px`;
    }
    else if(event.clientY <= topMouseValue && event.clientX >= leftMouseValue && event.clientX<=rightMouseValue){
        box.style.top = "0px";
        box.style.left = `${endXValue + (event.clientX - startXValue)}px`;
    }
    else if(event.clientY >=bottomMouseValue && event.clientX >= leftMouseValue && event.clientX<=rightMouseValue){
        box.style.bottom = "0px";
        box.style.left = `${endXValue + (event.clientX - startXValue)}px`;
    }

}

function stopDrag(){
    container.removeEventListener("mousemove",dragBox);
    endXValue = box.offsetLeft;
    endYValue = box.offsetTop;
}

