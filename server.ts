import path from "path";
import express from "express";

const app = express();

app.use(express.static("public"))

app.get("/", function onResponse(req, res) {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});
app.get("/register.html", function onResponse(req, res) {
  res.sendFile(path.join(__dirname, "..", "public", "register.html"));
});

module.exports = app