const frame=document.querySelector('.frame');
let frameID;
function addframe(){

    

    frame.insertAdjacentHTML('afterend','<div class="frame"></div>')

    frameID=window.requestAnimationFrame(addframe);
}



function start(){
    frameID=window.requestAnimationFrame(addframe);
}

function stop(){
    cancelAnimationFrame(frameID);
}