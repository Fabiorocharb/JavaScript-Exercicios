var agora = new Date() // variavel para pegar a hora atual
var hora = agora.getHours() // comando para pegar a hora atual
console.log(`Agora são exatamente ${hora} horas.`) //função de impressão na tela
if (hora < 12) { // condicao
    console.log(`Bom dia !`)
} else if (hora <= 18){
    console.log(`Boa tarde!`)
} else {
    console.log(`Boa noite!`)
}