
$('body').append("<div id='dlgchapas' title='marcar dominios automotor' class='dlg' style='position:absolute;  top: 20px;    left: 20px; width;50% z-index: 100; background-color: rgba(150,150,150,.5);'>"+
"<b>Lista de Dominios</b><br/>"+
"<textarea id='txtchapas' name='chapas' rows='4' cols='50'></textarea>"+
"<br/><b>Vencida: </b><input value='Marcar' type='button' onclick='marcarDeudaV(true);'/> <input value='Desmarcar' type='button' onclick='marcarDeudaV(false);'/>"+
"<br/><b>Próximo Vencimiento: </b><input value='marcar ' type='button' onclick='marcarDeudaC(true);'/> <input value='Desmarcar' type='button' onclick='marcarDeudaC(false);'/>"+
"<br/><b>Saldo Anual: </b><input value='marcar ' type='button' onclick='marcarDeudaS(true);'/> <input value='Desmarcar' type='button' onclick='marcarDeudaS(false);'/>"+
"<br/><b>Total: </b><input value='marcar ' type='button' onclick='marcarDeudaT(true);'/> <input value='Desmarcar' type='button' onclick='marcarDeudaT(false);'/>"+
"</div>")

$("#dlgchapas").dialog({ autoOpen: false });


function marcarDeudaV(pchecked){
	marcarDesmarcarCheckbox('_V', pchecked);
};

function marcarDeudaC(pchecked){
	marcarDesmarcarCheckbox('_C', pchecked);
};

function marcarDeudaS(pchecked){
	marcarDesmarcarCheckbox('_S', pchecked);
};

function marcarDeudaT(pchecked){
	marcarDesmarcarCheckbox('_T',pchecked );
};

function marcarDesmarcarCheckbox(sufijo, pchecked){
var myText = $("#txtchapas").val();
var lines = myText.split("\n");
myText.split("\n");
var numLines = lines.length;
var i;
var currentSection;
var sections = Array();
var phrases = Array();

// parse phrases
for (i = 0; i < numLines; i++) {
  var line = lines[i];
  if (line.length>0) {
    $("tr:contains("+line+") input[id*='"+sufijo+"']").prop("checked",pchecked);
  }
}


}

$( "body" ).keydown(function( event ) {
  if ( event.which == 121 ) {
   event.preventDefault();
  }
  if (($('#dlgchapas').dialog('isOpen') === true)){
	$(".ui-dialog").dialog('close');
  } else {
	  $(".ui-dialog").dialog('open');
  }
});
	 