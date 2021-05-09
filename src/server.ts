import express, { request, response } from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import './database';
import { routes } from "./routes";

const app = express();

const http = createServer(app); // protocolo http
const io = new Server(http); // protocolo websocket

io.on("connection", (socket: Socket) => {
  console.log(`Web socket conectado: ${socket.id}`);
  
});

app.use(express.json());

app.use(routes)

http.listen(3333, () => {
  console.log("Server on http://localhost:3333")
});
