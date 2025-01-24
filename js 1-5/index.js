function ob() {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;
    var p = (Number(a) * Number(b) + Number(c));
    var ruwno = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    alert(ruwno);
}

function luck() {
    var a = document.getElementById('git').value;
    var c1 = Math.floor(Math.random() * 100);
    var c1Container = document.getElementById('c1')
    c1Container.innerText = a + " okey twoi szansy na to:" + c1 + "%";
    if (c1 >= 0 && c1 <= 33) {
        c1Container.style.color = 'red';
    } else if (c1 >= 34 && c1 <= 66) {
        c1Container.style.color = 'blue';
    } else {
        c1Container.style.color = 'green';
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
    var abcmaxContainer = document.getElementById('ff')
    abcmaxContainer.innerText = "wienksza liczba:" + abcmax;

}