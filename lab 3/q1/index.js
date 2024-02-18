var fnt = 15;
function start() {
    para.style.color = "red";
    change(1);
}
function stop() {
    para.style.color = "blue";
    change(-1);
}
function change(mult) {
    console.log(fnt);
    fnt = fnt + (mult*5);
    document.getElementById('para').style.fontSize = fnt+'px';
    if(fnt==60 || fnt==10) {
        return;
    }
    setTimeout(change, 100, mult);
}