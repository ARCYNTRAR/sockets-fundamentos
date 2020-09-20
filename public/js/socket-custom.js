var socket = io();

socket.on("connect", function () {
  console.log("Conectado al Servidor");
});

// Escuchar
socket.on("disconnect", function () {
  console.log("Perdimos conexion con el servidor");
});

// Enviar Información
socket.emit(
  "enviarMensaje",
  {
    usuario: "Arcy",
    mensaje: "Hola Mundo",
  },
  function (resp) {
    console.log("Respuesta del servidor", resp);
  }
);

//Escuchar Información
socket.on("enviarMensaje", function (mensaje) {
  console.log("Servidor", mensaje);
});
