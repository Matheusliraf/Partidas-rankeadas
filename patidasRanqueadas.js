const vitorias = 15
const derrotas = 5

function partidas (vitorias, derrotas){

    let saldoVitorias = vitorias - derrotas
    
    let nivel = " " 
   
   
    if(saldoVitorias === 10){

        nivel =  "Ferro"

   }else if(saldoVitorias >= 11 && saldoVitorias <= 20){

        nivel =  "bronze"

   }else if (saldoVitorias >= 21 && saldoVitorias <= 50){

        nivel =  "Prata"

    }else if (saldoVitorias >= 51 && saldoVitorias <= 80){

        nivel =  "Ouro"

    }else if (saldoVitorias >= 81 && saldoVitorias <= 90){

        nivel =  "Diamante"

    }else if (saldoVitorias >= 91 && saldoVitorias <= 100){

        nivel =  "Lendário"

    }else{

        nivel =  "Imortal"

    }

    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`
}

const resultado = partidas(vitorias, derrotas);

console.log(resultado)