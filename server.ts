import path from "path";
import debug from "debug";
import express, { Errback, Request, Response, NextFunction } from "express";

const app = express();

const log = debug("favforme_landing-server.ts");

/**
 * Configuration
 */
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(function logStuff(req: Request, res: Response, next: NextFunction) {
  log(`${req.method} ${req.url} - ${res.statusCode}`);
  next();
});

const renderProps = (title: string) => ({
  title,
  gmCode: process.env.GA_CODE,
});

/**
 * TODO: Create this with files
 * Routes
 */
app.get("/", function handleResponse(_, res: Response) {
  res.render("index", renderProps("index"));
});
app.get("/acciones", function handleResponse(_, res: Response) {
  res.redirect("/");
  // TODO: Enable the screen, when mockups are applied
  // res.render("actions");
});
app.get("/acciones/:actionId", function handleResponse(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { actionId } = req.query;
  if (!actionId) next();
  // TODO: Enable the screen, when mockups are applied
  // res.render(`actions/${actionId}`);
});
app.get("/privacypolicy.html", function handleResponse(_, res: Response) {
  res.sendFile(path.join(__dirname, "..", "public", "privacypolicy.html"));
});
app.get("/terms.html", function handleResponse(_, res: Response) {
  res.sendFile(path.join(__dirname, "..", "public", "terms.html"));
});
app.get("/register", function handleResponse(_, res: Response) {
  res.redirect("https://forms.gle/Jr4FfwZFSTcrHDwaA");
});

/**
 * Error handler
 */
app.use(function handle404(_, res: Response) {
  res.status(404).render("notfound");
});
app.use(function handleError(
  err: Errback,
  req: Request,
  res: Response,
  next: NextFunction
) {
  log("Error", err);
  res.render("error");
});

module.exports = app;
