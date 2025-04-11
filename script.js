conload = () => {
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
    document.querySelector('#bt-comma').onclick = virgula;
    document.querySelector('#bt-ac').onclick = limpa;
    document.querySelector('#bt-dividir').onclick = () => operador('/');
    document.querySelector('#bt-multiplicar').onclick = () => operador('*');
    document.querySelector('#bt-subtrair').onclick = () => operador('-');
    document.querySelector('#bt-somar').onclick = () => operador('+');
    document.querySelector('#bt-result').onclick = calcula;
  };
  

  let sValor = '0'; 
  let ehNovoNumero = true; 
  let valorAnterior = 0; 
  let operacaoPendente = null;

  const autualizaVisor = () =>{
    document.QuerySelector('#display')
  }
  

