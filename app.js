const express = require('express');
const app = express();
let data = require('./data/data.json');
var http = require('http').Server(app);
var io = require("Socket.io")(http);
let feedback = require('./data/feedback.json');
var bodyParser = require('body-parser');



app.set('view engine', 'ejs');
app.set('appData', data);
app.set('views', 'views');


app.use(express.static('public'));
app.use(require('./Routes/index'));
app.use(require('./Routes/feedback'));
app.use(require('./Routes/modelS'));
app.use(require('./Routes/model3'));
app.use(require('./Routes/modelX'));
app.use(require('./Routes/modelRoadster'));
app.use(require('./Routes/api'));


app.listen(3000, ()=>{
    console.log("listening on port 3000")
}) 