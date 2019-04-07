
$(document).ready(function() {
    $('#checkin').on('click', function adicionaMesa(){
        let numeroDaMesa = document.getElementById("mesa").value;
        let numeroDePessoas = document.getElementById("clientes").value;

        $('#mesa' + numeroDaMesa).css("background-color", "#db5243");
        $('#mesa' + numeroDaMesa).css("border-color", "#962a1e")
        $('#mesa' + numeroDaMesa).hover(function(){
            $('#mesa' + numeroDaMesa).css("background-color", "#e47366");
        },function(){
            $('#mesa' + numeroDaMesa).css("background-color", "#db5243");
        });

        $('#pessoas' + numeroDaMesa).html(numeroDePessoas);
    });

    
});