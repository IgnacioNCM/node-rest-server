const express = require('express')
const cors = require('cors');
const router = require('../routes/user.routes');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/api/usuarios';

        //middlewares
        this.middlewares();
        //rutas de la aplicación
        this.routes();
    }

    middlewares() {
        //CORS
        this.app.use(cors());
        // Lectura y Parse del body
        this.app.use(express.json());
        //Directorio publico
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.userPath, require('../routes/user.routes'));
    }

    listen() {
        this.app.listen(this.port);
    }
}

module.exports = Server;