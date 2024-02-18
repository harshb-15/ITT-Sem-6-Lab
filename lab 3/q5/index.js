function start() {
    for(var i = 0; i<=10; i++) {
        let table = document.getElementById("tbl");
        let row = table.insertRow(-1);
        let c1 = row.insertCell(0);
        let c2 = row.insertCell(1);
        let c3 = row.insertCell(2);
        c1.innerText = i;
        c2.innerText = i*i;
        c3.innerText = i*i*i;
    }
}