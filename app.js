const express = require("express");
const cors = require("cors");
const router = require("./routers/routerTO");
// const routerN = require("./routers/routerNYC");
// const routerM = require("./routers/routerMIA");


const app = express();
const path = require("path");

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "/data")));

app.use("/", router);
// app.use("/newyork-city", routerN);
// app.use("/miami-city", routerM);

module.exports = app;
