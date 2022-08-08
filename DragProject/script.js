var startX = 0;
var startY = 0;
var endX = 0;
var endY = 0;
var leftMouse = 0;
var topMouse = 0;
var rightMouse = 0;
var bottomMouse = 0;
var box = document.getElementById("box");
var container = document.getElementById("container");

window.onload = function(){
    box.addEventListener("mousedown",function(event){
        startX = event.clientX;
        startY = event.clientY;

        leftMouse = container.getBoundingClientRect().x;
        rightMouse = container.getBoundingClientRect().x+container.getBoundingClientRect().width - (box.offsetWidth/2);
        topMouse =container.getBoundingClientRect().y;
        bottomMouse = container.getBoundingClientRect().y+container.getBoundingClientRect().height - (box.offsetHeight/2);

        container.addEventListener("mousemove",dragBox);
        container.addEventListener("mouseup",stopDrag);
        document.addEventListener("mouseup",stopDrag);
    });
}

function dragBox(event){
    
    if(event.clientX >= leftMouse && event.clientY >= topMouse && event.clientX<=rightMouse && event.clientY <= bottomMouse){
        box.style.left = `${endX + (event.clientX - startX)}px`;
        box.style.top = `${endY + (event.clientY - startY)}px`;
    }
    else if(event.clientX <= leftMouse && event.clientY >= topMouse && event.clientY <= bottomMouse){
        box.style.left = "0px";
        box.style.top = `${endY + (event.clientY - startY)}px`
    }
    else if(event.clientX >= rightMouse && event.clientY >= topMouse && event.clientY <= bottomMouse){
        box.style.right = "0px";
        box.style.top = `${endY + (event.clientY - startY)}px`
    }
    else if(event.clientY <= topMouse && event.clientX >= leftMouse && event.clientX<=rightMouse){
        box.style.top = "0px";
        box.style.left = `${endX + (event.clientX - startX)}px`
    }
    else if(event.clientY >=bottomMouse && event.clientX >= leftMouse && event.clientX<=rightMouse){
        box.style.bottom = "0px";
        box.style.left = `${endX + (event.clientX - startX)}px`
    }

}

function stopDrag(){
    container.removeEventListener("mousemove",dragBox);
    endX = box.offsetLeft;
    endY = box.offsetTop;
}

