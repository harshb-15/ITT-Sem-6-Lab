function start() {
    var txt = document.getElementById('txt').value;
    var para = document.getElementById('res').innerText;
    var sz = txt.length;
    console.log(sz);
    var result = "";
    for(var i = 0; i<sz; i++) {
        for(var j = i+1; j<sz; j++) {
            for(var k = j+1; k<sz; k++) {
                result = result + (txt[i]+txt[j]+txt[k]+" ");
                // result = result + (txt[j]+txt[i]+txt[k]+" ");
                // result = result + (txt[j]+txt[k]+txt[i]+" ");
                // result = result + (txt[i]+txt[k]+txt[j]+" ");
                // result = result + (txt[k]+txt[i]+txt[j]+" ");
                // result = result + (txt[k]+txt[j]+txt[i]+" ");
            }
        }
    }
    document.getElementById('res').innerText = result;
}