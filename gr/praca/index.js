function check() {
    const haslo = document.getElementById('inp').value;
    const wynik = document.getElementById('result-text');

    const maLiczbe = /\d/.test(haslo);
    const maZnakSpecjalny = /[^A-Za-z0-9]/.test(haslo);
    const maDuze = /[A-Z]/.test(haslo);
    const dlugosc = haslo.length;

    if (!haslo) {
        wynik.innerText = "WPISZ HASŁO!";
        wynik.style.color = "red";
        return;
    }


    if (dlugosc > 18 && maLiczbe && maZnakSpecjalny && maDuze) {
        wynik.innerText = "BARDZO DOBRE";
        wynik.style.color = "green";
    }
    else if (dlugosc >= 10 && dlugosc <= 18 && maLiczbe) {
        wynik.innerText = "DOBRE";
        wynik.style.color = "yellowgreen";
    }

    else if (dlugosc >= 5 && dlugosc < 10 && maLiczbe) {
        wynik.innerText = "ŚREDNIE";
        wynik.style.color = "blue";
    }

    else {
        wynik.innerText = "SŁABE";
        wynik.style.color = "yellow";
    }
}

document.getElementById('click').addEventListener('click', check);