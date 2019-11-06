const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const generateword = require("./generateword.js");
const helper = require("./handlebars-if.js");
const port = 3000;

//handlebars setting
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//static file
app.use(express.static("public"));

//body-parser setting
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  let option = req.body.group;
  //radio表單取得資料：req.body.group 即可選到value值
  //radio由於只能選1個，name設定相同，因此差異需設定在value
  let output = generateword(option);
  res.render("index", { output, option });
});

app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`);
});
