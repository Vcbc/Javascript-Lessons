
let valorproduto;
let produto;


function escolhaProduto(produto) {

    switch (produto) {

        case 1:
            valorproduto = 2355.00;
            console.log('o valor desta guitarra é ' + valorproduto);
            break;
        case 2:
            valorproduto = 3124.00;
            console.log('o valor desta guitarra é ' + valorproduto);
            break;
        case 3:
            valorproduto = 3900.00;
            console.log('o valor desta guitarra é ' + valorproduto);
            break;
    }
}

console.log(' 1 = Fender StratoCaster \n 2 = Fender Telecaster \n 3 = Gibson LesPaul');
escolhaProduto(2);



