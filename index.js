function rank (vitorias, derrotas) {

    let saldo = vitorias - derrotas;
    let nivelrank

    if (vitorias < 10) {
        
        nivelrank = "Ferro";

    } else if (vitorias >= 11 && vitorias <= 20) {
       
        nivelrank = "Bronze";

    } else if (vitorias >= 21 && vitorias <= 50) {
       
        nivelrank = "Prata";

    } else if (vitorias >= 51 && vitorias <= 80) {
       
        nivelrank = "Ouro";

    } else if (vitorias >= 81 && vitorias <= 90) {
        
        nivelrank = "Diamante";

    } else if (vitorias >= 91 && vitorias <= 100) {
        
        nivelrank = "Lendário";

    } else {
        
        nivelrank = "Imortal";
    }
    
    let resultado = ("O Herói tem saldo de " + saldo + " está no nível de " + nivelrank );

    return resultado;

}

let derrotas = 01;
let vitorias = 200;

let resultado = rank(vitorias, derrotas);
console.log(resultado); 