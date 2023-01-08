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
    var resultado = document.querySelector('#Imc-Result');
    var paragrafo = document.querySelector('#paragrafo');
    var paragrafo2 = document.querySelector('#paragrafo2');
  
    var weight = Number(inputPeso.value);
    var high = Number(inputAltura.value);
  
    var imc = calcularIMC(weight, high);
  
    if (imc < 16){
        paragrafo.textContent = 'IMC Inválido'
         resultado.textContent = '';
            paragrafo2.textContent = ''
    }else{
     var imcFormatado = imc.toFixed(2).replace('.', ',');
        if(imc>=16 && imc<=16.9){
            paragrafo.textContent = 'Seu IMC é '
            resultado.textContent = imcFormatado;
            paragrafo2.textContent = 'Você está muito abaixo do peso'
        }else 
        if(imc>=17 && imc<=18.4){
            paragrafo.textContent = 'Seu IMC é '
            resultado.textContent = imcFormatado;
            paragrafo2.textContent = 'Você está abaixo do peso'
        }else 
        if(imc>=18.5 && imc<=24.9){
            paragrafo.textContent = 'Seu IMC é '
            resultado.textContent = imcFormatado;
            paragrafo2.textContent = 'Você está no Peso normal'
        }else 
        if(imc>=25 && imc<=29.9){
            paragrafo.textContent = 'Seu IMC é '
            resultado.textContent = imcFormatado;
            paragrafo2.textContent = 'Você está com sobrepeso '
        }else 
        if(imc>=30 && imc<=34.9){
            paragrafo.textContent = 'Seu IMC é '
            resultado.textContent = imcFormatado;
            paragrafo2.textContent = 'Você está com obesidade grau I'
        }else 
        if(imc>=35 && imc<=40){
            paragrafo.textContent = 'Seu IMC é '
            resultado.textContent = imcFormatado;
            paragrafo2.textContent = 'Você está com obesidade grau II'
        }else
        if(imc>40){
            paragrafo.textContent = 'Seu IMC é '
            resultado.textContent = imcFormatado;
            paragrafo2.textContent = 'Você está com obesidade grau III'
        }
      
    }
    //o valor do imc vai ser limitado a apenas 2 casas decimais com o toFixed e substituir o ponto por virgula
   
    //text.content vai inserir um valor
    console.log(imcFormatado);
  }
  botao();
