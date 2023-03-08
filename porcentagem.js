let valorTotal = 0;
let faturamentoSp = 67836.43;
let faturamentoRj = 36678.66;
let faturamentoMg = 29229.88;
let faturamentoEs = 27165.48;
let outrosFaturamentos = 19849.53;

valorTotal= faturamentoSp +faturamentoRj +faturamentoMg + faturamentoEs + outrosFaturamentos;

console.log(valorTotal)
console.log(' a porcetagem de SP foi '+ porcentagem(valorTotal, faturamentoSp) +'%');
console.log(' a porcetagem de RJ foi ' + porcentagem(valorTotal, faturamentoRj) +'%');
console.log(' a porcetagem de MG foi ' + porcentagem(valorTotal, faturamentoMg) +'%');
console.log(' a porcetagem de ES foi ' + porcentagem(valorTotal, faturamentoEs) +'%');
console.log(' a porcetagem dos demais estados foi ' + porcentagem(valorTotal, outrosFaturamentos) +'%');

function porcentagem(x , y){
  return (y/x*100).toFixed(2)
}