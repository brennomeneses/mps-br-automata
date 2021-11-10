$(document).ready(function(){

  loadPage();

  $("#startBtn").click(function(){
    var val = "";
    clearScreen();
    val += '<img class="center" src="https://upload.wikimedia.org/wikipedia/pt/7/71/Sour_-_Olivia_Rodrigo.png">';
    updateScreen(val);
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
  val += '<h1 class="textoCentralizado branco">Checklist<br>Qualidade de Software</h1>';
  val += '<br><div id="startBtn" class="massive standard mx-auto ui animated button" tabindex="0">';
  val += '<div class="visible content">Iniciar</div>';
  val += '<div class="hidden content"><i class="chevron circle right icon"></i><div><div><div>';
  updateScreen(val);
}
