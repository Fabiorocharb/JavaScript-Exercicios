function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById(`txtano`)
    var res = document.querySelector(`div#res`)
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert(`[ERRO] Verifique os dados e tente novamente!`)
    } else {
        var fsex = document.getElementsByName(`radsex`)
        var idade = ano - Number(fano.value)
        var gênero = ``
        var img = document.createElement(`img`)
        img.setAttribute(`id`, `foto`)
        if(fsex[0].checked) {
            gênero = `Homem`
            if (idade >=0 && idade <10){
                // crianca
                img.setAttribute(`src`, `homem-bebe.png`)
            } else if (idade < 21) {
                // jovem
                img.setAttribute(`src`, `homem-jovem.png`)
            } else if (idade < 50){
                //adulto
                img.setAttribute(`src`, `homem-adulto.png`)
            } else {
                img.setAttribute(`src`, `homem-idoso.png`)
                //idoso
            }
        } else if (fsex[1].checked) {
            gênero = `Mulher`
            if (idade >=0 && idade <10){
                // crianca
                img.setAttribute(`src`, `bebe-mulher.png`)
            } else if (idade < 21) {
                // jovem
                img.setAttribute(`src`, `mulher-jovem.png`)
            } else if (idade < 50){
                //adulto
                img.setAttribute(`src`, `mulher-adulta.png`)
            } else {
                //idoso
                img.setAttribute(`src`, `mulher-idosa.png`)
            }
        }
        res.style.textAlign = `center` // texto no centro
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.` //mostrar genero e idade
        res.appendChild(img) // Aparecer imagems
    }
}