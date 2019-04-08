
$(document).ready(function() {

    let pessasNoRestaurante = 0;
    let mesasLivres = 10;
    let mesasOcupadas = 0;
    let dinheiroReceber = 0;
    let mesas = [0,0,0,0,0,0,0,0,0,0];
    let ocupacao = [0,0,0,0,0,0,0,0,0,0];

    $('#checkin').on('click', function adicionaMesa(){
        let numeroDaMesa = document.getElementById("mesaCheckin").value;
        let numeroDePessoas = document.getElementById("clientes").value;
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

    $('#submitPedidos').on('click', function adicionar(){
        let numeroDaMesa = parseInt(document.getElementById("mesaPedidos").value);
        let valorDoPedido = parseInt(document.getElementById("listaPedidos").value);

        if(ocupacao[numeroDaMesa -1]) {
        dinheiroReceber += valorDoPedido;
        mesas[numeroDaMesa - 1] += valorDoPedido;

        $('#valor' + numeroDaMesa).html(mesas[numeroDaMesa - 1]);
        $('#dinheiroReceber').html(dinheiroReceber);
        }else { alert("Não é possivel adicionar um pedido a uma mesa vazia!"); }
    });
});