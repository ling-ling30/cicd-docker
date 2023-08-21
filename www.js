const app = require("./app.js");
require("dotenv").config();
const port = process.env.PORT || 3000;

app.listen(port, (req, res) => {
  console.log(`app is listening on port ${port}`);
});
