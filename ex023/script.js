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
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.` 
        lista.appendChild(item)

        res.innerHTML = ' '
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ' '
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert = 'Adicione valores antes de finalizar!'
    } else {
        let tot = valores.length    
        let maior = valores[0]
        let menor = valores[0]

        for(let pos in valores) {
            if (valores[pos] > maior) {
                maior = valores[pos]
            
            if (valores[pos] < menor) 
                menor = valores[pos]
            }
        }
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>` 
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
    }
}