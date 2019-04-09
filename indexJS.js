//esconde o botão individual de fechar mesa e a janela de extrato
$('.testeFecharMesa').hide();
$('#fechamentoDePedidoOpacidade').hide();

//arrays que armazenam strings com o pedido
var pedidosDaMesa1 = [];
var pedidosDaMesa2 = [];
var pedidosDaMesa3 = [];
var pedidosDaMesa4 = [];
var pedidosDaMesa5 = [];
var pedidosDaMesa6 = [];
var pedidosDaMesa7 = [];
var pedidosDaMesa8 = [];
var pedidosDaMesa9 = [];
var pedidosDaMesa10 = [];
//arrays que armazenam inteiros com valor do pedidos
var valorDaMesa1 = [];
var valorDaMesa2 = [];
var valorDaMesa3 = [];
var valorDaMesa4 = [];
var valorDaMesa5 = [];
var valorDaMesa6 = [];
var valorDaMesa7 = [];
var valorDaMesa8 = [];
var valorDaMesa9 = [];
var valorDaMesa10 = [];
//variaveis de controle para pessoas, mesas e dinheiro no restaurante
var pessasNoRestaurante = 0;
var mesasLivres = 10;
var mesasOcupadas = 0;
var dinheiroReceber = 0;
//array que armazena o valor total de consumo da mesa
var mesas = [0,0,0,0,0,0,0,0,0,0];
//array que armazena a quantidade de pessoas na mesa
var pessoasNaMesa = [0,0,0,0,0,0,0,0,0,0];
//array que controla ocupacao das mesas
var ocupacao = [0,0,0,0,0,0,0,0,0,0];



//funcao que adiciona valores aos arrays de pedido e valor
function adicionaPedidoNaMesa(numeroDaMesa,comidaPedida, valorDoPedido){
    switch(numeroDaMesa) {
        case 1:
            //adiciona string do pedido ao array
            pedidosDaMesa1.push(comidaPedida);
            //adiciona valor do pedido ao array
            valorDaMesa1.push(parseInt(valorDoPedido));
        break;
        case 2:
            pedidosDaMesa2.push(comidaPedida);
            valorDaMesa2.push(parseInt(valorDoPedido));
        break;
        case 3:
            pedidosDaMesa3.push(comidaPedida);
            valorDaMesa3.push(parseInt(valorDoPedido));
        break;
        case 4:
            pedidosDaMesa4.push(comidaPedida);
            valorDaMesa4.push(parseInt(valorDoPedido));
        break;
        case 5:
            pedidosDaMesa5.push(comidaPedida);
            valorDaMesa5.push(parseInt(valorDoPedido));
        break;
        case 6:
            pedidosDaMesa6.push(comidaPedida);
            valorDaMesa6.push(parseInt(valorDoPedido));
        break;
        case 7:
            pedidosDaMesa7.push(comidaPedida);
            valorDaMesa7.push(parseInt(valorDoPedido));
        break;
        case 8:
            pedidosDaMesa8.push(comidaPedida);
            valorDaMesa8.push(parseInt(valorDoPedido));
        break;
        case 9:
            pedidosDaMesa9.push(comidaPedida);
            valorDaMesa9.push(parseInt(valorDoPedido));
        break;
        case 10:
            pedidosDaMesa10.push(comidaPedida);
            valorDaMesa10.push(parseInt(valorDoPedido));
        break;
    }
}

//funcao que remove o valor e o pedidos de seus respectivos arrays, e atualiza dados no site
function removePedidosDaMesa(mesaRemover, comidaRemovida, valorRemovido, quantidadeRemover) {
    //switch para definicao de mesa aplicavel
    switch(parseInt(mesaRemover)) {
        case 1:
            //checkando se aquela mesa possui o pedido foi pedido para remover
            if(pedidosDaMesa1.includes(comidaRemovida)){
                //percorre o algoritmo a quantidade de vezes que o pedido foi removido
                for(let i = 0; i < quantidadeRemover; i++){
                    //sobrescreve o valor do pedido, no index correto, para -1 (para identificacao)
                    pedidosDaMesa1[pedidosDaMesa1.indexOf(comidaRemovida)] = -1;
                    //subtrai o valor do pedido, do dinheiro no restaurante
                    dinheiroReceber -= valorRemovido;
                    //remove o valor da mesa
                    mesas[mesaRemover - 1] -= valorRemovido;
                    //atualiza valores de valor da mesa e dinheiro a receber no site
                    $('#valor' + mesaRemover).html(mesas[mesaRemover - 1]);
                    $('#dinheiroReceber').html(dinheiroReceber);
                }
            }else { alert("Este pedido não existe na mesa " + mesaRemover); } //pedido nao feito na mesa
        break;
        case 2:
            if(pedidosDaMesa2.includes(comidaRemovida)){
                for(let i = 0; i < quantidadeRemover; i++){
                    pedidosDaMesa2[pedidosDaMesa2.indexOf(comidaRemovida)] = -1;
                    dinheiroReceber -= valorRemovido;
                    mesas[mesaRemover - 1] -= valorRemovido;
                    $('#valor' + mesaRemover).html(mesas[mesaRemover - 1]);
                    $('#dinheiroReceber').html(dinheiroReceber);
                }
            }else { alert("Este pedido não existe na mesa " + mesaRemover); }
        break;
        case 3:
            if(pedidosDaMesa3.includes(comidaRemovida)){
                for(let i = 0; i < quantidadeRemover; i++){
                    pedidosDaMesa3[pedidosDaMesa3.indexOf(comidaRemovida)] = -1;
                    dinheiroReceber -= valorRemovido;
                    mesas[mesaRemover - 1] -= valorRemovido;
                    $('#valor' + mesaRemover).html(mesas[mesaRemover - 1]);
                    $('#dinheiroReceber').html(dinheiroReceber);
                }
            }else { alert("Este pedido não existe na mesa " + mesaRemover); }
        break;
        case 4:
            if(pedidosDaMesa4.includes(comidaRemovida)){
                for(let i = 0; i < quantidadeRemover; i++){
                    pedidosDaMesa4[pedidosDaMesa4.indexOf(comidaRemovida)] = -1;
                    dinheiroReceber -= valorRemovido;
                    mesas[mesaRemover - 1] -= valorRemovido;
                    $('#valor' + mesaRemover).html(mesas[mesaRemover - 1]);
                    $('#dinheiroReceber').html(dinheiroReceber);
                }
            }else { alert("Este pedido não existe na mesa " + mesaRemover); }
        break;
        case 5:
            if(pedidosDaMesa5.includes(comidaRemovida)){
                for(let i = 0; i < quantidadeRemover; i++){
                    pedidosDaMesa5[pedidosDaMesa5.indexOf(comidaRemovida)] = -1;
                    dinheiroReceber -= valorRemovido;
                    mesas[mesaRemover - 1] -= valorRemovido;
                    $('#valor' + mesaRemover).html(mesas[mesaRemover - 1]);
                    $('#dinheiroReceber').html(dinheiroReceber);
                }
            }else { alert("Este pedido não existe na mesa " + mesaRemover); }
        break;
        case 6:
            if(pedidosDaMesa6.includes(comidaRemovida)){
                for(let i = 0; i < quantidadeRemover; i++){
                    pedidosDaMesa6[pedidosDaMesa6.indexOf(comidaRemovida)] = -1;
                    dinheiroReceber -= valorRemovido;
                    mesas[mesaRemover - 1] -= valorRemovido;
                    $('#valor' + mesaRemover).html(mesas[mesaRemover - 1]);
                    $('#dinheiroReceber').html(dinheiroReceber);
                }
            }else { alert("Este pedido não existe na mesa " + mesaRemover); }
        break;
        case 7:
            if(pedidosDaMesa7.includes(comidaRemovida)){
                for(let i = 0; i < quantidadeRemover; i++){
                    pedidosDaMesa7[pedidosDaMesa7.indexOf(comidaRemovida)] = -1;
                    dinheiroReceber -= valorRemovido;
                    mesas[mesaRemover - 1] -= valorRemovido;
                    $('#valor' + mesaRemover).html(mesas[mesaRemover - 1]);
                    $('#dinheiroReceber').html(dinheiroReceber);
                }
            }else { alert("Este pedido não existe na mesa " + mesaRemover); }
        break;
        case 8:
            if(pedidosDaMesa8.includes(comidaRemovida)){
                for(let i = 0; i < quantidadeRemover; i++){
                    pedidosDaMesa8[pedidosDaMesa8.indexOf(comidaRemovida)] = -1;
                    dinheiroReceber -= valorRemovido;
                    mesas[mesaRemover - 1] -= valorRemovido;
                    $('#valor' + mesaRemover).html(mesas[mesaRemover - 1]);
                    $('#dinheiroReceber').html(dinheiroReceber);
                }
            }else { alert("Este pedido não existe na mesa " + mesaRemover); }
        break;
        case 9:
            if(pedidosDaMesa9.includes(comidaRemovida)){
                for(let i = 0; i < quantidadeRemover; i++){
                    pedidosDaMesa9[pedidosDaMesa9.indexOf(comidaRemovida)] = -1;
                    dinheiroReceber -= valorRemovido;
                    mesas[mesaRemover - 1] -= valorRemovido;
                    $('#valor' + mesaRemover).html(mesas[mesaRemover - 1]);
                    $('#dinheiroReceber').html(dinheiroReceber);
                }
            }else { alert("Este pedido não existe na mesa " + mesaRemover); }
        break;
        case 10:
            if(pedidosDaMesa10.includes(comidaRemovida)){
                for(let i = 0; i < quantidadeRemover; i++){
                    pedidosDaMesa10[pedidosDaMesa10.indexOf(comidaRemovida)] = -1;
                    dinheiroReceber -= valorRemovido;
                    mesas[mesaRemover - 1] -= valorRemovido;
                    $('#valor' + mesaRemover).html(mesas[mesaRemover - 1]);
                    $('#dinheiroReceber').html(dinheiroReceber);
                }
            }else { alert("Este pedido não existe na mesa " + mesaRemover); }
        break;
    }
}

//funcao que gera o extrato da mesa, com valores e pedidos
function extratoDaMesa(extratoMesa) {
    //abre a janela de extrato
    $('#fechamentoDePedidoOpacidade').fadeIn(200);
    //switch para definir mesa a ser fechada
    switch (extratoMesa) {
        case 1:
            //cria um li para cada pedido, e seu respectivo valor, usando os arrays de controle
            for(let i = 0; i < pedidosDaMesa1.length; i++){
                //confere se o pedido nao foi removido
                if(pedidosDaMesa1[i] != -1) {
                    //cria o li
                    $('#extrato').append("<li>" + pedidosDaMesa1[i] + " R$ " + valorDaMesa1[i] + "</li>");
                }
            }
            //faz o print da soma dos pedidos
            $('#somaExtrato').html("R$ " + mesas[extratoMesa - 1]);
            //ao clicar no botao de fechamento =
            $('#confirmaFechamento').on('click', function() {
                console.log("clicado");
                //executa a funcao de reabrir mesa
                reabreMesa(extratoMesa);
                //subtrai o valor da mesa, do dinheiro a receber
                dinheiroReceber -= mesas[extratoMesa - 1];
                //altera o valor de dinheiro a receber no site
                $('#dinheiroReceber').html(dinheiroReceber);
                //resetando valores
                valorDaMesa1 = [];
                pedidosDaMesa1 = [];
                mesas[extratoMesa - 1] = 0;
                somaExtrato1 = 0;
                //desfazendo os li's criados do extrato
                $('#extrato').empty();
            });
        break;
        case 2:
                       
            for(let i = 0; i < pedidosDaMesa2.length; i++){
                if(pedidosDaMesa2[i] != -1) {
                    $('#extrato').append("<li>" + pedidosDaMesa2[i] + " R$ " + valorDaMesa2[i] + "</li>");
                }
            }
            $('#somaExtrato').html("R$ " + mesas[extratoMesa - 1]);
            $('#confirmaFechamento').on('click', function() {
                dinheiroReceber -= mesas[extratoMesa - 1];
                reabreMesa(extratoMesa);
                $('#dinheiroReceber').html(dinheiroReceber);
                valorDaMesa2 = [];
                pedidosDaMesa2 = [];
                mesas[extratoMesa - 1] = 0;
                somaExtrato2 = 0;
                $('#extrato').empty();
            });
        break;
        case 3:
            for(let i = 0; i < pedidosDaMesa3.length; i++){
                if(pedidosDaMesa3[i] != -1) {
                    $('#extrato').append("<li>" + pedidosDaMesa3[i] + " R$ " + valorDaMesa3[i] + "</li>");
                }
            }
            $('#somaExtrato').html("R$ " + mesas[extratoMesa - 1]);
            $('#confirmaFechamento').on('click', function() {
                dinheiroReceber -= mesas[extratoMesa - 1];
                reabreMesa(extratoMesa);
                $('#dinheiroReceber').html(dinheiroReceber);
                valorDaMesa3 = [];
                pedidosDaMesa3 = [];
                mesas[extratoMesa - 1] = 0;
                somaExtrato3 = 0;
                $('#extrato').empty();
            });
        break;
        case 4:
            for(let i = 0; i < pedidosDaMesa2.length; i++){
                if(pedidosDaMesa4[i] != -1) {
                    $('#extrato').append("<li>" + pedidosDaMesa4[i] + " R$ " + valorDaMesa4[i] + "</li>");
                }
            }
            $('#somaExtrato').html("R$ " + mesas[extratoMesa - 1]);
            $('#confirmaFechamento').on('click', function() {
                dinheiroReceber -= mesas[extratoMesa - 1];
                reabreMesa(extratoMesa);
                $('#dinheiroReceber').html(dinheiroReceber);
                valorDaMesa4 = [];
                pedidosDaMesa4 = [];
                mesas[extratoMesa - 1] = 0;
                somaExtrato4 = 0;
                $('#extrato').empty();
            });
        break;
        case 5:
            for(let i = 0; i < pedidosDaMesa5.length; i++){
                if(pedidosDaMesa5[i] != -1) {
                    $('#extrato').append("<li>" + pedidosDaMesa5[i] + " R$ " + valorDaMesa5[i] + "</li>");
                }
            }
            $('#somaExtrato').html("R$ " + mesas[extratoMesa - 1]);
            $('#confirmaFechamento').on('click', function() {
                dinheiroReceber -= mesas[extratoMesa - 1];
                reabreMesa(extratoMesa);
                $('#dinheiroReceber').html(dinheiroReceber);
                valorDaMesa5 = [];
                pedidosDaMesa5 = [];
                mesas[extratoMesa - 1] = 0;
                somaExtrato5 = 0;
                $('#extrato').empty();
            });
        break;
        case 6:
            for(let i = 0; i < pedidosDaMesa6.length; i++){
                if(pedidosDaMesa6[i] != -1) {
                    $('#extrato').append("<li>" + pedidosDaMesa6[i] + " R$ " + valorDaMesa6[i] + "</li>");
                }
            }
            $('#somaExtrato').html("R$ " + mesas[extratoMesa - 1]);
            $('#confirmaFechamento').on('click', function() {
                dinheiroReceber -= mesas[extratoMesa - 1];
                reabreMesa(extratoMesa);
                $('#dinheiroReceber').html(dinheiroReceber);
                valorDaMesa6 = [];
                pedidosDaMesa6 = [];
                mesas[extratoMesa - 1] = 0;
                somaExtrato6 = 0;
                $('#extrato').empty();
            });
        break;
        case 7:
            for(let i = 0; i < pedidosDaMesa7.length; i++){
                if(pedidosDaMesa7[i] != -1) {
                    $('#extrato').append("<li>" + pedidosDaMesa7[i] + " R$ " + valorDaMesa7[i] + "</li>");
                }
            }
            $('#somaExtrato').html("R$ " + mesas[extratoMesa - 1]);
            $('#confirmaFechamento').on('click', function() {
                dinheiroReceber -= mesas[extratoMesa - 1];
                reabreMesa(extratoMesa);
                $('#dinheiroReceber').html(dinheiroReceber);
                valorDaMesa7 = [];
                pedidosDaMesa7 = [];
                mesas[extratoMesa - 1] = 0;
                somaExtrato7 = 0;
                $('#extrato').empty();
            });
        break;
        case 8:
            for(let i = 0; i < pedidosDaMesa8.length; i++){
                if(pedidosDaMesa8[i] != -1) {
                    $('#extrato').append("<li>" + pedidosDaMesa8[i] + " R$ " + valorDaMesa8[i] + "</li>");
                }
            }
            $('#somaExtrato').html("R$ " + mesas[extratoMesa - 1]);
            $('#confirmaFechamento').on('click', function() {
                dinheiroReceber -= mesas[extratoMesa - 1];
                reabreMesa(extratoMesa);
                $('#dinheiroReceber').html(dinheiroReceber);
                valorDaMesa8 = [];
                pedidosDaMesa8 = [];
                mesas[extratoMesa - 1] = 0;
                somaExtrato8 = 0;
                $('#extrato').empty();
            });
        break;
        case 9:
            for(let i = 0; i < pedidosDaMesa9.length; i++){
                if(pedidosDaMesa9[i] != -1) {
                    $('#extrato').append("<li>" + pedidosDaMesa9[i] + " R$ " + valorDaMesa9[i] + "</li>");
                }
            }
            $('#somaExtrato').html("R$ " + mesas[extratoMesa - 1]);
            $('#confirmaFechamento').on('click', function() {
                dinheiroReceber -= mesas[extratoMesa - 1];
                reabreMesa(extratoMesa);
                $('#dinheiroReceber').html(dinheiroReceber);
                valorDaMesa9 = [];
                pedidosDaMesa9 = [];
                mesas[extratoMesa - 1] = 0;
                somaExtrato9 = 0;
                $('#extrato').empty();
            });
        break;
        case 10:
            for(let i = 0; i < pedidosDaMesa10.length; i++){
                if(pedidosDaMesa10[i] != -1) {
                    $('#extrato').append("<li>" + pedidosDaMesa10[i] + " R$ " + valorDaMesa10[i] + "</li>");
                }
            }
            $('#somaExtrato').html("R$ " + mesas[extratoMesa - 1]);
            $('#confirmaFechamento').on('click', function() {
                dinheiroReceber -= mesas[extratoMesa - 1];
                reabreMesa(extratoMesa);
                $('#dinheiroReceber').html(dinheiroReceber);
                valorDaMesa10 = [];
                pedidosDaMesa10 = [];
                mesas[extratoMesa - 1] = 0;
                somaExtrato10 = 0;
                $('#extrato').empty();
            });
        break;

    }
}

//funcao para redefinir mesa como "livre"
function reabreMesa(numeroDaMesa){
    //define a ocupacao da mesa como falsa
    ocupacao[numeroDaMesa -1] = 0;

    console.log("entrou");
    //esconde o botao individual de fechar mesa
    $('#fecharMesa' + numeroDaMesa).hide();
    //subtrai o numero de pessoas naquela mesa, do numero de pessoas no restaurante e altera o valor no site
    pessasNoRestaurante -= pessoasNaMesa[numeroDaMesa - 1];
    $('#pessoasNoRestaurante').html(pessasNoRestaurante);
    //transforma o numero de pessoas na mesa para zero
    pessoasNaMesa[numeroDaMesa - 1] = 0;
    //modifica valores de mesas livres e mesas ocupadas e altera seu valor no site
    mesasLivres = mesasLivres + 1;
    mesasOcupadas = mesasOcupadas - 1;
    $('#mesasLivres').html(mesasLivres);
    $('#mesasOcupadas').html(mesasOcupadas);

    console.log("L: " + mesasLivres, "O: " + mesasOcupadas);
    //altera o CSS das mesas, para verde
    $('#mesa' + numeroDaMesa).css("background-color", "#27ae60");
    $('#mesa' + numeroDaMesa).css("border-color", "#257245");
    $('#mesa' + numeroDaMesa).hover(function(){
        $('#mesa' + numeroDaMesa).css("background-color", "#34c972");
    },function(){
        $('#mesa' + numeroDaMesa).css("background-color", "#27ae60");
    });
    //altera o valor de pessoas e valor da mesa, para zero
    $('#pessoas' + numeroDaMesa).html("0");
    $('#valor' + numeroDaMesa).html("0,00");
    //fecha a janela de extrato
    $('#fechamentoDePedidoOpacidade').fadeOut(200);
}

//funcao que executa quando o documento for completamente carregado
$(document).ready(function() {
    //funcao de checkin do site
    $('#checkin').on('click', function adicionaMesa(){
        //define o numero de mesas e de pessoas nos inputs
        let numeroDaMesa = document.getElementById("mesaCheckin").value;
        let numeroDePessoas = document.getElementById("clientes").value;
        //zera os inputs
        document.getElementById("mesaCheckin").value = '';
        document.getElementById("clientes").value = '';
        //checa se a mesa esta livre e se os valores sao validos
        if(!ocupacao[numeroDaMesa - 1] && numeroDePessoas > 0 && numeroDaMesa > 0 && numeroDaMesa <= 10) {
            //transforma a ocupacao da mesa selecionada para true
            ocupacao[numeroDaMesa - 1] = 1;
            //mostra o botao de fechamento individual de mesa
            $('#fecharMesa' + numeroDaMesa).show();
            //adiciona o numero de pessoas na mesa ao numero total de pessoas no restaurante e a variavel individual de mesa
            pessasNoRestaurante += parseInt(numeroDePessoas);
            pessoasNaMesa[numeroDaMesa - 1] = parseInt(numeroDePessoas);
            //altera valores de mesas livres e ocupadas, e faz a alteracao no site
            mesasLivres = mesasLivres - 1;
            mesasOcupadas = mesasOcupadas + 1;
            $('#mesasLivres').html(mesasLivres);
            $('#mesasOcupadas').html(mesasOcupadas);
            $('#pessoasNoRestaurante').html(pessasNoRestaurante);
            //altera o CSS das mesas para vermelho
            $('#mesa' + numeroDaMesa).css("background-color", "#db5243");
            $('#mesa' + numeroDaMesa).css("border-color", "#962a1e");
            $('#mesa' + numeroDaMesa).hover(function(){
                $('#mesa' + numeroDaMesa).css("background-color", "#e47366");
            },function(){
                $('#mesa' + numeroDaMesa).css("background-color", "#db5243");
            });
            //altera o numero de pessoas da mesa
            $('#pessoas' + numeroDaMesa).html(numeroDePessoas);

        }else if (numeroDePessoas <= 0 || numeroDePessoas == isNaN) {
            //caso o valor de pessoas seja nulo ou menor/igual a zero, mensagem de erro
            alert("Não é possivel ocupar uma mesa sem clientes!");
        }else if (numeroDaMesa > 10 || numeroDaMesa < 0) {
            //caso o input de mesa esteja fora do range 1-10, mensagem de erro
            alert("Mesa inexistente!");
        }else { alert("Esta mesa já está ocupada!"); } //caso a mesa ja esteja ocupada, mensagem de erro
    });
    // funcao para adicao de pedidos em mesa
    $('#submitPedidos').on('click', function adicionaPedido(){
        //define variaveis para os inputs
        let numeroDaMesa = parseInt(document.getElementById("mesaPedidos").value);
        //recebe todos os valores do select
        let pedidos = document.getElementById("listaPedidos");
        let valorDoPedido = pedidos.options[pedidos.selectedIndex].value; //traz o valor do pedido
        let comidaPedida = pedidos.options[pedidos.selectedIndex].text; //traz o texto do pedido
        let quantidadeDoPedido = document.getElementById("quantidadeDoPedido").value;
        //reseta os inputs
        document.getElementById("mesaPedidos").value = '';
        document.getElementById("quantidadeDoPedido").value = '';
        //checka se a mesa esta ocupada
        if(ocupacao[numeroDaMesa -1]) {
            //adiciona o valor*quantidade do pedido, ao dinheiro no restaurante e a mesa individual
            dinheiroReceber += valorDoPedido * parseInt(quantidadeDoPedido);
            mesas[numeroDaMesa - 1] += valorDoPedido * parseInt(quantidadeDoPedido);
            //executa a funcao de adicionar pedido a quantidade de vezes que foi pedida
            for(let i = 0; i < quantidadeDoPedido; i++){
                adicionaPedidoNaMesa(numeroDaMesa, comidaPedida, valorDoPedido);
            }
            //altera o valor da mesa e o dinheiro no restaurante
            $('#valor' + numeroDaMesa).html(mesas[numeroDaMesa - 1]);
            $('#dinheiroReceber').html(dinheiroReceber);
        }else if (quantidadeDoPedido <= 0 || quantidadeDoPedido == isNaN) {
            //caso a quantidade seja nula ou menor/igual a zero, mensagem de erro
            alert("Quantidade nula!");
        }else { alert("Não é possivel adicionar um pedido a uma mesa vazia!"); } //caso a mesa esteja vazia, mensagem de erro
    });
    //funcao para remover pedido em mesa
    $('#removerPedido').on('click', function removePedido(){
        //recebe valores dos inputs
        let mesaRemover = document.getElementById("mesaRemover").value;
        let quantidadeRemover = document.getElementById("quantidadeDoPedidoRemover").value;
        //recebe todos os valores do select
        let pedidoRemovido = document.getElementById("listaPedidosRemover");
        let comidaRemovida = pedidoRemovido.options[pedidoRemovido.selectedIndex].text;//traz o texto do pedido
        let valorRemovido = pedidoRemovido.options[pedidoRemovido.selectedIndex].value;//traz o valor do pedido
        //reseta os inputs
        document.getElementById("quantidadeDoPedidoRemover").value = '';
        document.getElementById("mesaRemover").value = '';
        //checka se a mesa esta ocupada
        if(ocupacao[mesaRemover - 1]) {
            //executa a funcao de remocao de pedido da mesa
            removePedidosDaMesa(mesaRemover, comidaRemovida, valorRemovido, quantidadeRemover);
        }else { alert("Nao é possivel remover um pedido de uma mesa vazia!"); } //caso a mesa nao esteja ocupada, mensagem de erro

    });

    //botoes individuais para extrato, que executam tal funcao
    $('#fecharMesa1').on('click', function(){ if(!valorDaMesa1.length == 0) { extratoDaMesa(1); }else { alert("Esta mesa nao consumiu nada!");extratoDaMesa(1); } });
    $('#fecharMesa2').on('click', function(){ if(!valorDaMesa2.length == 0) { extratoDaMesa(2); }else { alert("Esta mesa nao consumiu nada!");extratoDaMesa(2); } });
    $('#fecharMesa3').on('click', function(){ if(!valorDaMesa3.length == 0) { extratoDaMesa(3); }else { alert("Esta mesa nao consumiu nada!");extratoDaMesa(3); } });
    $('#fecharMesa4').on('click', function(){ if(!valorDaMesa4.length == 0) { extratoDaMesa(4); }else { alert("Esta mesa nao consumiu nada!");extratoDaMesa(4); } });
    $('#fecharMesa5').on('click', function(){ if(!valorDaMesa5.length == 0) { extratoDaMesa(5); }else { alert("Esta mesa nao consumiu nada!");extratoDaMesa(5); } });
    $('#fecharMesa6').on('click', function(){ if(!valorDaMesa6.length == 0) { extratoDaMesa(6); }else { alert("Esta mesa nao consumiu nada!");extratoDaMesa(6); } });
    $('#fecharMesa7').on('click', function(){ if(!valorDaMesa7.length == 0) { extratoDaMesa(7); }else { alert("Esta mesa nao consumiu nada!");extratoDaMesa(7); } });
    $('#fecharMesa8').on('click', function(){ if(!valorDaMesa8.length == 0) { extratoDaMesa(8); }else { alert("Esta mesa nao consumiu nada!");extratoDaMesa(8); } });
    $('#fecharMesa9').on('click', function(){ if(!valorDaMesa9.length == 0) { extratoDaMesa(9); }else { alert("Esta mesa nao consumiu nada!");extratoDaMesa(9); } });
    $('#fecharMesa10').on('click', function(){ if(!valorDaMesa10.length == 0) { extratoDaMesa(10); }else { alert("Esta mesa nao consumiu nada!");extratoDaMesa(10); } });

    //botao de fechamento da pagina de extrato
    $('.exitIcon').on('click', function(){
        //fecha a janela de extrato
        $('#fechamentoDePedidoOpacidade').fadeOut(300); 
        //limpa os li's
        $('#extrato').empty();
    })
});