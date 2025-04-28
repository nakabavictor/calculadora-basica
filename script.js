onload = () => {
    document.querySelector('#bt-0').onclick = () => digito(0);
    document.querySelector('#bt-1').onclick = () => digito(1);
    document.querySelector('#bt-2').onclick = () => digito(2);
    document.querySelector('#bt-3').onclick = () => digito(3);
    document.querySelector('#bt-4').onclick = () => digito(4);
    document.querySelector('#bt-5').onclick = () => digito(5);
    document.querySelector('#bt-6').onclick = () => digito(6);
    document.querySelector('#bt-7').onclick = () => digito(7);
    document.querySelector('#bt-8').onclick = () => digito(8);
    document.querySelector('#bt-9').onclick = () => digito(9);
    document.querySelector('#bt-virgula').onclick = decimal;
    document.querySelector('#bt-ac').onclick = Limpar;
    document.querySelector('#bt-dividir').onclick = () => operador('/');
    document.querySelector('#bt-multiplicar').onclick = () => operador('*');
    document.querySelector('#bt-subtrair').onclick = () => operador('-');
    document.querySelector('#bt-somar').onclick = () => operador('+');
    document.querySelector('#bt-resultado').onclick = Calcular;
  };
  

  let sValor = '0'; 
  let ehNovoNumero = true; 
  let valorAnterior = 0; 
  let operacaoPendente = null;
  let tamanhonum = 0;
  let tamanhonumdecimal = 0;


  //atualizar o visor a cada numero e operacao
  const atualizaVisor = () => {
    document.querySelector('#display').innerText = sValor;
  }


  //o que acontece quando clicar nos digitos
  const digito = (n) => {
    if(ehNovoNumero){
      sValor = ` ` + n;
      ehNovoNumero = false;
      tamanhonum += 1;
    } else{
      if(tamanhonum<10){
        sValor += n;
      tamanhonum += 1;
      }
    } 
    atualizaVisor();
  }


  //pra quando for decimal
  const decimal = () => {
    if(ehNovoNumero){
      sValor = `0`;
      ehNovoNumero = false;
      tamanhonumdecimal += 1;
    } else {
      if(tamanhonumdecimal <10){
        tamanhonumdecimal +=
        sValor += `,`
      }
    }
    atualizaVisor();
  }  


  //limpar tela
  const Limpar = () => {
    sValor = `0`;
    valorAnterior = 0;
    operacaoPendente = null;
    ehNovoNumero = true;
    atualizaVisor();
  }


  //transformar o valor de string para numero real
  const valorAtual = () => parseFloat(sValor.replace(`,`, `.`));

  const operador = (op) => {
    Calcular();
    valorAnterior = valorAtual();
    operacaoPendente = op;
    ehNovoNumero = true;
  };


  //para pegar o operador e calcular (de 2 em 2, ex: 2 + 2, depois aparece o valor encontrado e faz a operacao com outro valor)
  const Calcular = () => {
    if (operacaoPendente != null) {
      let resultado;
      switch (operacaoPendente) {
        case '+':
          resultado = valorAnterior + valorAtual();
          break;
        case '-':
          resultado = valorAnterior - valorAtual();
          break;
        case '*':
          resultado = valorAnterior * valorAtual();
          break;
        case '/':
          resultado = valorAnterior / valorAtual();
          break;
      }
      sValor = resultado.toString().replace('.', ',');
    }
    ehNovoNumero = true;
    operacaoPendente = null;
    valorAnterior = 0;
    atualizaVisor();
  }

