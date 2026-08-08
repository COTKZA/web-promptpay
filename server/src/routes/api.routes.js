const express = require("express");
const checkSlip = require("../controllers/promptpay.controller");
const apiKeyMiddleware = require("../middleware/apiKey.middleware");
const router = express.Router();

router.post("/qr/scan", apiKeyMiddleware, checkSlip);

router.get("/test", (req,res)=>{
  res.json({
    message:"OK"
  });
});

module.exports = router;
