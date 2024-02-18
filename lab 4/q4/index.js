function checkUsn() {
    var text = document.getElementById("usn").value;
    if(text.length!=10) {
        document.getElementById('err').innerText = "Not exact length!";

    } else if (text[0]!='1' && text[0]!='2' && text[0]!='3' && text[0]!='4') {
        alert("First digit should be a number from 1-4");
    } else if (!(/^[A-Z]+$/.test(text.substring(1, 3)))) {
        alert("second and third digits should be uppercase charaters only");
    } else if (!(/^-?\d+$/.test(text.substring(3, 5)))) {
        alert("fourth and fifth should be digits only");
    } else if (!(/^[A-Z]+$/.test(text.substring(5, 7)))) {
        alert("sixth and seventh digits should be uppercase charaters only");
    } else if (!(/^-?\d+$/.test(text.substring(7, 10)))) {
        alert("last three should be digits only");
    } else {
        document.getElementById('err').innerText = `Semester: ${text[0]}`;
    }
}