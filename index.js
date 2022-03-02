const express = require("express");
const app = express();
app.use(express.urlencoded());
var bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.post("/bfhl", (req, res) => {
  var arr = req.body.data;
  var nums = [];
  var chars = [];
  arr.forEach((t) => {
    if (t > -1) {
      nums.push(t);
    } else {
      chars.push(t);
    }
  });
  const response = {
    is_success: true,
    user_id: "madhur_garg_02052001",
    email: "madhur0308.cse19@chitkara.edu.in",
    roll_number: "1910990308",
    numbers: nums,
    alphabets: chars,
  };

  res.end(JSON.stringify(response));
});
var PORT = process.env.port || 3000;
app.listen(PORT);
