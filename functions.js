function removerVogais(texto){
    return texto.replace(/[aeiou]/gi, "");
}

let texto = prompt('Insira um texto');
let string_vogais = removerVogais(texto);

if(stringSemVogais.length === 0){
    console.log('');
}else{
    console.log(stringSemVogais);
}






