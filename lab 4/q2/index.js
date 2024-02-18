function getVowel(str) {
    var ans = -1;
    for(var i =0; i<str.length; i++) {
        if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u') {
            ans = i+1;
            return ans;
        }
    }
    return ans;
}

function revNum(num) {
    var toStr = String(num);
    toStr = toStr.split('').reverse().join('');
    return parseInt(toStr);
}

document.getElementById('btn1').addEventListener('click', ()=> {
    document.getElementById('')
})