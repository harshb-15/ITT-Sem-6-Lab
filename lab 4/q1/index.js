function fib() {
    let n = prompt("Enter number of Fibonacci terms");
    var res = "0 1 ";
    var p = 0, c = 1;
    for(var i = 0; i<(n-2); i++) {
        var temp = p+c;
        res=res+temp+" ";
        p=c;
        c=temp;
    }
    document.getElementById('fib-series').innerText = res;
}

function squares() {
    let n = prompt("Enter number of squares");
    var arr=[];
    for(var i = 1; i<=n; i++) {
        var temp = "";
        temp = temp+i+" "+(i*i);
        arr.push(temp);
    }
    var res = arr.join('\n');
    alert("Numbers and thier squares are: \n" + res);
}