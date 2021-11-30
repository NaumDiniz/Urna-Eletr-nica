

function resultado (num){
    var botao1 = document.getElementById("btn1")
    var botao2= document.getElementById("btn2")
    var botao3 = document.getElementById("btn3")
    var botao4 = document.getElementById("btn4")
    var botao5 = document.getElementById("btn5")
    var botao6 = document.getElementById("btn6")
    var botao7 = document.getElementById("btn7")
    var botao8= document.getElementById("btn8")
    var botao9 = document.getElementById("btn9")
    var botao0 = document.getElementById("btn0")
    var botaoBranco = document.getElementById("btnBranco")
    var botaoCorrigir = document.getElementById("btnCorrigir")
    var botaoConfirmar = document.getElementById("btnConfirmar")
    
    var resultado = document.getElementById("resultado")
    var visor = document.getElementById("visor")
    
    botao1.addEventListener("click", resultado);
    botao2.addEventListener("click", resultado);
    botao3.addEventListener("click", resultado);
    botao4.addEventListener("click", resultado);
    botao5.addEventListener("click", resultado);
    botao6.addEventListener("click", resultado);
    botao7.addEventListener("click", resultado);
    botao8.addEventListener("click", resultado);
    botao9.addEventListener("click", resultado);
    botao0.addEventListener("click", resultado);
    botaoBranco.addEventListener("click", resultado);
    botaoCorrigir.addEventListener("click", resultado);
    botaoConfirmar.addEventListener("click", resultado);

    
    var numero = tela.innerHTML;
    tela.innerHTML = numero + num;

}

function limpar(){
    tela.innerHTML = "";
}

function nulo(){
    tela.innerHTML = "O seu voto foi nulo"
}

function confirmar(){
    var numero = tela.innerHTML;

    if(numero == 14){
        alert("Naum");

    }else if(numero == 24){
        alert("Clodomir");

    }else if(numero == 41){
        alert("Danyllo");

    }else if(numero == 51){
        alert("Elson");

    }else if(numero == 15){
        alert("Nelson");

    }else if(numero == 31){
        alert("cauet");

    }else if(numero == 22){
        alert("vivas a vida é uma festa");

    }else if(numero == 10){
        alert("Joao Pedro");

    }else{
        alert("Não registrado");
    }
}
