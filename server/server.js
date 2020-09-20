// =====================================================
//    				 Required
// =====================================================
const express  = require('express');
const path     = require('path');
const socketIO = require('socket.io');
const http     = require('http');
// =====================================================
//    				 Express y HTTP
// =====================================================
const app  = express();
let server = http.createServer(app);
// =====================================================
//    				 Carpeta Publica
// =====================================================
const publicPath = path.resolve(__dirname, '../public');
// =====================================================
//    				 Puerto
// =====================================================
const port = process.env.PORT || 3000;
// =====================================================
//    				 Middleware
// =====================================================
app.use(express.static(publicPath));
// =====================================================
//    				 Socket 
// =====================================================
module.exports.io = socketIO(server);
require('./socket/socket');
// =====================================================
//    				 Iniciar app
// =====================================================
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});