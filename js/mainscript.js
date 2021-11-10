$(document).ready(function(){

  loadPage();

  $('.ui.checkbox').checkbox();

});

var perguntasUC = [
  "Todos os requisitos funcionais estão sendo incorporados no diagrama?",
  "O diagrama possuí atores que se encaixam com os casos de uso?",
  "Os casos de uso estão numerados corretamente?",
  "As Interações de Extend estão representadas corretamente?",
  "As Interações de Include estão representadas corretamente?",
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
  "O Nome e versão do sistema são apresentados?",
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
  val += '<input id="inputResponsavel" type="text" placeholder="Favor inserir o responsável"></div></div>';
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
}
