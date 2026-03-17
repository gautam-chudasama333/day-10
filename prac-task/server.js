const https = require("https");
const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const helmet = require("helmet")

const app = express();
app.use(cors());

// helmet for security
app.use(helmet());

// versioned API
app.get("/api/v1", (req, res) => {
  res.send("In api version 1");
});

app.get("/api/v2", (req, res) => {
  res.send("In api version 2");
});

const secureServer = https.createServer(
  {
    key: fs.readFileSync(path.join(__dirname, "cert", "key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "cert", "cert.pem")),
  },
  app,
);

secureServer.listen(3443, () => {
  console.log("running on port 3443");
});
