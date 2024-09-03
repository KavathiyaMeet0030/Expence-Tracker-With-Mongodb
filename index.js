const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

const PORT =  3006;
const router = require('./Routes/index');
const db = require('./Confirg/Confirg');

app.set('view engine','ejs');
app.set('Views',path.join(__dirname,'/Views'))

app.use(express.static(path.join(__dirname,'/Views')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/',router);


app.listen(PORT ,(err)=>{

    if(!err){
        console.log(`Server Running on http://localhost:${PORT}`);
    }

})






