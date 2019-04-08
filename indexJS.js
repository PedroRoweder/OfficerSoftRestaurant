$('.testeFecharMesa').hide();
$('#fechamentoDePedidoOpacidade').hide();
1
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
var pessasNoRestaurante = 0;
var mesasLivres = 10;
var mesasOcupadas = 0;
var dinheiroReceber = 0;
var mesas = [0,0,0,0,0,0,0,0,0,0];
var ocupacao = [0,0,0,0,0,0,0,0,0,0];

function adicionaPedidoNaMesa(numeroDaMesa,comidaPedida){
    switch(numeroDaMesa) {
        case 1:
            pedidosDaMesa1.push(comidaPedida);
            console.log(pedidosDaMesa1);
        break;
        case 2:
            pedidosDaMesa2.push(comidaPedida);
            console.log(pedidosDaMesa2);
        break;
        case 3:
            pedidosDaMesa3.push(comidaPedida);
            console.log(pedidosDaMesa3);
        break;
        case 4:
            pedidosDaMesa4.push(comidaPedida);
            console.log(pedidosDaMesa4);
        break;
        case 5:
            pedidosDaMesa5.push(comidaPedida);
            console.log(pedidosDaMesa5);
        break;
        case 6:
            pedidosDaMesa6.push(comidaPedida);
            console.log(pedidosDaMesa6);
        break;
        case 7:
            pedidosDaMesa7.push(comidaPedida);
            console.log(pedidosDaMesa7);
        break;
        case 8:
            pedidosDaMesa8.push(comidaPedida);
            console.log(pedidosDaMesa8);
        break;
        case 9:
            pedidosDaMesa9.push(comidaPedida);
            console.log(pedidosDaMesa9);
        break;
        case 10:
            pedidosDaMesa10.push(comidaPedida);
            console.log(pedidosDaMesa10);
        break;
    }
}

function removePedidosDaMesa(mesaRemover, comidaRemovida, valorRemovido, quantidadeRemover) {
    switch(parseInt(mesaRemover)) {
        case 1:
            if(pedidosDaMesa1.includes(comidaRemovida)){
                for(let i = 0; i < quantidadeRemover; i++){
                    delete pedidosDaMesa1[pedidosDaMesa1.indexOf(comidaRemovida)];
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
                    delete pedidosDaMesa2[pedidosDaMesa2.indexOf(comidaRemovida)];
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
                    delete pedidosDaMesa3[pedidosDaMesa3.indexOf(comidaRemovida)];
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
                    delete pedidosDaMesa4[pedidosDaMesa4.indexOf(comidaRemovida)];
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
                    delete pedidosDaMesa5[pedidosDaMesa5.indexOf(comidaRemovida)];dinheiroReceber -= valorRemovido;
                    mesas[mesaRemover - 1] -= valorRemovido;
                    $('#valor' + mesaRemover).html(mesas[mesaRemover - 1]);
                    $('#dinheiroReceber').html(dinheiroReceber);
                }
            }else { alert("Este pedido não existe na mesa " + mesaRemover); }
        break;
        case 6:
            if(pedidosDaMesa6.includes(comidaRemovida)){
                for(let i = 0; i < quantidadeRemover; i++){
                    delete pedidosDaMesa6[pedidosDaMesa6.indexOf(comidaRemovida)];
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
                    delete pedidosDaMesa7[pedidosDaMesa7.indexOf(comidaRemovida)];
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
                    delete pedidosDaMesa8[pedidosDaMesa8.indexOf(comidaRemovida)];
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
                    delete pedidosDaMesa9[pedidosDaMesa9.indexOf(comidaRemovida)];
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
                    delete pedidosDaMesa10[pedidosDaMesa10.indexOf(comidaRemovida)];
                    dinheiroReceber -= valorRemovido;
                    mesas[mesaRemover - 1] -= valorRemovido;
                    $('#valor' + mesaRemover).html(mesas[mesaRemover - 1]);
                    $('#dinheiroReceber').html(dinheiroReceber);
                }
            }else { alert("Este pedido não existe na mesa " + mesaRemover); }
        break;
    }
}


$(document).ready(function() {

    $('#checkin').on('click', function adicionaMesa(){
        let numeroDaMesa = document.getElementById("mesaCheckin").value;
        let numeroDePessoas = document.getElementById("clientes").value;

        $('#fecharMesa' + numeroDaMesa).show();

        document.getElementById("mesaCheckin").value = '';
        document.getElementById("clientes").value = '';

        if(!ocupacao[numeroDaMesa - 1] && numeroDePessoas > 0 && numeroDaMesa > 0 && numeroDaMesa <= 10) {
            
            ocupacao[numeroDaMesa - 1] = 1;

            pessasNoRestaurante = pessasNoRestaurante + parseInt(numeroDePessoas);
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
                adicionaPedidoNaMesa(numeroDaMesa, comidaPedida);
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

    $('.testeFecharMesa').on('click', function(){
        $('#fechamentoDePedidoOpacidade').fadeIn(300);
    });
    $('#fechamentoDePedidoOpacidade').on('click', function(){
        $('#fechamentoDePedidoOpacidade').fadeOut(300);
    })
});