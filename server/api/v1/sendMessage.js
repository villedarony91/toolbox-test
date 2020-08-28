const express = require("express");
const router = express.Router();

const sendMessageBack = async (req, res, next) => {
    res.sendStatus(200)
}

router
  .route("/api/v1/")
  .get(sendMessageBack);

module.exports = router;
