$(document).ready( function(){

    $('#btnIniciarJogo').click(function(){
        var jogador1 = $("#entrada_apelido_jogador_1").val().trim();
        var jogador2 = $("#entrada_apelido_jogador_2").val().trim();
    
        console.log(jogador1.length, jogador2.length);

        if( jogador1 == ''){
            alert("Apelido do Jogador 1, não foi preenchido");
            return false;
        }

        if( jogador2 == ''){
            alert("Apelido do Jogador 2, não foi preenchido");
            return false;
        }
        
        $("#nome_jogador_1").html(jogador1);
        $("#nome_jogador_2").html(jogador2);


        $("#pagina_inicial").hide();
        $("#palco_jogo").show();


    });


});