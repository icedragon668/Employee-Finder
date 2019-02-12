const express = require('express')
const app = express();
const PORT = 8080;
const path = require('path');

app.use(express.static(path.join(__dirname, "public")));

app.get("/survey", function(req,res){
    res.sendFile(path.join(__dirname, "public/survey.html"));
});




app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
  });

  //PUT updates resources, POST makes new, DELETE, GET