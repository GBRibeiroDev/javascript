function verificar() {
    let ano = new Date().getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/hbebe.png')
            } else if (idade <= 35) {
                // Joven
                img.setAttribute('src', 'imagens/hjoven.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idoso.png')
            }
        } else if(fsex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/mbebe.png')
            } else if (idade <= 35) {
                // Joven
                img.setAttribute('src', 'imagens/mjoven.png')
            } else {
                // Idosa
                img.setAttribute('src', 'imagens/idosa.png')
            } 
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}