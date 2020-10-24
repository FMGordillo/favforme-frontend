import path from "path";
import express, { Response } from "express";

const ejs = require("ejs");

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function onResponse(_, res: Response) {
  res.render("index", {
    gmCode: process.env.IS_PROD ? "G-G2F19FBMTQ" : "G-N1SWDDR210",
  });
});
app.get("/privacypolicy.html", function onResponse(_, res: Response) {
  res.sendFile(path.join(__dirname, "..", "public", "privacypolicy.html"));
});
app.get("/terms.html", function onResponse(_, res: Response) {
  res.sendFile(path.join(__dirname, "..", "public", "terms.html"));
});
app.get("/register", function onResponse(_, res: Response) {
  res.redirect("https://forms.gle/Jr4FfwZFSTcrHDwaA");
});

module.exports = app;
