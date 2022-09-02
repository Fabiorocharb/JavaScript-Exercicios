var agora = new Date() //para saber o dia da semana
var diaSem = agora.getDay() //função 
console.log(diaSem)

switch(diaSem) { //testar valores pontuais 1 2 3 ...
    case 0:
        console.log(`Domingo`)
        break
    case 1:
        console.log(`Segunda`)
        break
    case 2:
        console.log(`Terça`)
        break
    case 3:
        console.log(`Quarta`)
        break
    case 4:
        console.log(`Quinta`)
        break
    case 5:
        console.log(`Sexta`)
        break
    case 6:
        console.log(`Sábado`)
        break
    default:
        console.log(`[ERRO] dia inválido`)
        break
                            
}