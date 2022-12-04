// import inportant modules
import express from "express";
import http from "http";
import socketio from "socket.io";
import path from "path";


// instantiating objects
const app = express();
const server = new http.Server(app);
const io = new socketio.Server(server);


// using middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));


// exporting objects
export { server, io };