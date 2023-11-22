const express = require("express");
const cors = require("cors");
const routerTO = require("./routers/routerTO");
const routerNYC = require("./routers/routerNYC");
const routerMIA = require("./routers/routerMIA");

const app = express();
const path = require("path");

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "/data")));

app.use("/toronto", routerTO);
app.use("/newyork", routerNYC);
app.use("/miami", routerMIA);

module.exports = app;
