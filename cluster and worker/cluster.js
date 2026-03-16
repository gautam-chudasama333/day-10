// cluster module

const cluster = require("node:cluster");
const os = require("os");
const express = require("express");

// console.log(os.cpus().length);
if (cluster.isPrimary) {
  for (i = 0; i < os.cpus().length; i++) {
    cluster.fork();
  }
} else {
  const app = express();

  app.listen(3000, () => {
    console.log("running", process.pid);
  });
}
