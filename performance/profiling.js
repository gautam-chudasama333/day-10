const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Home-Page");
});

app.get("/slow", (req, res) => {
  let j = 0;
  for (i = 0; i < 2999999000; i++) {
    j++;
  }
  res.send(j);
});

app.listen(3000, () => {
  console.log("running on port 3000");
});
