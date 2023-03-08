
var fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;
let numeroDesejado = 20 ;
for (var i = 2; i < numeroDesejado; i++) {
  fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
}

if(fibonacci.includes(numeroDesejado)){
  console.log('o numero '+ numeroDesejado+' pertence  a sequência de fibonacci')
}else{
  console.log('o numero '+ numeroDesejado+' não pertence  a sequência de fibonacci')
}
