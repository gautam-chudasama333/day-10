const http = require("http");
const express = require("express");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

const io = new Server(server);

io.on("connection", (socket) => {
  socket.on("message", (msg) => {
    console.log(msg);
  });

  socket.emit("hi","hiiiiii")
});

server.listen(3000, () => {
  console.log("running on port 3000");
});
