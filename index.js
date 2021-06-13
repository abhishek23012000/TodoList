
require('dotenv').config();
console.log('hello');
const express=require('express');
const app=express();
const port=process.env.PORT || 8000;


const db=require('./config/mongoose');
const expressLayouts = require('express-ejs-layouts');


app.use(expressLayouts);

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
app.set('case sensitive routing', false);

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded());
app.use(express.static('assets'));










app.use("/", require('./routes'));

app.listen(port,(err)=>{
    if(err)
    {
        console.log('error in running server');
    }
    console.log(`server is running on port:${port}`);
});