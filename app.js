var tela = document.getElementById('tela')
var tela2 = document.getElementById('tela2')
var zero = document.getElementById('zero')
var valor1 = document.getElementById('btn13')
var y = document.getElementById('btn1')


function  botao (num) {

 tela.value = tela.value + num;
 y.value = 'C'
}
function operador(aprt){
   var somado =  function somando() {
    tela.value = tela.value + aprt; 
  }
  somado();
}

function somar(){
   tela.value = eval(tela.value);
   if (tela.value === '0') {
     tela.value = ''
   }
}

function reset() {
  tela.value =  ''
  y.value = 'AC'
}
