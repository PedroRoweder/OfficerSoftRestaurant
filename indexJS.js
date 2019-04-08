
$(document).ready(function() {

    let pessasNoRestaurante = 0;
    let mesasLivres = 10;
    let mesasOcupadas = 0;
    let mesas = [0,0,0,0,0,0,0,0,0,0];
    console.log(mesasLivres);

    $('#checkin').on('click', function adicionaMesa(){
        let numeroDaMesa = document.getElementById("mesaCheckin").value;
        let numeroDePessoas = document.getElementById("clientes").value;

        pessasNoRestaurante = pessasNoRestaurante + parseInt(numeroDePessoas);
        mesasOcupadas++;
        mesasLivres--;
        $('#mesasLivres').html(mesasLivres);
        $('#mesasOcupadas').html(mesasOcupadas);
        $('#pessoasNoRestaurante').html(pessasNoRestaurante);

        $('#mesa' + numeroDaMesa).css("background-color", "#db5243");
        $('#mesa' + numeroDaMesa).css("border-color", "#962a1e")
        $('#mesa' + numeroDaMesa).hover(function(){
            $('#mesa' + numeroDaMesa).css("background-color", "#e47366");
        },function(){
            $('#mesa' + numeroDaMesa).css("background-color", "#db5243");
        });

        $('#pessoas' + numeroDaMesa).html(numeroDePessoas);
    });

    $('#submitPedidos').on('click', function adicionar(){
        let numeroDaMesa = parseInt(document.getElementById("mesaPedidos").value);
        let valorDoPedido = parseInt(document.getElementById("listaPedidos").value);

        mesas[numeroDaMesa - 1] += valorDoPedido;

        $('#valor' + numeroDaMesa).html(mesas[numeroDaMesa - 1]);

    });
});