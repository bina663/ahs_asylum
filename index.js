const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const path = require("path")
const port = process.env.PORT || 3030;
const app = express();

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/pages'));


app.get('/', async (req, res) => {
    const response = await axios.get("https://api-ahs-asylum.onrender.com/caractersAsylum")
    let app = await response.data;
    res.render("index",{result:app})
});

app.listen(port, () => {
    console.log("Server running: " + port);
});

