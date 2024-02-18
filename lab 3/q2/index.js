function start() {
    var sentence = document.getElementById('txt').value;
    var words = sentence.split(" ");
    // console.log(sentence);
    var newSentence = "";
    words.forEach((word)=>{
        var newWord = printLatinWord(word);
        newSentence = newSentence+newWord+" ";
    });
    document.getElementById('txtarea').innerText = newSentence;
}
function printLatinWord(word) {
    var len = word.length;
    var first = word.charAt(0);
    word = word.substr(1, len-1) + first + "ay";
    return word;
}