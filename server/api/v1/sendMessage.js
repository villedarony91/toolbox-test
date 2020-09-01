const express = require("express");
const router = express.Router();

const sendMessageBack = async (req, res, next) => {
  try {
    res.status(200).send(req.body);
  } catch (err) {
    res.status(500);
  }
};

router.route("/api/v1/").post(sendMessageBack);

module.exports = router;
