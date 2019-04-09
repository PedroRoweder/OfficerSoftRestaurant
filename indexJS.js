$('.testeFecharMesa').hide();
$('#fechamentoDePedidoOpacidade').hide();

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
var extratoFeito = 0;
var pessasNoRestaurante = 0;
var mesasLivres = 10;
var mesasOcupadas = 0;
var dinheiroReceber = 0;
var mesas = [0,0,0,0,0,0,0,0,0,0];
var pessoasNaMesa = [0,0,0,0,0,0,0,0,0,0];
var ocupacao = [0,0,0,0,0,0,0,0,0,0];


function reabreMesa(numeroDaMesa){
    ocupacao[numeroDaMesa -1] = 0;
    $('#fecharMesa' + numeroDaMesa).hide();
    mesasOcupadas = mesasOcupadas - 1;
    mesasLivres = mesasLivres + 1;
    $('#mesasLivres').html(mesasLivres);
    $('#mesasOcupadas').html(mesasOcupadas);

    pessasNoRestaurante -= pessoasNaMesa[numeroDaMesa - 1];

    $('#pessoasNoRestaurante').html(pessasNoRestaurante);

    $('#mesa' + numeroDaMesa).css("background-color", "#27ae60");
    $('#mesa' + numeroDaMesa).css("border-color", "#257245");
    $('#mesa' + numeroDaMesa).hover(function(){
        $('#mesa' + numeroDaMesa).css("background-color", "#34c972");
    },function(){
        $('#mesa' + numeroDaMesa).css("background-color", "#27ae60");
    });

    $('#pessoas' + numeroDaMesa).html("0");
    $('#valor' + numeroDaMesa).html("0,00");
    $('#fechamentoDePedidoOpacidade').fadeOut(200);
}

function adicionaPedidoNaMesa(numeroDaMesa,comidaPedida, valorDoPedido){
    switch(numeroDaMesa) {
        case 1:
            pedidosDaMesa1.push(comidaPedida);
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

function removePedidosDaMesa(mesaRemover, comidaRemovida, valorRemovido, quantidadeRemover) {
    switch(parseInt(mesaRemover)) {
        case 1:
            if(pedidosDaMesa1.includes(comidaRemovida)){
                for(let i = 0; i < quantidadeRemover; i++){
                    pedidosDaMesa1[pedidosDaMesa1.indexOf(comidaRemovida)] = -1;
                    dinheiroReceber -= valorRemovido;
                    mesas[mesaRemover - 1] -= valorRemovido;
                    $('#valor' + mesaRemover).html(mesas[mesaRemover - 1]);
                    $('#dinheiroReceber').html(dinheiroReceber);
                }
            }else { alert("Este pedido não existe na mesa " + mesaRemover); }
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

function extratoDaMesa(extratoMesa) {
    $('#fechamentoDePedidoOpacidade').fadeIn(200);
    switch (extratoMesa) {
        case 1:
            
            for(let i = 0; i < pedidosDaMesa1.length; i++){
                if(pedidosDaMesa1[i] != -1) {
                    $('#extrato').append("<li>" + pedidosDaMesa1[i] + " R$ " + valorDaMesa1[i] + "</li>");
                }
            }

            $('#somaExtrato').html("R$ " + mesas[extratoMesa - 1]);


            $('#confirmaFechamento').on('click', function() {
                dinheiroReceber -= mesas[extratoMesa - 1];
                reabreMesa(extratoMesa);
                $('#dinheiroReceber').html(dinheiroReceber);
                valorDaMesa1 = [];
                pedidosDaMesa1 = [];
                mesas[extratoMesa - 1] = 0;
                somaExtrato1 = 0;
                $('#extrato').empty();
            });
        break;
        case 2:
            for(let i = 0; i < pedidosDaMesa2.length; i++){
                $('#extrato').append("<li>" + pedidosDaMesa2[i] + " R$ " + valorDaMesa2[i] + "</li>");
            }
            
            for(let j = 0; j < valorDaMesa2.length; j++) {
                somaExtrato2 += valorDaMesa2[j];
            }
            $('#somaExtrato').html("R$ " + somaExtrato2);

            $('#confirmaFechamento').on('click', function() {
                reabreMesa(extratoMesa);
                dinheiroReceber -= parseInt(somaExtrato2);
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
                $('#extrato').append("<li>" + pedidosDaMesa3[i] + " R$ " + valorDaMesa3[i] + "</li>");
            }
            var somaExtrato3 = 0;
            for(let j = 0; j < valorDaMesa3.length; j++) {
                somaExtrato3 += valorDaMesa3[j];
            }
            $('#somaExtrato').html("R$ " + somaExtrato3);
            $('#confirmaFechamento').on('click', function() {
                reabreMesa(extratoMesa);
                dinheiroReceber -= somaExtrato3;
                $('#dinheiroReceber').html(dinheiroReceber);
                valorDaMesa3 = [];
                pedidosDaMesa3 = [];
                mesas[extratoMesa - 1] = 0;
                somaExtrato3 = 0;
                $('#extrato').empty();
            });
        break;
        case 4:
            for(let i = 0; i < pedidosDaMesa4.length; i++){
                $('#extrato').append("<li>" + pedidosDaMesa4[i] + " R$ " + valorDaMesa4[i] + "</li>");
            }
            var somaExtrato4 = 0;
            for(let j = 0; j < valorDaMesa4.length; j++) {
                somaExtrato4 += valorDaMesa4[j];
            }
            $('#somaExtrato').html("R$ " + somaExtrato4);
            $('#confirmaFechamento').on('click', function() {
                reabreMesa(extratoMesa);
                dinheiroReceber -= somaExtrato4;
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
                $('#extrato').append("<li>" + pedidosDaMesa5[i] + " R$ " + valorDaMesa5[i] + "</li>");
            }
            var somaExtrato5 = 0;
            for(let j = 0; j < valorDaMesa5.length; j++) {
                somaExtrato5 += valorDaMesa5[j];
            }
            $('#somaExtrato').html("R$ " + somaExtrato5);
            $('#confirmaFechamento').on('click', function() {
                reabreMesa(extratoMesa);
                dinheiroReceber -= somaExtrato5;
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
                $('#extrato').append("<li>" + pedidosDaMesa6[i] + " R$ " + valorDaMesa6[i] + "</li>");
            }
            var somaExtrato6 = 0;
            for(let j = 0; j < valorDaMesa6.length; j++) {
                somaExtrato6 += valorDaMesa6[j];
            }
            $('#somaExtrato').html("R$ " + somaExtrato6);
            $('#confirmaFechamento').on('click', function() {
                reabreMesa(extratoMesa);
                dinheiroReceber -= somaExtrato6;
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
                $('#extrato').append("<li>" + pedidosDaMesa7[i] + " R$ " + valorDaMesa7[i] + "</li>");
            }
            var somaExtrato7 = 0;
            for(let j = 0; j < valorDaMesa7.length; j++) {
                somaExtrato7 += valorDaMesa7[j];
            }
            $('#somaExtrato').html("R$ " + somaExtrato7);
            $('#confirmaFechamento').on('click', function() {
                reabreMesa(extratoMesa);
                dinheiroReceber -= somaExtrato7;
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
                $('#extrato').append("<li>" + pedidosDaMesa8[i] + " R$ " + valorDaMesa8[i] + "</li>");
            }
            var somaExtrato8 = 0;
            for(let j = 0; j < valorDaMesa8.length; j++) {
                somaExtrato8 += valorDaMesa8[j];
            }
            $('#somaExtrato').html("R$ " + somaExtrato8);
            $('#confirmaFechamento').on('click', function() {
                reabreMesa(extratoMesa);
                dinheiroReceber -= somaExtrato8;
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
                $('#extrato').append("<li>" + pedidosDaMesa9[i] + " R$ " + valorDaMesa9[i] + "</li>");
            }
            var somaExtrato9 = 0;
            for(let j = 0; j < valorDaMesa9.length; j++) {
                somaExtrato9 += valorDaMesa9[j];
            }
            $('#somaExtrato').html("R$ " + somaExtrato9);
            $('#confirmaFechamento').on('click', function() {
                reabreMesa(extratoMesa);
                dinheiroReceber -= somaExtrato9;
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
                $('#extrato').append("<li>" + pedidosDaMesa10[i] + " R$ " + valorDaMesa10[i] + "</li>");
            }
            var somaExtrato10 = 0;
            for(let j = 0; j < valorDaMesa10.length; j++) {
                somaExtrato10 += valorDaMesa10[j];
            }
            $('#somaExtrato').html("R$ " + somaExtrato10);
            $('#confirmaFechamento').on('click', function() {
                reabreMesa(extratoMesa);
                dinheiroReceber -= somaExtrato10;
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




$(document).ready(function() {

    $('#checkin').on('click', function adicionaMesa(){
        let numeroDaMesa = document.getElementById("mesaCheckin").value;
        let numeroDePessoas = document.getElementById("clientes").value;

        pessoasNaMesa[numeroDaMesa - 1] = numeroDePessoas;

        

        document.getElementById("mesaCheckin").value = '';
        document.getElementById("clientes").value = '';

        if(!ocupacao[numeroDaMesa - 1] && numeroDePessoas > 0 && numeroDaMesa > 0 && numeroDaMesa <= 10) {
            
            ocupacao[numeroDaMesa - 1] = 1;
            $('#fecharMesa' + numeroDaMesa).show();
            pessasNoRestaurante += parseInt(numeroDePessoas);
            mesasOcupadas++;
            mesasLivres--;

            $('#mesasLivres').html(mesasLivres);
            $('#mesasOcupadas').html(mesasOcupadas);
            $('#pessoasNoRestaurante').html(pessasNoRestaurante);

            $('#mesa' + numeroDaMesa).css("background-color", "#db5243");
            $('#mesa' + numeroDaMesa).css("border-color", "#962a1e");
            $('#mesa' + numeroDaMesa).hover(function(){
                $('#mesa' + numeroDaMesa).css("background-color", "#e47366");
            },function(){
                $('#mesa' + numeroDaMesa).css("background-color", "#db5243");
            });

            $('#pessoas' + numeroDaMesa).html(numeroDePessoas);

    }else if (numeroDePessoas <= 0 || numeroDePessoas == isNaN) {
        alert("Não é possivel ocupar uma mesa sem clientes!");
    }else if (numeroDaMesa > 10 || numeroDaMesa < 0) {
        alert("Mesa inexistente!");
    }else { alert("Esta mesa já está ocupada!"); }
    });

    $('#submitPedidos').on('click', function adicionaPedido(){

        let numeroDaMesa = parseInt(document.getElementById("mesaPedidos").value);
        let pedidos = document.getElementById("listaPedidos");
        let valorDoPedido = pedidos.options[pedidos.selectedIndex].value; //TRAZ O VALOR DO PEDIDO
        let comidaPedida = pedidos.options[pedidos.selectedIndex].text; //TRAZ O TEXTO
        let quantidadeDoPedido = document.getElementById("quantidadeDoPedido").value;

        document.getElementById("mesaPedidos").value = '';
        document.getElementById("quantidadeDoPedido").value = '';

        if(ocupacao[numeroDaMesa -1]) {
        dinheiroReceber += valorDoPedido * parseInt(quantidadeDoPedido);
        mesas[numeroDaMesa - 1] += valorDoPedido * parseInt(quantidadeDoPedido);

            for(let i = 0; i < quantidadeDoPedido; i++){
                adicionaPedidoNaMesa(numeroDaMesa, comidaPedida, valorDoPedido);
            }

            $('#valor' + numeroDaMesa).html(mesas[numeroDaMesa - 1]);
            $('#dinheiroReceber').html(dinheiroReceber);
        }else if (quantidadeDoPedido <= 0 || quantidadeDoPedido == isNaN) {
            alert("Quantidade nula!");
        }else { alert("Não é possivel adicionar um pedido a uma mesa vazia!"); }
    });

    $('#removerPedido').on('click', function removePedido(){
        let mesaRemover = document.getElementById("mesaRemover").value;
        let quantidadeRemover = document.getElementById("quantidadeDoPedidoRemover").value;
        let pedidoRemovido = document.getElementById("listaPedidosRemover");
        let comidaRemovida = pedidoRemovido.options[pedidoRemovido.selectedIndex].text;
        let valorRemovido = pedidoRemovido.options[pedidoRemovido.selectedIndex].value;

        document.getElementById("quantidadeDoPedidoRemover").value = '';
        document.getElementById("mesaRemover").value = '';

        if(ocupacao[mesaRemover - 1]) {
            removePedidosDaMesa(mesaRemover, comidaRemovida, valorRemovido, quantidadeRemover);
        }else { alert("Nao é possivel remover um pedido de uma mesa vazia!"); }

    });


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

    $('.exitIcon').on('click', function(){
        $('#fechamentoDePedidoOpacidade').fadeOut(300); 
        $('#extrato').empty();
    })

});