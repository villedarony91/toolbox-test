const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3300;
const NODE_ENV = process.env.NODE_ENV || "development";
const cors = require('cors')

app.use(cors())

app.set("port", PORT);
app.set("env", NODE_ENV);
app.use(bodyParser.json());
app.use("/", require("./api/v1/sendMessage"));

/**
 * Handle not found request
 */
app.use((req, res, next) => {
  const err = new Error(`${req.method} ${req.url} Not Found`);
  err.status = 404;
  next(err);
});


/**
 * Star express server
 */
app.listen(PORT, () => {
  console.log(
    `Express Server listening ${app.get("port")} | Environment : ${app.get(
      "env"
    )}`
  );
});


module.exports = app;