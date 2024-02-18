var result = 0;
function add(op) {
    var n = parseFloat(document.getElementById('txt').value);
    if(op==1) {
        result = result + n;
    } else if(op==2) {
        result = result - n;
    } else if(op==3) {
        result = result * n;
    } else {
        result = result / n;
    }
    result = result.toFixed(2);
    document.getElementById('res').innerText = result;
}
function reset() {
    document.getElementById('res').innerText = "0";
    document.getElementById('txt').value = "";
    result = 0;
}
function clr() {
    document.getElementById('txt').value = "";
}