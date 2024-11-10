const express = require("express");
const path = require("path");

const rootDir = require("../util/path");
const { products } = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("shop", { products, docTitle: "Shop", path: req.path });
});

module.exports = router;
