const faturamentos = [
	{
		"dia": 1,
		"valor": 22174.1664
	},
	{
		"dia": 2,
		"valor": 24537.6698
	},
	{
		"dia": 3,
		"valor": 26139.6134
	},
	{
		"dia": 4,
		"valor": 0.0
	},
	{
		"dia": 5,
		"valor": 0.0
	},
	{
		"dia": 6,
		"valor": 26742.6612
	},
	{
		"dia": 7,
		"valor": 0.0
	},
	{
		"dia": 8,
		"valor": 42889.2258
	},
	{
		"dia": 9,
		"valor": 46251.174
	},
	{
		"dia": 10,
		"valor": 11191.4722
	},
	{
		"dia": 11,
		"valor": 0.0
	},
	{
		"dia": 12,
		"valor": 0.0
	},
	{
		"dia": 13,
		"valor": 3847.4823
	},
	{
		"dia": 14,
		"valor": 373.7838
	},
	{
		"dia": 15,
		"valor": 2659.7563
	},
	{
		"dia": 16,
		"valor": 48924.2448
	},
	{
		"dia": 17,
		"valor": 18419.2614
	},
	{
		"dia": 18,
		"valor": 0.0
	},
	{
		"dia": 19,
		"valor": 0.0
	},
	{
		"dia": 20,
		"valor": 35240.1826
	},
	{
		"dia": 21,
		"valor": 43829.1667
	},
	{
		"dia": 22,
		"valor": 18235.6852
	},
	{
		"dia": 23,
		"valor": 4355.0662
	},
	{
		"dia": 24,
		"valor": 13327.1025
	},
	{
		"dia": 25,
		"valor": 0.0
	},
	{
		"dia": 26,
		"valor": 0.0
	},
	{
		"dia": 27,
		"valor": 25681.8318
	},
	{
		"dia": 28,
		"valor": 1718.1221
	},
	{
		"dia": 29,
		"valor": 13220.495
	},
	{
		"dia": 30,
		"valor": 8414.61
	}
];

let menorValor = 0 ;
let maiorValor = 0 ; 
let diaMenorValor = 0; 
let diaMaiorValor = 0;
let soma =0;
let media =0 ; 
let dias = 0 ;
let diasMedias =0;
let provisorio = 0;


faturamentos.map((faturamento)=>{
  if(faturamento.valor != 0){
    provisorio = faturamento.valor;
    soma = soma + provisorio;
    diasMedias++;
    if(menorValor == 0){
      menorValor=provisorio;
      diaMenorValor =faturamento.dia
    }else if(provisorio <menorValor){
      menorValor=provisorio;
       diaMenorValor =faturamento.dia
    }

    if(maiorValor == 0){
      maiorValor=provisorio;
      diaMaiorValor =faturamento.dia
    }else if(provisorio >maiorValor){
      maiorValor=provisorio;
       diaMaiorValor =faturamento.dia
    }      
  }  
})
media = soma/diasMedias;

faturamentos.map((faturamento)=>{
  if(faturamento.valor > media){
    dias++;
  }  
})


console.log('O menor valor de faturamento ocorrido em um dia do mês foi '+menorValor+' no dia ' + diaMenorValor);
console.log('• O maior valor de faturamento ocorrido em um dia do mês foi '+maiorValor+' no dia ' + diaMaiorValor);

console.log('Número de dias no mês em que o valor de faturamento diário foi superior à média mensal foi ' + dias)