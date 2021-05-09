import express, { request, response } from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import path from "path";
import ejs from "ejs";
import './database';
import { routes } from "./routes";

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", ejs.renderFile);
app.set("view engine", "html");

app.get("/pages/client", (request, response) => {
  return response.render("html/client.html");
});

const http = createServer(app); // protocolo http
const io = new Server(http); // protocolo websocket

io.on("connection", (socket: Socket) => {
  console.log(`Web socket conectado: ${socket.id}`);
  
});

app.use(express.json());

app.use(routes)

export { http, io };
