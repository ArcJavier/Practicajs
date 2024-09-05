//Array
var productos = [

    { nombre: "Coca", precio: "0.55", descripcion: "Unica en el mercado" },
    { nombre: "CremaSoda", precio: "0.78", descripcion: "Siente la frescura" },
    { nombre: "Uva", precio: "0.50", descripcion: "Sientas como si fuera la unica uva" },
    { nombre: "Oranjal", precio: "0.55", descripcion: "Siente el gas en tu boca" },
    { nombre: "Fanta", precio: "0.98", descripcion: "Sabor unico" },
    { nombre: "Mirinda", precio: "0.45", descripcion: "Descubre un nuevo sabor" },
    { nombre: "Salva Cola", precio: "0.66", descripcion: "Mismo color pero mejor" },
    { nombre: "Big Cola", precio: "0.70", descripcion: "Más grande" },
    { nombre: "Spry", precio: "0.80", descripcion: "Color unico" },
    { nombre: "Colachampan", precio: "0.75", descripcion: "!00% disfrutable" },

    
]

for (var i = 0; i < productos.length; i++) {
    document.getElementById("tablaproducto").innerHTML += "<tr>" + "<td>" + productos[i].nombre + "</td>" + "<td>" + productos[i].precio + "</td>" + "<td>" + productos[i].descripcion + "</td>" + "</tr>";
}