
function tocaSom (idElementoSom){
    
    document.querySelector (idElementoSom).play();
}
const ListaDeTecla=document.querySelectorAll('.tecla');
for (let contador= 0; contador < ListaDeTecla.length; contador++){
    const tecla = ListaDeTecla[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`
    tecla.onclick = function (){
        tocaSom(idAudio);
    }
}

/*const listDeTeclas = document.querySelectorAll('input[type=button]');
const inputTel =document.querySelector('input[type=tel]')
for (let indice =0; indice < listDeTeclas.length; indice ++){
    const tecla = listDeTeclas[indice];
    tecla.onclick = function(){
        inputTel.value = inputTel.value + tecla.value;
    }
}*/
/*Percorrendo uma lista:
Como percorrer uma lista usando a estrutura de repetição while, a criar referências variáveis com let, e como incrementar o valor de uma variável, e criar uma condição para evitar o loop infinito, também conhecemos o atributo length contido nas listas que nos ajudou a obter dinamicamente o valor do tamanho de uma lista.

Função com parâmetros:
Como declarar e utilizar parâmetros dentro de uma função que criamos, e o que é uma função anônima e o retorno undefined de uma função.

Textos dinâmicos:
Como criar textos dinâmicos utilizando template string e como acessar as classes de um elemento através do atributo classList.

Repetição otimizada com For:
Como é a estrutura de repetição for e como ela pode nos ajudar com um código mais limpo, além da forma de incrementar um valor de variável com o operador ++.*/