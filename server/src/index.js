const express = require("express");
const cors = require("cors");
const apiRoutes = require("./routes/api.routes");
const app = express();
const port = 3000;

const corsOptions = {
  origin: true,
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["x-api-key", "Content-Type"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

if (process.env.NODE_ENV !== "production") {
  app.listen(3000, () => {
    console.log("Start app listening on port 3000");
  });
}

module.exports = app;