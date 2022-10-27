const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

var app = express();
app.use(cors());
app.use(bodyParser.json());
const tasks = [{ id: "0.563104459219606", text: "trial" }];

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/tasks", async (req, res) => {
  if (tasks.length === 0) {
    res.status(404).send([]);
    return;
  }

  res.status(200).send(tasks);
});

app.post("/tasks", async (req, res) => {
  console.log("received tasks", req.body);
  const id = Math.random().toString();
  tasks.push({ id, ...req.body });
  res.status(201).send({ id });
});

app.listen(2000, () => {
  console.log("Server started on port 2000");
});
// const tasks = [];
// var express = require("express");
// var app = express();

// app.get("/tasks", async (req, res) => {
//   console.log("req", req);
//   if (tasks.length === 0) {
//     res.status(404).send([]);
//   }
//   res.status(200).send(tasks);
// });

// var server = app.listen(8080, function () {
//   var host = server.address().address;
//   var port = server.address().port;

//   console.log("Example app listening at http://%s:%s", host, port);
// });
