function start() {
    var txt = document.getElementById('txt').value;
    var area = txt.substring(1,4);
    var first = txt.substring(5,8);
    var last = txt.substring(9, 13);
    console.log(area);
    console.log(first);
    console.log(last);
    document.getElementById('area').innerText = area;
    document.getElementById('first').innerText = first;
    document.getElementById('last').innerText = last;
}