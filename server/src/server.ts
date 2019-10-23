import * as express from 'express';
import * as io from 'socket.io';
import {createServer, Server} from "http";

export class ChatServer {
    public static PORT:number = 8080;
    private app: express.Application;
    private io: io.Server;
    private port: number | string;
    private server: Server;
    constructor() {
        this.app = express();
        this.port = process.env.PORT || ChatServer.PORT;
        this.server = createServer(this.app);
        this.io = io(this.server);
        this.addConnection();
    }

    addConnection() {
        this.server.listen(this.port, () => {
            console.log("Listening port " + this.port);
        });
        this.io.on('connect', function(socket:any) {
            console.log("Client connected..");
            socket.on('message', (message)=> {
                this.io.emit('message', message);
            });
            socket.on('disconnect', ()=> {
                console.log("Client disconnected");
            });
        });
    }

    getApplication() {
        return this.app;
    }
}