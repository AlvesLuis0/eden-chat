import express from "express";
import http from "http";
import socketio from "socket.io";
import path from "path";


const app = express();
const server = new http.Server(app);
const io = new socketio.Server(server);


app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));


export { server, io };