const express = require('express');

const app = express();



app.use(express.static('public'));
app.use(express.static('public/css/styles.css'));
app.use(require('./Routes/index'));
app.use(require('./Routes/modelS'));
app.use(require('./Routes/model3'));
app.use(require('./Routes/modelX'));
app.use(require('./Routes/modelY'));
app.use(require('./Routes/modelRoadster'));
app.use(require('./Routes/modelSemi'));



app.listen(3000, ()=>{
    console.log("Running on port 3000")
})