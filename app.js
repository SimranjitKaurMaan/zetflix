var boxartContainer = document.getElementsByClassName("boxart-container");
var modalContainer = document.querySelector(".modal-container");
modalContainer.hidden=true;

for(var i=0; i<boxartContainer.length;i++){
    boxartContainer[i].addEventListener('click',clickEventHandler)
}

modalContainer.addEventListener('click',modalClickEventHandler);

/** Event Handlers */

function modalClickEventHandler(){
    modalContainer.hidden=true;
}

function clickEventHandler(){
    modalContainer.hidden=false;
}


