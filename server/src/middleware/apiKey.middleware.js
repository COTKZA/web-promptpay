require("dotenv").config();
const key = process.env.API_KEY;

const apiKeyMiddleware = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];

  if (!apiKey) {
    return res.status(401).json({
      message: "API key required",
    });
  }

  if (apiKey !== key) {
    return res.status(403).json({
      message: "Invalid API key",
    });
  }

  next();
};

module.exports = apiKeyMiddleware;
