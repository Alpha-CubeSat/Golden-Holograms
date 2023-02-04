const express = require('express');
const app = express();

app.listen(3000, () => console.log("listening at 3000"))
app.use(express.static("public"));
app.use(express.json()); //can add limits her in props to protect server


app.post("/api", (request, response) => {
  response.json({
    "votestatus": "successful!"
  })
  console.log(request.body);
});



