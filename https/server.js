const express = require("express");
const https = require("https");
const fs = require("fs");
const path = require("path");

const app = express();

app.use("/", (req, res, next) => {
  console.log("hello from secure server");
  res.send("secure server on port 3443");
});

const secServer = https.createServer(
  {
    key: fs.readFileSync(path.join(__dirname, "cert", "key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "cert", "cert.pem")),
  },
  app,
);

secServer.listen(3443, () => {
  console.log("secure server on port 3443");
});
