isLoggedIn = false;
noTunebookLabel = isLoggedIn ? '-- Clear --' : '-- Compose --';
var nombreArchivo;
window.onload = function() {
	abc_editor = new ABCJS.Editor("textarea", { paper_id: "paper0",midi_id:"midi", warnings_id:"warnings" });
};
//------------------------------------------cargar archivo
function cargarABC() {
    var files = document.getElementById('files12').files;
	if (!files.length) {
		alert('Por Favor Cargar un Archivo Primero!');
		return;
    }
    var file = files[0];
    var start =  0;
    var stop =  file.size - 1;
    var reader = new FileReader();
    // If we use onloadend, we need to check the readyState.       
    reader.onloadend = function(evt) {
		if (evt.target.readyState == FileReader.DONE) { // DONE == 2
			document.getElementById('textarea').textContent = evt.target.result;
		}
    };
    if (file.webkitSlice) {
		var blob = file.webkitSlice(start, stop + 1);
    } else if (file.mozSlice) {
		var blob = file.mozSlice(start, stop + 1);
    }
    reader.readAsBinaryString(blob);
	document.getElementById("files12").style.visibility="collapse";
	document.getElementById("Btn_Cargar").style.visibility="collapse";
	document.getElementById("Btn_NUEVO").style.visibility="collapse";
	document.getElementById("Btn_Limpiar").style.visibility="collapse";
	document.getElementById("contenedor_principal").style.visibility="visible";
	
  };
 
function exit() {
  window.nativeWindow.close();
};

function getCaret(el) { 
  if (el.selectionStart) { 
    return el.selectionStart; 
  } else if (document.selection) { 
    el.focus(); 
    var r = document.selection.createRange(); 
    if (r == null) return 0; 
    var re = el.createTextRange(), 
        rc = re.duplicate(); 
    re.moveToBookmark(r.getBookmark()); 
    rc.setEndPoint('EndToStart', re); 
    var add_newlines = 0;
    for (var i=0; i<rc.text.length; i++)
      if (rc.text.substr(i, 2) == '\r\n') {
        add_newlines += 2;
        i++;
      }
    return rc.text.length - add_newlines; 
  }
  return 0; 
};
 
 
function prueba1(){
	var popo = document.getElementById("pr1").style.visibility;
	alert(popo);
};
function prueba2(){alert("ok2");};
function prueba3(){alert("ok3");};
function prueba4(){alert("ok4");};
function prueba5(){alert("ok5");};
function Mostrar_Editar(){
	document.getElementById("contenerdor_botonves").style.visibility="visible";	
};




//--------------Cerrar Ventana----------------
function Cerrar_Ventana(){
	close();
};
//--------------guardar archivo----------------
function Guardar(){
	var p = document.getElementById("textarea").value;
	alert(nombreArchivo);
};
  
// Funtion para agregar un silencio en formato abc donde se encuentre el cursor
function silencios_insert()
{
  var silencio_nota = document.getElementById('silencio_notas');
  silencio_nota = silencio_nota.value;
  var textarea = document.getElementById('textarea');
  var text = textarea.value;
  var cursor = getCaret(textarea);  
  switch (silencio_nota) {   
    case "redonda":
      text = text.substring(0,cursor)+'_z8'+text.substring(cursor,text.length);
      textarea.value = text;
      break;
    case "blanca":
      text = text.substring(0,cursor)+'_z4'+text.substring(cursor,text.length);
      textarea.value = text;      
      break;
    case "negra":
      text = text.substring(0,cursor)+'_z2'+text.substring(cursor,text.length);
      textarea.value = text;
      break;
    case "corchea":
      text = text.substring(0,cursor)+'_z1'+text.substring(cursor,text.length);
      textarea.value = text;
      break;
    case "semicorchea":
      text = text.substring(0,cursor)+'_z1/2'+text.substring(cursor,text.length);
      textarea.value = text;
      break;
    case "fusa":
      text = text.substring(0,cursor)+'_z1/4'+text.substring(cursor,text.length);
      textarea.value = text;
      break;
    case "semifusa":
      text = text.substring(0,cursor)+'_z1/8'+text.substring(cursor,text.length);
      textarea.value = text;
      break;
    default:
        alert("error");
        break;
  }
};

function encabezado_insert()
{  
  var encab = "X:"+pista_id.value + "\n";  
  encab = encab+"T:" + name_id.value+ "\n";  
  encab = encab+"M:" + metric_id.value+ "\n";
  encab = encab+"K:" + scale_id.value+ "\n";
  encab = encab+"R:" + comp_id.value+ "\n";
  encab = encab+"Q:C2=" + tempo_id.value+ "\n";
  encab = encab+"N:" + notes_id.value+ "\n";
  var textarea = document.getElementById('textarea');
  var texto = textarea.value;  
  textarea.value = encab + texto;  
};

function arreglos_insert()
{
  var textarea = document.getElementById('textarea');
  var text = textarea.value; 
  var cursor = getCaret(textarea);  
  var ligadura = document.getElementById('ligadura_checkbox');
  alert(ligadura);
  ligadura = ligadura.value;
  alert(ligadura);
  if (ligadura == "true")
  {
    text = text.substring(0,cursor)+"-"+text.substring(cursor,text.length); 
    textarea.value = text;
  }
}


function obtener_nota () {
  var Notas = "C";
  nots = document.getElementById('nota');
  nots= nots.value;
  switch (nots)
  {
    case "Do":
      Notas = "C";
      break;
    case "Re":
      Notas = "D";
      break;
    case "Mi":
      Notas = "E";
      break;
    case "Fa":
      Notas = "F";
      break;
    case "Sol":
      Notas = "G";
      break;
    case "La":
      Notas = "A";
      break;
    case "Si":
      Notas = "B";
      break;
  }  
  return Notas;
};


function obtener_duracion()
{
  var dur = document.getElementById('notas_figura');
  dur = dur.value;
  var duracion = "4";
  switch(dur)
  {
    case "redonda":
      duracion = "8";
      break;
    case "blanca":
      duracion = "4";
      break;
    case "negra":
      duracion = "2";
      break;
    case "corchea":
      duracion = "1";
      break;
    case "semicorchea":
      duracion = "1/2";
      break;
    case "fusa":
      duracion = "1/4";
      break;
    case "semifusa":
      duracion = "1/8";
      break;
  }
  return duracion;
};

function notas_insert()
{  
  var frec = document.getElementById("frecuencia");
  frec = frec.value;  
  var textarea = document.getElementById('textarea');
  var text = textarea.value;
  var cursor = getCaret(textarea);  
  switch(frec)
  {    
    case '1':      
      var nota = obtener_nota();      
      nota = nota + ",";
      nota = nota + obtener_duracion();
      text = text.substring(0,cursor)+nota+text.substring(cursor,text.length); 
      textarea.value = text;
      break;
    case '2':
      var nota = obtener_nota();
      nota = nota + obtener_duracion();
      text = text.substring(0,cursor)+nota+text.substring(cursor,text.length); 
      textarea.value = text;
      break;
    case '3':
      var nota = obtener_nota();
      nota = nota.toLowerCase();
      nota = nota + obtener_duracion();
      text = text.substring(0,cursor)+nota+text.substring(cursor,text.length); 
      textarea.value = text;
      break;
    case '4':
      var nota = obtener_nota();
      nota=nota.toLowerCase();
      nota = nota + obtener_duracion();
      texto.value = nota;
      nota = nota + "'"; 
      text = text.substring(0,cursor)+nota+text.substring(cursor,text.length); 
      textarea.value = text;     
      break;
  }
}

//SEGUNDA BARRA DE HERRAMIENTAS
function abrir_repeticion()
{
  var textarea = document.getElementById('textarea');
  var text = textarea.value;
  var cursor = getCaret(textarea);
  text = text.substring(0,cursor)+"|:"+text.substring(cursor,text.length); 
  textarea.value = text; 
};

function cerrar_repeticion()
{
  var textarea = document.getElementById('textarea');
  var text = textarea.value;
  var cursor = getCaret(textarea);
  text = text.substring(0,cursor)+":|"+text.substring(cursor,text.length); 
  textarea.value = text; 
};

function ligadura ()
{
  var textarea = document.getElementById('textarea');
  var text = textarea.value;
  var cursor = getCaret(textarea);
  text = text.substring(0,cursor)+"-"+text.substring(cursor,text.length); 
  textarea.value = text; 
};

function compas()
{
  var textarea = document.getElementById('textarea');
  var text = textarea.value;
  var cursor = getCaret(textarea);
  text = text.substring(0,cursor)+"|"+text.substring(cursor,text.length); 
  textarea.value = text; 
};

function sostenido()
{
  var textarea = document.getElementById('textarea');
  var text = textarea.value;
  var cursor = getCaret(textarea);
  text = text.substring(0,cursor)+"^"+text.substring(cursor,text.length); 
  textarea.value = text; 
};

function bemol()
{
  var textarea = document.getElementById('textarea');
  var text = textarea.value;
  var cursor = getCaret(textarea);
  text = text.substring(0,cursor)+"_"+text.substring(cursor,text.length); 
  textarea.value = text; 
};

function becuadro()
{
  var textarea = document.getElementById('textarea');
  var text = textarea.value;
  var cursor = getCaret(textarea);
  text = text.substring(0,cursor)+"="+text.substring(cursor,text.length); 
  textarea.value = text; 
};

function doble_sostenido()
{
  var textarea = document.getElementById('textarea');
  var text = textarea.value;
  var cursor = getCaret(textarea);
  text = text.substring(0,cursor)+"^^"+text.substring(cursor,text.length); 
  textarea.value = text; 
};

function limpiar()
{
  var textarea = document.getElementById('textarea');  
  textarea.value = ""; 
  document.getElementById("files12").style.visibility="visible";
  document.getElementById("Btn_Cargar").style.visibility="visible";
  document.getElementById("Btn_NUEVO").style.visibility="visible";
  
};

function barra_final()
{
  var textarea = document.getElementById('textarea');
  var text = textarea.value;
  var cursor = getCaret(textarea);
  text = text.substring(0,cursor)+"|]"+text.substring(cursor,text.length); 
  textarea.value = text; 
};

function arreglos_insert()
{
  var textarea = document.getElementById('textarea');
  var text = textarea.value;
  var cursor = getCaret(textarea);
  var opcion = document.getElementById('acentos_notas');
  opcion = opcion.value;
  switch (opcion)
  {
    case "staccato":
      opcion = ".";
      break;
    case "Irish roll":
      opcion = "~";
      break;
    case "calderón":
      opcion = "H";
      break;
    case "acento":
      opcion = "L";
      break;
    case "mordete bajo":
      opcion = "M";
      break;
    case "Coda":
      opcion = "O";
      break;
    case "mordete alto":
      opcion = "P";
      break;
    case "signo":
      opcion = "S";
      break;
    case "trill":
      opcion = "T";
      break;
    case "up-bow":
      opcion = "u";
      break;
    case "down-bow":
      opcion = "v";
      break;

  }
  text = text.substring(0,cursor)+opcion+text.substring(cursor,text.length); 
  textarea.value = text; 
};
  
function nuevo_ABC(){
	document.getElementById("files12").style.visibility="collapse";
	document.getElementById("Btn_Cargar").style.visibility="collapse";
	document.getElementById("contenedor_principal").style.visibility="visible";
	document.getElementById("Btn_NUEVO").style.visibility="collapse";

	
};

