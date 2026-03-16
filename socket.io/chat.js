import http from "http";
import express from "express";
import { Server } from "socket.io";
import path from "path";

const app = express();
const server = http.createServer(app);

app.use(express.static(path.resolve()));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

const io = new Server(server);

io.on("connection", (socket) => {
  console.log("connect");
  socket.on("chat-message", (msg) => {
    io.emit("message", msg);
  });

  socket.on("disconnect", () => {
    console.log("disconnected");
  });
});

server.listen(3000, () => {
  console.log("Running on port 3000");
});
