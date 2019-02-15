const express = require('express')
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');

app.use(express.urlencoded({ extended: true })); //why {extended: true} ?
app.use(express.json());

app.use(express.static(path.join(__dirname, "./app/public")));

//nearly forgot these
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
  });
