$(document).ready(function(){

  loadPage();

  $('.ui.checkbox').checkbox();

});

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
    generateQuestion(0, perguntasUC);
  });
}

var perguntasUC = [
  "Todos os requisitos funcionais estão sendo incorporados no diagrama",
  "O diagrama possuí atores que se encaixam com os casos de uso",
  "Os casos de uso estão numerados corretamente",
  "As Interações de Extend estão representadas corretamente",
  "As Interações de Include estão representadas corretamente",
  "A relação de herança está representada de forma correta",
  "Os atores são identificados",
  "Os casos de uso estão no infinitivo",
  "Nenhum caso de uso está sem conexão<br>(com um ator ou outro caso de uso)",
  "O diagrama representa o que foi planejado"
]
var responsavelUC = [];
var observaçãoUC = [];
var quantidadeSimUC = [];

function generateQuestion(posicao, array){
  var val = '';
  val += '<div class="question center"><h1 class="branco textoCentralizado fontPoppins">CASO DE USO</h1>';
  val += '<h2 class="branco textoCentralizado fontPoppins">' + perguntasUC[posicao] + '?</h2>';
  val += '<div class="botaoQuestao"><div class="massive ui buttons">';
  val += '<button id="questionBTNYes" class="ui positive button">Sim</button>';
  val += '<div class="or" data-text="ou"></div>';
  val += '<button id="questionBTNNo" class="ui red button">Não</button>';
  val += '</div></div><br><form>';
  val += '<div class="inputQuestion">';
  val += '<div class="ui fluid labeled input mx-auto"><div class="ui label">Responsável</div>';
  val += '<input id="inputResponsavel" type="text" required placeholder="Favor inserir o responsável"></div></div>';
  val += '<div class="inputQuestion"><div class="ui fluid labeled input mx-auto"><div class="ui label">Observação</div>';
  val += '<input id="inputObservacao" type="text" placeholder="Insira a observação (Opcional)"></div></div>';
  val += '<button id="mainMenu" class="medium ui left floated labeled icon button">';
  val += '<i class="left arrow icon"></i>Menu Principal</button>';

  if(posicao == array.length-1){
    val += '<button type="submit" id="finalizarQuestionario" class="medium ui right floated labeled icon button">';
    val += '<i class="right arrow icon"></i>Finalizar</button></form></div>';
  }else{
    val += '<button type="submit" id="gerarNovaQuestao" class="medium ui right floated labeled icon button">';
    val += '<i class="right arrow icon"></i>Próxima Questão</button></form></div>';
  }
  updateScreen(val);
  gerarBotoes(quantidadeSimUC, posicao);

  $("#gerarNovaQuestao").click(function(){
    responsavelUC[posicao] = $("#inputResponsavel").val();
    observaçãoUC[posicao] = $("#inputObservacao").val();
    console.log(responsavelUC);
    console.log(observaçãoUC);
    console.log(quantidadeSimUC);
    clearScreen();
    generateQuestion(posicao+1, perguntasUC);

  });
}

function gerarBotoes(arraySaida, posicao){
  $("#mainMenu").click(function(){
    clearScreen();
    loadPage();
  });

  $("#questionBTNYes").click(function(){
    arraySaida[posicao] = 1;
    $("#questionBTNYes").addClass('active');
    $("#questionBTNYes").removeClass('positive');
    $("#questionBTNNo").addClass('red');
    $("#questionBTNNo").removeClass('active');
  });

  $("#questionBTNNo").click(function(){
    arraySaida[posicao] = 0;
    $("#questionBTNYes").addClass('positive');
    $("#questionBTNNo").addClass('active');
    $("#questionBTNNo").removeClass('red');
  });
}
