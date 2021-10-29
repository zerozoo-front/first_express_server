const express = require("express");
const app = express();
const expressHandlebars = require("express-handlebars");
const port = process.env.PORT || 3000;
const fortune = require("./lib/fortune");
const handlers = require("./lib/handlers");

app.engine(
  "handlebars",
  expressHandlebars({
    defaultLayout: "main",
  })
);
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));

// app.get("/", (req, res) => {
//   res.render("home");
// });
app.get("/", handlers.home);
app.get("/about", handlers.about);
app.use(handlers.notFound);
app.use(handlers.serverError);

// app.get("/about", (req, res) => {
//   //   const fortunes = ["hello 1 ", "hello 2 ", "hello 3 ", "hello 4 ", "hello 5 "];
//   //   const randFortunes = fortunes[Math.floor(Math.random() * fortunes.length)];
//   res.render("about", { fortunes: fortune.getFortune });
// });

app.use((req, res) => {
  res.type("text/plain");
  res.status(404);
  res.send("404");
});

app.use((err, req, res, next) => {
  console.error(err);
  res.type("text/plain");
  res.status(500);
  res.send("500");
});

app.listen(port, () => {
  console.log("express server listen ... ", port);
});
