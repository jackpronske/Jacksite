const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "..", "client", "public")));

app.listen(process.env.PORT || 3000, () => {
  console.log("listening on localhost:3000");
});
