function batata(num){
  
  var numero = document.getElementById('resposta').innerHTML;
  
  document.getElementById('resposta').innerHTML = numero + num
}

function limpar() {
  document.getElementById('resposta').innerHTML = ""
}

function backspace() {
  var apagarum = document.getElementById('resposta').innerHTML;
  
  document.getElementById('resposta').innerHTML = apagarum.substring(0, apagarum.length -1)
}
function soma() {
  
  var resultado = document.getElementById('resposta').innerHTML;
  
  if(resultado){
  document.getElementById('resposta').innerHTML = eval(resultado)
  }
  else
  {
    document.getElementById('resposta').innerHTML = "Erro"
  }
}