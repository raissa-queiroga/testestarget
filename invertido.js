let palavra = 'Raissa Alves';
console.log('A string invertida é ' + inverso(palavra))
console.log('A string invertida usando reverse ' + palavra.split("").reverse().join(""))


function inverso(str){
  var temp = '';
    for (var i = str.length - 1; i >= 0; i--) {
        temp+= str[i];
    }
    return temp;  
}