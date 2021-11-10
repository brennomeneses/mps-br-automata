$(document).ready(function(){

  loadPage();

  $('.ui.checkbox').checkbox();

});

var perguntasUC = [
  "Todos os requisitos funcionais estão sendo incorporados no diagrama?",
  "O diagrama possuí atores que se encaixam com os casos de uso?",
  "Os casos de uso estão numerados corretamente?",
  "As interações de Extend estão representadas corretamente?",
  "As interações de Include estão representadas corretamente?",
  "A relação de herança está representada corretamente?",
  "Os atores estão identificados?",
  "Os casos de uso estão no infinitivo?",
  "Nenhum caso de uso está sem conexão (com um ator ou outro caso de uso)",
  "O diagrama representa o que foi planejado?"
]
var responsavelUC = [];
var observaçãoUC = [];
var quantidadeSimUC = [];

var perguntasRQ = [
  "Todos os requisitos possuem identificação individual?",
  "O solicitante do requisito é apresentado?",
  "O nome e versão do sistema são apresentados?",
  "Os requisitos são classificados em niveis de prioridades?",
  "Os requisitos não são ambiguos",
  "Os requisitos não passam informações repetidas",
  "Os requisitos são classificados em niveis de prioridades?",
  "Os requisitos são rastreaveis?",
  "Os requisitos cumprem o que é esperado do projeto?",
  "Os requisitos estão no infinitivo?"
]
var responsavelRQ = [];
var observaçãoRQ = [];
var quantidadeSimRQ = [];

function clearScreen(){
  $(".screen").html("");
}
function updateScreen(val){
  $(".screen").append(val);
}

function loadPage(){
  var val = '<div class="pageContent center">';
  val += '<h1 class="textoCentralizado branco fontPoppins">Seja Bem Vindo!<br><br>Escolha um checklist<br>para iniciar:</h1><br>';
  val += '<div>';
  val += '<div class="huge ui buttons">';
  val += '<button id="questionUC" class="ui button">Caso de Uso</button>';
  val += '<div class="or" data-text="ou"></div>';
  val += '<button id="questionRQ" class="ui button">Requisitos</button></div></div>'
  val += '<h3 class="textoCentralizado branco fontPoppins">Desenvolvido por:<br><br>Anderson Neumann<br>Brenno Araujo<br>Eduardo Ribeiro<br><br>Qualidade de Software 2021</h3>'
  val += '<div>';
  updateScreen(val);

  $("#questionUC").click(function(){
    clearScreen();
    generateQuestion(0, perguntasUC, "CASO DE USO", responsavelUC, observaçãoUC, quantidadeSimUC);
  });

  $("#questionRQ").click(function(){
    clearScreen();
    generateQuestion(0, perguntasRQ, "REQUISITOS", responsavelRQ, observaçãoRQ, quantidadeSimRQ);
  });
}

function generateQuestion(posicao, arrayPerguntas, nome, arrayResponsavel, arrayObservacao, arrayOutput){
  var val = '';
  val += '<div class="question center"><h1 class="branco textoCentralizado fontPoppins">' + nome + '</h1>';
  val += '<h2 class="branco textoCentralizado fontPoppins">' + arrayPerguntas[posicao] + '</h2>';
  val += '<div class="botaoQuestao"><div class="massive ui buttons">';
  val += '<button id="questionBTNYes" class="ui positive button">Sim</button>';
  val += '<div class="or" data-text="ou"></div>';
  val += '<button id="questionBTNNo" class="ui red button">Não</button>';
  val += '</div></div><br><form>';
  val += '<div class="inputQuestion">';
  val += '<div class="ui fluid labeled input mx-auto"><div class="ui label">Responsável</div>';
  val += '<input id="inputResponsavel" type="text" placeholder="Insira o responsável (Opcional)"></div></div>';
  val += '<div class="inputQuestion"><div class="ui fluid labeled input mx-auto"><div class="ui label">Observação</div>';
  val += '<input id="inputObservacao" type="text" placeholder="Insira a observação (Opcional)"></div></div>';
  val += '<button id="mainMenu" class="medium ui left floated labeled icon button">';
  val += '<i class="left arrow icon"></i>Menu Principal</button>';

  if(posicao == arrayPerguntas.length-1){
    val += '<button type="submit" id="finalizarQuestionario" class="medium ui right floated labeled icon button">';
    val += '<i class="right arrow icon"></i>Finalizar</button></form></div>';
  }else{
    val += '<button type="submit" id="gerarNovaQuestao" class="medium ui right floated labeled icon button">';
    val += '<i class="right arrow icon"></i>Próxima Questão</button></form></div>';
  }
  updateScreen(val);

  $("#mainMenu").click(function(){
    window.location.href("index.html");
  });

  arrayOutput[posicao] = 0;

  $("#questionBTNYes").click(function(){
    arrayOutput[posicao] = 1;
    $("#questionBTNYes").addClass('active');
    $("#questionBTNYes").removeClass('positive');
    $("#questionBTNNo").addClass('red');
    $("#questionBTNNo").removeClass('active');
  });

  $("#questionBTNNo").click(function(){
    arrayOutput[posicao] = 0;
    $("#questionBTNYes").addClass('positive');
    $("#questionBTNNo").addClass('active');
    $("#questionBTNNo").removeClass('red');
  });

  $("#gerarNovaQuestao").click(function(){
    arrayResponsavel[posicao] = $("#inputResponsavel").val();
    arrayObservacao[posicao] = $("#inputObservacao").val();
    clearScreen();
    generateQuestion(posicao+1, arrayPerguntas, nome, arrayResponsavel, arrayObservacao, arrayOutput);
  });

  $("#finalizarQuestionario").click(function(){
    arrayResponsavel[posicao] = $("#inputResponsavel").val();
    arrayObservacao[posicao] = $("#inputObservacao").val();
    clearScreen();
    console.log(arrayOutput);
    generateResult(arrayPerguntas, nome, arrayResponsavel, arrayObservacao, arrayOutput);
  });
}

function generateResult(arrayPerguntas, nome, arrayResponsavel, arrayObservacao, arrayOutput){
  var val = '';
  val +='<div class="resultTable center"><h1 class="branco textoCentralizado fontPoppins">Resultado checklist de '+ nome.toLowerCase() + ':</h1>';
  val +='<h3 class="branco textoCentralizado fontPoppins">O checklist possui ' + returnPercentage(arrayOutput)+ '% de positividade.</h3>';
  if(returnPercentage(arrayOutput)>=70){
    $(".screen").css("background-color", "var(--fundoVerde)");
    val +='<h3 class="branco textoCentralizado fontPoppins">Parabéns! Conforme o checklist preenchido o programa está adequado em conformidades. Não será necessário alterar nada.</h3>';
  }else if(returnPercentage(arrayOutput)<70 && returnPercentage(arrayOutput)>=40){
    $(".screen").css("background-color", "var(--fundoAmarelo)");
    val +='<h3 class="branco textoCentralizado fontPoppins"> O programa está com suas conformidades na média, talvez seja necessário efetuar mais reuniões e discussões para se alcançar a conformidade adequada.</h3>';
  }else{
    $(".screen").css("background-color", "var(--fundoVermelho)");
    val +='<h3 class="branco textoCentralizado fontPoppins">Mais da metade do checklist apresenta não conformidades, será necessário uma revisão quase completa no projeto para se adequar a padrões aceitáveis.</h3>';
  }
  val +='<table class="ui fixed single line celled table">';
  val +='<thead class="topoLinha"><tr><th>Questão</th><th>Responsável</th><th>Observação</th><th>Status</th></tr></thead><tbody>';
  var curr = "";
  for (var i = 0; i<arrayPerguntas.length; i++){
    val +='<tr><td title="'+ arrayPerguntas[i] +'">'+ arrayPerguntas[i] +'</td>';
    val +='<td title="'+arrayResponsavel[i]+'">'+arrayResponsavel[i]+'</td>';
    val +='<td title="'+ arrayObservacao[i] +'">'+ arrayObservacao[i] +'</td>';
    curr = "";
    if (arrayOutput[i] == 0){
      curr = "Negativo";
    }else{
      curr = "Positivo";
    }
    val +='<td title="'+ curr +'">'+ curr +'</td></tr>';
  }
  val +='</tbody></table><br><button id="mainMenu" class="medium ui left floated labeled icon button mx-auto"><i class="left arrow icon"></i>Menu Principal</button></div>';
  updateScreen(val);

  $("#mainMenu").click(function(){
    window.location.href = "index.html";
  });
}

function returnPercentage(array){
  var each = 100/array.length;
  var count = 0;
  for (var i = 0; i<array.length; i++){
    if(array[i] == 1){
      count++;
    }
  }
  return each * count;
}
