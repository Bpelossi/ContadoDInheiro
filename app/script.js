let centena = 0;
let dezena = 0;
let unidade = 0;
let decimo = 0;
let centesimo = 0;


let display_centena = document.getElementById('centena');
let display_dezena = document.getElementById('dezena');
let display_unidade = document.getElementById('unidade');
let display_decimo = document.getElementById('decimo');
let display_centesimo = document.getElementById('centesimo');

atualizarDisplay(centena, dezena, unidade, decimo, centesimo);

function sumNota100() {
    centena += 1;
    if (centena === 10) {
        centena = 9;
    }

    atualizarDisplay(centena, dezena, unidade, decimo, centesimo)
}

function sumNota50() {
    dezena += 5;
    if (dezena >= 10){
        if (centena === 9) {
            dezena -= 5;
            return 
        } else {
            dezena -= 10;
            sumNota100();
        }
    }

    atualizarDisplay(centena, dezena, unidade, decimo, centesimo);
}

function sumNota20() {
    dezena += 2;
    if (dezena >= 10){
        if (centena === 9) {
            dezena -= 2;
            return 
        } else {
            dezena -= 10;
            sumNota100();
        }
    }

    atualizarDisplay(centena, dezena, unidade, decimo, centesimo);
}

function sumNota10() {
    dezena += 1;
    if (dezena === 10 && centena == 9){
        dezena = 9;
        return
    }
    if (dezena === 10) {
        dezena -= 10;
        sumNota100();
    }
    atualizarDisplay(centena, dezena, unidade, decimo, centesimo);
}

function sumNota5() {
    unidade += 5;
    if (unidade >= 10){
        if (dezena === 9 && centena === 9) {
            unidade -= 5;
            return 
        } else {
            unidade -= 10;
            sumNota10();
        }
    }

    atualizarDisplay(centena, dezena, unidade, decimo, centesimo);
}

function sumNota2() {
    unidade += 2;
    if (unidade >= 10){
        if (dezena === 9 && centena === 9) {
            unidade -= 2;
            return 
        } else {
            unidade -= 10;
            sumNota10();
        }
    }

    atualizarDisplay(centena, dezena, unidade, decimo, centesimo);
}

function sumMoeda100() {
    unidade += 1;
    if (unidade >= 10){
        if (dezena === 9 && centena === 9) {
            unidade -= 1;
            return 
        } else {
            unidade -= 10;
            sumNota10();
        }
    }

    atualizarDisplay(centena, dezena, unidade, decimo, centesimo);
}

function sumMoeda50() {
    decimo += 5;
    if (decimo >= 10){
        if (unidade === 9 && dezena === 9 && centena === 9) {
            decimo -= 1;
            return 
        } else {
            decimo -= 10;
            sumMoeda100();
        }
    }

    atualizarDisplay(centena, dezena, unidade, decimo, centesimo);
}

function sumMoeda25() {
    decimo += 2;
    centesimo += 5;
    if (centesimo >= 10) {
        centesimo -= 10;
        sumMoeda10();
    }

    if (decimo >= 10){
        if (unidade === 9 && dezena === 9 && centena === 9 && decimo === 9) {
            decimo -= 1;
            return 
        } else {
            decimo -= 10;
            sumMoeda100();
        }
    }

    atualizarDisplay(centena, dezena, unidade, decimo, centesimo);
}

function sumMoeda10() {
    decimo += 1;
    if (decimo >= 10){
        if (unidade === 9 && dezena === 9 && centena === 9) {
            decimo -= 1;
            return 
        } else {
            decimo -= 10;
            sumMoeda100();
        }
    }

    atualizarDisplay(centena, dezena, unidade, decimo, centesimo);
}

function sumMoeda5() {
    centesimo += 5;
    if (centesimo >= 10){
        if (unidade === 9 && dezena === 9 && centena === 9 && decimo ===9) {
            centesimo -= 1;
            return 
        } else {
            centesimo -= 10;
            sumMoeda10();
        }
    }

    atualizarDisplay(centena, dezena, unidade, decimo, centesimo);
}

function sumMoeda1() {
    centesimo += 1;
    if (centesimo >= 10){
        if (unidade === 9 && dezena === 9 && centena === 9 && decimo ===9) {
            centesimo -= 1;
            return 
        } else {
            centesimo -= 10;
            sumMoeda10();
        }
    }

    atualizarDisplay(centena, dezena, unidade, decimo, centesimo);
}

function reset(){
    centena = 0;
    dezena = 0;
    unidade = 0;
    decimo = 0;
    centesimo = 0;
    atualizarDisplay(centena, dezena, unidade, decimo, centesimo);
}

function atualizarDisplay(centena, dezena, unidade, decimo, centesimo) {
    display_centena.innerHTML = centena; 
    display_dezena.innerHTML = dezena;
    display_unidade.innerHTML = unidade;
    display_decimo.innerHTML = decimo;
    display_centesimo.innerHTML = centesimo;
}

