const express = require("express");
const { Worker } = require("node:worker_threads");
const CustomError = require("../customError");

const app = express();

app.get("/", (req, res) => {
  res.send("Home-Page");
});

app.all("/error", (req, res) => {
  const err = new CustomError(`Can't find requested URL - ${req.originalUrl}`, 404);
  console.log(err);
});

app.get("/slow", (req, res) => {
  //   let j = 0;
  //   for (i = 0; i < 2999999000; i++) {
  //     j++;
  //   }
  //   res.send(j);

  //!   worker thread
  const worker = new Worker("./worker-file.js");

  worker.on("message", (e) => {
    res.send(e);
  });
});

app.listen(3000, () => {
  console.log("running on port 3000");
});
