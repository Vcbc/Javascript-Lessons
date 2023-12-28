

// EXEMPLO DE FUNÇÃO INVOCADA IMEDIATAMENTE, ONDE PASSO O PARAMETRO NA CHAMADA DA FUNÇÃO.

(function maiorque10(numero){
    

    if(numero >= 10){
        console.log('número maior que 10');
    }else{
        console.log('número menor que 10');
    }


})(12);