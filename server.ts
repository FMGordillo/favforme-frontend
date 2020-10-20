import path from "path";
import express, { Response } from "express";

const app = express();

app.use(express.static("public"));

app.get("/", function onResponse(_, res: Response) {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});
app.get("/privacypolicy.html", function onResponse(_, res: Response) {
  res.sendFile(path.join(__dirname, "..", "public", "privacypolicy.html"));
});
app.get("/register", function onResponse(_, res: Response) {
  res.redirect("https://forms.gle/Jr4FfwZFSTcrHDwaA");
});

module.exports = app;
