const functions = require("firebase-functions");
const express = require("express");

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.post("/sendMail", (req, res) => {
  const { name } = req.body;
  let greeting = `Welcome ${name}`;
  console.log(greeting);
  res.send(greeting);
});

exports.app = functions.https.onRequest(app);
