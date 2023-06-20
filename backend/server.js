const app = require("./index");
require("dotenv").config();

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("listening on port " + port);
});
