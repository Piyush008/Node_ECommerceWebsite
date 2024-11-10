const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const adminData = require("./routes/admin");
const shopRouter = require("./routes/shop");

const app = express();

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.router);
app.use(shopRouter);

app.use("/", (req, res, next) => {
  res.status(404).render("404", { docTitle: "Page not found", path: req.path });
});

app.listen(3000);
