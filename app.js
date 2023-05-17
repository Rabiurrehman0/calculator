function getNum(num) {
    console.log(num)
    document.getElementById('result').value += num;
}

function clearScr(){
    document.getElementById('result').value = "";
}

function removeNum(){
    var res = document.getElementById('result').value;
    document.getElementById('result').value = document.getElementById('result').value.slice(0,res.length-1);
}

function getAns(){
    document.getElementById('result').value = eval(document.getElementById('result').value)
}