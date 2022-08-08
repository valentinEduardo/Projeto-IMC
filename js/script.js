function botao() {
  var botaoCalculo = document.querySelector('#button-calculation');
  botaoCalculo.addEventListener('click', handleButtonClick);
  handleButtonClick();
}

function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

function handleButtonClick() {
  var inputAltura = document.querySelector('#input-high');
  var inputPeso = document.querySelector('#input-weight');
  var resultado = document.querySelector('#imc-result');

  var weight = Number(inputPeso.value);
  var high = Number(inputAltura.value);

  var imc = calcularIMC(weight, high);

  //o valor do imc vai ser limitado a apenas 2 casas decimais com o toFixed e substituir o ponto por virgula
  var imcFormatado = imc.toFixed(2).replace('.', ',');
  //text.content vai inserir um valor
  resultado.textContent = imcFormatado;
  console.log(imcFormatado);
}
botao();
