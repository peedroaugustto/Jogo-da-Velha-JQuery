var rodada = 1;
var matriz_jogo = Array(3);

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

    $(".jogada").click(function(){
        var idCampoClicado = this.id;
        jogada(idCampoClicado);
   });

   function jogada(id){
       var icone = '';
       var ponto = 0;

       if ((rodada % 2) == 1){
           alert("É a vez do jogador 1");
       }else{
           alert("É a vez do jogado 2");
       }
       alert(rodada);
       rodada++;
   }




});