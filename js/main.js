// Se obtiene una referencia al elemento <canvas> del documento HTML
var canvas = document.getElementById("lienzo");

// Se obtiene el contexto de renderizado en 2D del canvas
var ctx = canvas.getContext("2d");

// Ajustamos el tamaño del canvas al tamaño completo de la ventana
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Calculamos el 50% del ancho y alto de la pantalla
var rectWidth = window.innerWidth * 0.5;
var rectHeight = window.innerHeight * 0.5;

// Color de relleno
ctx.fillStyle = "rgb(79, 241, 46)";

// Dibujamos el rectángulo ocupando 50% del ancho y 50% del alto
ctx.fillRect(10, 10, rectWidth, rectHeight);
