// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";
const express = require("express");
const bodyParser = require("body-parser");
const sass = require("node-sass-middleware");
const methodOverride = require('method-override');
const app = express();
const morgan = require('morgan');
const listingsRoutes = require("./routes/listings");
const resourcesRoutes = require("./routes/resources");
const registerRoutes = require("./routes/register");
const loginRoutes = require("./routes/login")
const logoutRoutes = require("./routes/logout")
const cookieSession = require('cookie-session');


app.use(cookieSession({
  name: 'session',
  keys: ['abcd', 'efgh']
}))
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(methodOverride('_method'));
app.use(express.static("public"));

app.use("/listings", listingsRoutes);
app.use("/resources", resourcesRoutes);
app.use("/register", registerRoutes);
app.use("/login", loginRoutes);
app.use("/logout", logoutRoutes)


app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
