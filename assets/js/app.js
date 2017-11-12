var btn_principal = document.getElementById("btn_principal");
var contenedor = document.getElementById("contenedor");

btn_principal.addEventListener("click", function(){ // Función para que aparezca input
	var input = document.createElement("input");
  var contenedor_input = document.createElement("div");
  contenedor.removeChild(btn_principal); //removiendo btn_principal
  contenedor_input.classList.add("class", "div_input");
	input.setAttribute("type", "text");
	input.setAttribute("placeholder", "Add a list...");
	input.classList.add("class", "input_principal");
	input.value;

	var btn = document.createElement("button"); //Creando botón Guardar
	btn.setAttribute("id", "guardar");
	var text_btn = document.createTextNode("Save"); //Texto dentro del botón

  //papis 1
	contenedor.appendChild(input);
	btn.appendChild(text_btn);
	contenedor.appendChild(btn);
  contenedor.appendChild(contenedor_input);
  contenedor_input.appendChild(input);
  contenedor_input.appendChild(btn);

	var btn_guardar = document.getElementById("guardar");
	btn_guardar.addEventListener("click", function(){
	var contenedor_usuario = document.createElement("div");
  contenedor_input.classList.add("class", "div_input");
	var titulo_usuario = document.createElement("h4");
	var text_titulo_usuario = document.createTextNode(input.value);

  //papis 2
  titulo_usuario.appendChild(text_titulo_usuario);
  contenedor_usuario.appendChild(titulo_usuario);
  contenedor.appendChild(contenedor_usuario);

  })

})
