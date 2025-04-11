function ob() {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;
    if (a + b > c && a + c > b && b + c > a) {
        var p = (Number(a) + Number(b) + Number(c)) / 2;
        var ruwno = Math.floor(Math.sqrt(p * (p - a) * (p - b) * (p - c)));
        var ruwnoCont = document.getElementById('ruw')
        ruwnoCont.innerText = "P= " + ruwno;
    } else {
        var ruwnoCont = document.getElementById('ruw')
        ruwnoCont.innerText = "P= nie mozna obliczic";
    }
}

function luck() {
    var c1 = Math.floor(Math.random() * 100);
    var c1Cont = document.getElementById('c1')
    c1Cont.innerText = " towoi szansy na to:" + c1 + "%";
    if (c1 >= 0 && c1 <= 33) {
        c1Cont.style.color = 'red';
    } else if (c1 >= 34 && c1 <= 66) {
        c1Cont.style.color = 'blue';
    } else {
        c1Cont.style.color = 'green';
    }

}

function slow() {
    var slowo = document.getElementById('slowo');
    var lolikText = slowo.innerText;
    var b = ("mogma siment");
    var a = ("sigma moment");
    if (lolikText === b) {
        slowo.innerText = a;
    } else if (lolikText === a) {
        slowo.innerText = b;
    }
}

function wienksze() {
    var a = Number(document.getElementById('g').value);
    var b = Number(document.getElementById('h').value);
    var c = Number(document.getElementById('n').value);
    var abc = [a, b, c];
    var abcmax = (Math.max(...abc));
    var abcmaxCont = document.getElementById('ff')
    abcmaxCont.innerText = "wienksza liczba:" + abcmax;

}

function text() {
    var a = document.getElementById('text').value;
    if (a.length >= 6) {
        if (a.endsWith("kot")) {
            var textCont = document.getElementById('texttrue')
            textCont.innerText = "slowo: ma 6 symwol i ma na koncu slowo kot";
        } else {
            var textCont = document.getElementById('texttrue')
            textCont.innerText = "slowo: ma 6 symwol ale nie ma na koncu slowo kot";
        }
    } else {
        if (a.endsWith("kot")) {
            var textCont = document.getElementById('texttrue')
            textCont.innerText = "slowo: nie ma 6 symwol ale ma na koncu slowo kot";
        } else {
            var textCont = document.getElementById('texttrue')
            textCont.innerText = "slowo: nie ma 6 symwol i nie ma na koncu slowo kot";
        }
    }
}