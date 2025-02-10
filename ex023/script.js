let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function isLista(n, l) {
    if (l.indexOf(Number(n)) != -1) { // Se o number (n) for diferente de -1
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !isLista(num.value, valores)) { // Vai pegar o valor do num e verificar se o valor de num não está na lista. Só vai adicionar o número se as duas condições forem verdade.
        
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
}