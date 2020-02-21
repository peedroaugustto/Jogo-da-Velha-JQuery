var rodada = 1;
var matriz_jogo = Array(3);
matriz_jogo['a'] = Array(3);
matriz_jogo['b'] = Array(3);
matriz_jogo['c'] = Array(3);

matriz_jogo['a'][1] = 0;
matriz_jogo['a'][2] = 0;
matriz_jogo['a'][3] = 0;

matriz_jogo['b'][1] = 0;
matriz_jogo['b'][2] = 0;
matriz_jogo['b'][3] = 0;

matriz_jogo['c'][1] = 0;
matriz_jogo['c'][2] = 0;
matriz_jogo['c'][3] = 0;

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
        $('#' + idCampoClicado).off();
        jogada(idCampoClicado);
   });

   function jogada(id){
       var icone = '';
       var ponto = 0;

       if ((rodada % 2) == 1){
           icone = 'url("imagens/marcacao_1.png")';
           ponto = -1
       }else{
            icone = 'url("imagens/marcacao_2.png")';
            ponto = 1;
       }
       
       rodada++;

       $('#'+id).css('background-image',icone);

       var linha_coluna = id.split('-');

       matriz_jogo[linha_coluna[0]][linha_coluna[1]] = ponto;
       console.log(matriz_jogo);
       verifica_combinacao();
       
   }

   function verifica_combinacao(){
       //horizontal
        var pontos = 0;
        for(var i = 1; i <=3; i++){
            pontos = pontos + matriz_jogo['a'][i];
        }
        ganhador(pontos);

        pontos = 0;
        for(var i = 1; i <=3;i++){
            pontos = pontos + matriz_jogo['b'][i];
        }
        ganhador(pontos);

        pontos = 0;
        for(var i = 1; i <=3;i++){
            pontos = pontos + matriz_jogo['c'][i];
        }
        ganhador(pontos);

        for(var l = 1; l <=3 ;l++){
            pontos = 0;
            pontos = pontos + matriz_jogo['a'][l];
            pontos = pontos + matriz_jogo['b'][l];
            pontos = pontos + matriz_jogo['c'][l];
            ganhador(pontos);
        }

        pontos = 0;
        pontos = matriz_jogo['a'][1] + matriz_jogo['b'][2] + matriz_jogo['c'][3];
        ganhador(pontos);

        pontos = 0;
        pontos = matriz_jogo['a'][3] + matriz_jogo['b'][2] + matriz_jogo['c'][1];
        ganhador(pontos);

   }

   function ganhador(pontos){
       if(pontos == -3){
           var jogador_1 = $('#entrada_apelido_jogador_1').val();
           alert(jogador_1+' é o vencedor');
           $('.jogada').off();
       }else if(pontos == 3){
            var jogador_2 = $('#entrada_apelido_jogador_2').val();
            alert(jogador_2+' é o vencedor');
            $('.jogada').off();
       }
   }



});