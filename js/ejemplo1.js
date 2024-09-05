var frutas = ["manzana", "uva", "Pera", "Guineo", "Pera", "piña"];

for (var i = 0; i < frutas.length; i++) {

    document.getElementById("listafrutas").innerHTML += "<li>" + frutas[i] + "</li>";

}

//object
var persona = { nombre: "Juan", telefono: "12345678" };

// Lista de objetos 
var contactos = [

    { nombre: "Juan", telefono: "12345678" },
    { nombre: "Carmen", telefono: "92345679" }

]

for (var i = 0; i < contactos.length; i++) {

    document.getElementById("listaContactos").innerHTML += "<li>" + contactos[i].nombre + ";" + contactos[i].telefono + "</li>";
    console.log(contactos[i]);
}