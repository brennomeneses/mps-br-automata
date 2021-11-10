$(document).ready(function(){

  //loadPage();

  $("#mainMenu").click(function(){
    clearScreen();
    loadPage();
  });

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
  val += '<button id="questionBTNYes" class="ui button">Caso de Uso</button>';
  val += '<div class="or" data-text="ou"></div>';
  val += '<button id="questionBTNNo" class="ui button">Requisitos</button></div></div>'
  val += '<h3 class="textoCentralizado branco fontPoppins">Desenvolvido por:<br><br>Anderson Neumann<br>Brenno Araujo<br>Eduardo Ribeiro<br><br>Qualidade de Software 2021</h3>'
  val += '<div>';
  updateScreen(val);
}
