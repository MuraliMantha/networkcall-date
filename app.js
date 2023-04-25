const express = require("express");
const app = express();

const addDays = require("date-fns/addDays");

app.get("/", (request, response) => {
  let datetime = new Date();
  let date = addDays(
    new Date(datetime.getFullYear(), datetime.getMonth(), datetime.getDate()),
    100
  );
  response.send(
    `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  );
});

app.listen(3000);
module.exports = app;
