/*let nome_criador = undefined;

function nomeEmMaiusculo(){
    const uppercase_name = nome_criador.toUpperCase();
    if(uppercase_name === "LUAN" || uppercase_name === "LUÃN"){
        alert('Correto, esse é o nome de quem fez esse código');
    }else{
        alert('Incorreto');
    }
}

nome_criador = prompt("Nome do criador");
nomeEmMaiusculo()*/

/*
function removerVogais(texto){
    return texto.replace(/[aeiou]/gi, "");
}

let texto = prompt('Insira um texto');
let stringSemVogais = removerVogais(texto);

if(stringSemVogais.length === 0){
    console.log('')
}else{
    console.log(stringSemVogais);
}
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//EXERCICIO1

let valores;
let valoresInteiros = 0;
let naoInteiros = 0;
const array_valores = [];
function updateIntegerCount(){
    valoresInteiros = parseInt(array.length)

}

function valuesIntoArray(valores){
    return array_valores.push(valores);
}
var i = 1;
for(i; i <= 10; i++){
    valores = Number(prompt('Insira valores'));
    if (Number.isInteger(valores)){
        valuesIntoArray(valores);
        console.log(array_valores);
    }else{
        naoInteiros++
    }
}
updateIntegerCount;
console.log(`São ${naoInteiros} valores não inteiros`);
console.log(`São ${array_valores.length} valores inteiros`)

let 
const notas = [];

function soma_array(notas){
    soma_array = notas[0]+notas[1]
}
function calculoMedia(soma_array){
    return media = (soma_array/2).toFixed(2)
}








