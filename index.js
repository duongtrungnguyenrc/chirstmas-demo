let container = document.getElementById('container');
for(let i = 0; i < 100; i++){
    let snowX = Math.floor(Math.random() * container.clientWidth);
    let snowY = Math.floor(Math.random() * container.clientHeight);
    let snowStart = Math.floor(Math.random() * 10) + 10;
    let blur =  Math.floor(Math.random() * 10);
    let div = document.createElement('div');
    div.classList.add('snow');
    div.style.left = snowX + 'px';
    div.style.top = snowY + 'px';
    div.style.animationDuration = snowStart + 's';
    div.style.filter = 'blur(' + blur + 'px';
    container.appendChild(div);
}